
function NotFoundError() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 pb-8 pt-20">
      <h1 className="text-6xl font-bold text-[#f273f2]">404</h1>
      <p className="mt-4 text-xl text-gray-700 font-bold">Page Not Found</p>
      <p className="mt-2 text-gray-500">The page you are looking for does not exist.</p>
    </div>
  );
}   

export default NotFoundError;