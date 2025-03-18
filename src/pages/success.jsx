import { Link, useLocation } from "react-router";
import { useEffect } from "react";

const Success = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const status = query.get("status");

  useEffect(() => {
    console.log("Payment status:", status);
  }, [status]);

  return (
    <div className="flex w-full my-12 items-center justify-center">
      {status === "success" ? (
        <div className="flex items-center flex-col">
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h2 className="text-3xl font-bold">Payment Successful!</h2>
          <p className="mt-2 text-gray-600">Thank you for your payment.</p>
          <p className="mt-1 text-gray-600">Please check your email for your certificate.</p>
          <Link to="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Return to Home
          </Link>
        </div>
      ) : (
        <div className="flex items-center flex-col">
          <div className="text-red-500 text-5xl mb-4">✗</div>
          <h2 className="text-3xl font-bold">Payment Failed</h2>
          <p className="mt-2 text-gray-600">We couldn&apos;t process your payment at this time.</p>
          <p className="mt-1 text-gray-600">Please try again or contact support if the issue persists.</p>
          <div className="mt-4 flex space-x-4">
            <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Return to Home
            </Link>
            <Link to="/project-submission" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Try Again
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Success;