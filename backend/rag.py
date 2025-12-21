
import os
import cohere
from qdrant_client import QdrantClient
from dotenv import load_dotenv

load_dotenv()

# Get API keys from environment variables
COHERE_API_KEY = os.getenv("COHERE_API_KEY")
QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

# Initialize clients
co = cohere.Client(COHERE_API_KEY)
qdrant_client_instance = QdrantClient(
    url=QDRANT_URL, 
    api_key=QDRANT_API_KEY,
)

def query_rag(question, collection_name="book_collection"):
    """Queries the RAG system."""
    # Embed the question
    response = co.embed(
        texts=[question],
        model="embed-english-v3.0",
        input_type="search_query",
    )
    question_embedding = response.embeddings[0]

    # Search for similar chunks in Qdrant
    search_result = qdrant_client_instance.search(
        collection_name=collection_name,
        query_vector=question_embedding,
        limit=5,
    )

    # Augment the prompt and generate a response
    context = " ".join([hit.payload["text"] for hit in search_result])
    prompt = f"""You are a helpful assistant for a book. Answer ONLY based on the provided context. If unsure, say 'I don't know from the given context.'
Context: {context}
Question: {question}
Answer:"""

    response = co.generate(
        prompt=prompt,
        max_tokens=500,
    )

    return response.generations[0].text

def query_selected_text(question, selected_text):
    """Queries the selected text."""
    prompt = f"""You are a helpful assistant for a book. Answer ONLY based on the provided context. If unsure, say 'I don't know from the given context.'
Context: {selected_text}
Question: {question}
Answer:"""

    response = co.generate(
        prompt=prompt,
        max_tokens=500,
    )

    return response.generations[0].text
