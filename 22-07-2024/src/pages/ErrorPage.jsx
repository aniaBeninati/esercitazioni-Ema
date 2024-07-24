import ErrorComponent from "../components/ErrorComponents";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <ErrorComponents message={error.statusText || error.message}>
        <Link className="bg-green-300" to="/">
          Go back Home
        </Link>
      </ErrorComponents>
    </div>
  );
}

export default ErrorPage;