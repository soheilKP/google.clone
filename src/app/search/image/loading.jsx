const loading = () => {
  return (
    <>
      <div className="flex flex-col pb-42 sm:flex-row sm:space-x-4  mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse">
        <div>
          <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
          <div className="bg-gray-200 h-2 w-47 mb-2.5"></div>
          <div className="bg-gray-200 h-2 w-44 mb-2.5"></div>
        </div>
        <div className="hidden sm:inline-flex sm:space-x-4">
          <div>
            <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
            <div className="bg-gray-200 h-2 w-47 mb-2.5"></div>
            <div className="bg-gray-200 h-2 w-44 mb-2.5"></div>
          </div>
          <div>
            <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
            <div className="bg-gray-200 h-2 w-47 mb-2.5"></div>
            <div className="bg-gray-200 h-2 w-44 mb-2.5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default loading;
