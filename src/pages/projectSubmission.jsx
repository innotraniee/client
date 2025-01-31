import { useState, useEffect } from "react";
import { BaseUrl } from "../../config";
// import Razorpay from "razorpay";
import logo from "../innoTraniee.svg";

const ProjectSubmission = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    internshipDomain: "",
    startDate: "",
    endDate: "",
    tasksPerformed: "",
    taskLinks: Array(5).fill(""),
    githubLinks: Array(5).fill(""),
    cId: "", // Certificate ID
  });

  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState(null);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  useEffect(() => {
    // Generate a unique Certificate ID (CId) for the user
    const generateCId = () =>
      `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
    setFormData((prev) => ({ ...prev, cId: generateCId() }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (index, value, field) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData((prev) => ({ ...prev, [field]: updatedArray }));
  };

  const handlePayment = async () => {
    setFormMessage(null);
    setErrors({});
    if (validateForm()) {
      setIsProcessingPayment(true);
      try {
        const response = await fetch(`${BaseUrl}create-order`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to create Razorpay order. Please try again.");
        }

        const { key, orderId, amount, currency } = await response.json();

        const options = {
          key_id: key,
          amount: amount.toString(),
          currency,
          name: formData.name,
          description: "Project Submission Fee",
          image: logo,
          order_id: orderId,
          handler: async (response) => {
            try {
              const verifyResponse = await fetch(`${BaseUrl}submit`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  ...formData,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });

              const verifyData = await verifyResponse.json();

              if (verifyResponse.ok && verifyData.success) {
                window.location.href = "/payment/response?status=success";
              } else {
                throw new Error(
                  "Payment verification failed. Please contact support."
                );
              }
            } catch (error) {
              setFormMessage({
                type: "error",
                text:
                  error.message || "An error occurred while verifying payment.",
              });
            }
          },
          prefill: {
            name: formData.name,
            email: formData.email,
          },
          notes: {
            address: "InnoTraniee",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp = new window.Razorpay(options);

        rzp.on("payment.failed", function (response) {
          setFormMessage({
            type: "error",
            text: `Payment failed. Reason: ${
              response.error.description || "Unknown error"
            }`,
          });
        });

        rzp.open();
      } catch (error) {
        setFormMessage({
          type: "error",
          text: error.message || "An error occurred during payment.",
        });
      } finally {
        setIsProcessingPayment(false);
      }
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setFormMessage(null);
  //   setErrors({});
  //   if (validateForm()) {
  //     // setIsSubmitting(true);
  //     try {
  //       const response = await fetch(`${BaseUrl}submit`, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(formData), // Submit form data including CId
  //       });
  //       const result = await response.json();
  //       if (response.ok) {
  //         setFormMessage({
  //           type: "success",
  //           text: "Form submitted successfully!",
  //         });
  //       } else {
  //         setFormMessage({ type: "error", text: result.message });
  //       }
  //     } catch {
  //       setFormMessage({
  //         type: "error",
  //         text: "An error occurred. Please try again.",
  //       });
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   }
  // };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      isValid = false;
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      isValid = false;
      newErrors.email = "Email is required.";
    }

    if (!formData.internshipDomain) {
      isValid = false;
      newErrors.internshipDomain = "Internship domain is required.";
    }

    if (!formData.tasksPerformed) {
      isValid = false;
      newErrors.tasksPerformed = "Number of tasks is required.";
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="max-w-3xl mx-auto p-6 my-5 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold ">Project Submission Form</h1>
      <p className="mb-6 text-red-500">
        please fill this form carefully because this details are reflected on
        your Certificate
      </p>
      {formMessage && (
        <div
          className={`p-4 mb-4 rounded ${
            formMessage.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {formMessage.text}
        </div>
      )}
      <form onSubmit={handlePayment} className="space-y-6">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="block font-medium">Internship Domain</label>
          <select
            name="internshipDomain"
            value={formData.internshipDomain}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">Select Domain</option>
            <option value="Data Science">Data Science</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Android Development">Android Development</option>
            <option value="Web Development">Web Development</option>
            <option value="Java Programming">Java Programming</option>
            <option value="Python Developer">Python Developer</option>
            <option value="C/C++ Programming">C/C++ Programming</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Artificial Intelligence">
              Artificial Intelligence
            </option>
          </select>
          {errors.internshipDomain && (
            <p className="text-red-500">{errors.internshipDomain}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Internship Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Internship End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium">
            How many tasks did you perform?
          </label>
          <input
            type="number"
            name="tasksPerformed"
            value={formData.tasksPerformed}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Task Links and GitHub Links */}
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="space-y-4">
              <label className="block font-medium">{`Task ${
                index + 1
              } LinkedIn post Link`}</label>
              <input
                type="url"
                name={`taskLinks-${index}`}
                value={formData.taskLinks[index]}
                onChange={(e) =>
                  handleArrayChange(index, e.target.value, "taskLinks")
                }
                placeholder="Enter LinkedIn post link or NA if not available"
                className="w-full border border-gray-300 rounded p-2"
              />
              <label className="block font-medium">{`Task ${
                index + 1
              } GitHub Repository Link`}</label>
              <input
                type="url"
                name={`githubLinks-${index}`}
                value={formData.githubLinks[index]}
                onChange={(e) =>
                  handleArrayChange(index, e.target.value, "githubLinks")
                }
                placeholder="Enter GitHub repository link or NA if not available"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
          ))}
        <div>
          <h2 className="text-lg font-medium mt-6">Payment Section</h2>
          <p className="text-sm text-gray-500">
            Please pay a small amount of Rs 99 to support our employees. and get your certificate.
          </p>
          <button
            type="button"
            
            onClick={handlePayment}
            disabled={isProcessingPayment}
            className={`w-full font-medium py-2 rounded mt-4 ${
              isProcessingPayment ? "bg-gray-300" : "bg-blue-600 text-white"
            }`}
          >
            {isProcessingPayment ? "Processing..." : "Proceed to Payment and Submit"}
          </button>
          <p>After successful payment please wait for few second to get confirmed...</p>
        </div>

        {/* <div className="text-right">
          <button
            type="submit"
            disabled={isSubmitting || isProcessingPayment}
            className={`px-6 py-2 bg-green-600 text-white font-bold rounded ${
              isSubmitting || isProcessingPayment ? "opacity-50" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Form"}
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default ProjectSubmission;
