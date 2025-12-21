
import argparse
import os
import cohere
from qdrant_client import QdrantClient, models
import psycopg2
from dotenv import load_dotenv
from langchain_text_splitters import RecursiveCharacterTextSplitter

load_dotenv()

# Get API keys from environment variables
COHERE_API_KEY = os.getenv("COHERE_API_KEY")
QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
NEON_DB_URL = os.getenv("NEON_DB_URL")

# Initialize clients
co = cohere.Client(COHERE_API_KEY)
qdrant_client_instance = QdrantClient(
    url=QDRANT_URL, 
    api_key=QDRANT_API_KEY,
)
db_conn = psycopg2.connect(NEON_DB_URL)

from qdrant_client import QdrantClient, models

# ... (rest of the imports)

def create_qdrant_collection(collection_name):
    """Creates a Qdrant collection if it doesn't exist."""
    if not qdrant_client_instance.collection_exists(collection_name=collection_name):
        qdrant_client_instance.recreate_collection(
            collection_name=collection_name,
            vectors_config=models.VectorParams(
                size=1024,  # Cohere's default embedding size
                distance=models.Distance.COSINE,
            ),
        )

def ingest_text(text, collection_name="book_collection"):
    """Chunks, embeds, and upserts text to Qdrant, and logs to Postgres."""
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
    )
    chunks = text_splitter.split_text(text)

    # Embed chunks
    response = co.embed(
        texts=chunks,
        model="embed-english-v3.0",
        input_type="search_document",
    )
    embeddings = response.embeddings

    # Upsert to Qdrant
    qdrant_client_instance.upsert(
        collection_name=collection_name,
        points=models.Batch(
            ids=[i for i in range(len(chunks))],
            vectors=[embedding for embedding in embeddings],
            payloads=[
                {"text": chunk, "source": "book"} for chunk in chunks
            ],
        ),
    )

    # Log to Postgres
    cursor = db_conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS chunks (
            id SERIAL PRIMARY KEY,
            chunk_id INTEGER,
            source VARCHAR(255)
        );
    """)
    for i in range(len(chunks)):
        cursor.execute("INSERT INTO chunks (chunk_id, source) VALUES (%s, %s)", (i, "book"))
    db_conn.commit()
    cursor.close()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Ingest book content.")
    parser.add_argument("--text", type=str, help="Full book text.")
    parser.add_argument("--file", type=str, help="Path to a text file containing the book content.")
    args = parser.parse_args()

    if args.text:
        text_content = args.text
    elif args.file:
        with open(args.file, "r", encoding="utf-8") as f:
            text_content = f.read()
    else:
        print("Please provide either --text or --file.")
        exit()

    create_qdrant_collection("book_collection")
    ingest_text(text_content)
    print("Ingestion complete.")
    db_conn.close()
