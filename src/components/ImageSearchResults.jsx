import Link from "next/link";

const ImageSearchResults = ({ results }) => {
  return (
    <div className="pb-24 mt-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-3 space-x-4">
        {results.items.map((result) => (
          <div className="mb-8" key={result.link}>
            <div className="group">
              <Link href={result.image.contextLink}>
                <img
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
                  src={result.link}
                  alt={result.title}
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl">
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="text-gray-600">{result.displayLink}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearchResults;
