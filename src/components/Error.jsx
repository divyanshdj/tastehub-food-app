import { useRouteError, Link } from "react-router-dom";
import '../css/Error.css'; // Assuming you will add a CSS file for custom styles

const Error = () => {
  const err = useRouteError();
  
  // Fallback in case error status or statusText is missing
  const errorMessage = err?.statusText || "Something went wrong!";
  const errorStatus = err?.status || "Unknown Error";

  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-title">Oops! Something went wrong.</h1>
        <h2 className="error-status">
          Error {errorStatus}: {errorMessage}
        </h2>
        <p className="error-description">
          We're sorry, but we couldn't process your request. Please try again later.
        </p>
        <div className="error-actions">
          <Link to="/" className="btn-home">
            Go to Homepage
          </Link>
          <Link to="#" className="btn-retry">
            Retry
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
