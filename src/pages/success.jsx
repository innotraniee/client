import { Link, useLocation } from "react-router";

const PaymentResponse = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const status = query.get("status");

  return (
    <div className="flex w-full my-12 items-center justify-center">
      {status === "success" ? (
        <div className="flex items-center flex-col">
          <h2 className="text-3xl font-bold">Payment Successful!</h2>
          <p>Thank you for payment.</p>
          <p>check your Email for Certificate.</p>
          <Link to="/" className="text-blue-600">Go to home</Link>
        </div>
      ) : (
        <h2 className="text-3xl font-bold">Payment Failed</h2>
        
      )}
    </div>
  );
};

export default PaymentResponse;
