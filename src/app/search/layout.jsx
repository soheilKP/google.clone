import SearchHeader from "@/components/SearchHeader";
import "./../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google clone",
  description: "Google clone created by Next js",
};

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
      {/* Footer */}
    </div>
  );
}
