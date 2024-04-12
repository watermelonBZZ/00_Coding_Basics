import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    //这是什么意思
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 sm:w-64 sm:focus:w-72 sm:focus:outline-none sm:focus:ring sm:focus:ring-yellow-500 sm:focus:ring-opacity-50"
      />
    </form>
  );
}
