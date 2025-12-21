from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from rag import query_rag, query_selected_text
import logging

# Configure logging
logging.basicConfig(filename='fastapi.log', level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s')

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class QueryRequest(BaseModel):
    question: str

class QuerySelectedRequest(BaseModel):
    question: str
    selected_text: str

@app.post("/query")
async def query(request: QueryRequest):
    logging.info(f"Received query: {request.question}")
    try:
        answer = query_rag(request.question)
        logging.info(f"Query answer: {answer}")
        return {"answer": answer}
    except Exception as e:
        logging.error(f"Error processing query: {e}")
        return {"error": str(e)}, 500

@app.post("/query-selected")
async def query_selected(request: QuerySelectedRequest):
    logging.info(f"Received selected text query: {request.question}, selected_text: {request.selected_text}")
    try:
        answer = query_selected_text(request.question, request.selected_text)
        logging.info(f"Selected text query answer: {answer}")
        return {"answer": answer}
    except Exception as e:
        logging.error(f"Error processing selected text query: {e}")
        return {"error": str(e)}, 500

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)