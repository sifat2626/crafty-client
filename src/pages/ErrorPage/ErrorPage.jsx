import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-2 bg-art-light dark:bg-purple-800">
      <h2 className="text-8xl text-red-400 font-bold">404</h2>
      <h4 className="text-4xl font-semibold">Page Not Found</h4>
      <Link className="text-2xl text-blue-600 font-medium" to={"/"}>
        Go to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
