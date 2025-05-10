import { Link } from "react-router-dom";
import Container from "../ui/Container";

const NotFound: React.FC = () => (
  <Container className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center gap-5">
    <h1 className="text-7xl font-bold text-gray-800">404</h1>
    <p className="mt-4 text-2xl text-gray-600">Oops! Page Not Found</p>
    <p className="mt-2 text-gray-500">
      The page you are looking for might have been removed or is temporarily
      unavailable.
    </p>
    <Link
      to="/"
      className="px-6 py-3 bg-gray-900 text-white rounded-md font-semibold shadow hover:bg-gray-800 transition hover:shadow-xl"
    >
      Go back to homepage
    </Link>
  </Container>
);

export default NotFound;
