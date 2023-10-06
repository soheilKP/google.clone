"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa";
const PaginationButtons = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = Number(searchParams.get("start")) || 1;

  const previousLink =
    startIndex > 10 ? (
      <Link
        href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
      >
        <div className="flex flex-col cursor-pointer items-center hover:underline">
          <FaCircleChevronLeft className="h-5" />
          <p>Previous</p>
        </div>
      </Link>
    ) : null;

  const nextLink =
    startIndex < 100 ? (
      <Link
        href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
      >
        <div className="flex flex-col cursor-pointer items-center hover:underline">
          <FaCircleChevronRight className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    ) : null;

  return (
    <div className="text-blue-500 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {previousLink}
      {nextLink}
    </div>
  );
};

export default PaginationButtons;
