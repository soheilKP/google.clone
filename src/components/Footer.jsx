import CountryLookup from "./CountryLookup";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-gray-300 w-full">
      <div className="border-b px-8 py-3 ">
        <CountryLookup />

        <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
          <ul className="flex items-center space-x-6">
            <li className="link">About</li>
            <li className="link">Advertising</li>
            <li className="link">Business</li>
            <li className="link">How Search Works</li>
          </ul>

          <ul className="flex items-center space-x-6">
            <li className="link">Privacy</li>
            <li className="link">Terms</li>
            <li className="link">Setting</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
