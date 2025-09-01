import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/Searchbar";
import BookCard from "./components/Bookcard";
function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async (query) => {
    if (!query) return;
    setLoading(true);
    setError("");
    setBooks([]);

    try {
      const res = await axios.get(
        `https://openlibrary.org/search.json?title=${query}`
      );
      if (res.data.docs.length === 0) {
        setError("No books found. Try another title.");
      } else {
        setBooks(res.data.docs.slice(0, 20)); // first 20 results
      }
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📚 Book Finder</h1>
      <SearchBar onSearch={fetchBooks} />

      {loading && <p className="text-center mt-6">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-6">{error}</p>}

      <div className="grid gap-6 mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
