function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden p-4 flex flex-col items-center hover:shadow-lg transition">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-32 h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-semibold text-center">{book.title}</h2>
      <p className="text-sm text-gray-600">
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      </p>
      <p className="text-xs text-gray-500 mt-1">
        First published: {book.first_publish_year || "N/A"}
      </p>
    </div>
  );
}

export default BookCard;
