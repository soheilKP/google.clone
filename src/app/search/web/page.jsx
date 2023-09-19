import Link from "next/link";

const WebSearchPage = async ({ searchParams }) => {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try to search for something else or go back to the{" "}
        </p>
        <Link href="/" className="text-blue-500">
          Homepage
        </Link>
      </div>
    );
  }

  return (
    <>
      {results &&
        results.map((result) => <h1 key={result.id}>{result.title}</h1>)}
    </>
  );
};

export default WebSearchPage;
