import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BaseUrl } from "../../config";

const Verification = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!code.trim()) {
      setError("Certificate code cannot be empty.");
      return;
    }

    try {
      const response = await fetch(`${BaseUrl}c-verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error("Failed to verify the code. Please try again later.");
      }

      const result = await response.json();

      if (result.valid) {
        setSuccess("Certificate code is valid!");
      } else {
        setError("Certificate code is invalid or does not exist.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        "There was an error verifying the code. Please try again later."
      );
    }
  };

  return (
    <div className="bg-Background-Home w-auto h-screen flex items-center justify-center flex-col gap-7">
      <h1 className="text-5xl">Verify your document!</h1>
      <h3 className="text-3xl">✅</h3>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <label
            htmlFor="code"
            className="block text-sm font-medium text-gray-700"
          >
            Certificate Code
          </label>
          <input
            type="text"
            id="code"
            name="code"
            placeholder="Enter certificate code"
            required
            value={code}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <Button type="submit">Click Here to Verify</Button>
      </form>
    </div>
  );
};

export default Verification;
