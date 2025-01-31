import { Link } from "react-router";

const Error = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-5">
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?t=st=1735981008~exp=1735984608~hmac=1cb1e94cafed642908b9b5e15db940327c0e7a4991a21ef3ee0982740d73b5be&w=740"
          alt="error"
          className="w-auto h-auto max-h-96"
        />
        <h1 className="text-2xl font-bold">404 Page Not Found</h1>
        <p >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="text-blue-600 mb-10">Go back to home</Link>
      </div>
    </>
  );
};

export default Error;
