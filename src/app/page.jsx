import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

const Home = () => {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* Body */}
      <div className="flex flex-col items-center mt-24">
        <Image
          width="300"
          height="100"
          src="google-ar21.svg"
          alt="google-logo"
        />
        <HomeSearch />
      </div>

      {/* Footer */}
    </>
  );
};

export default Home;
