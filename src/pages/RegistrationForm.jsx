import { useState } from "react";
import { BaseUrl } from "../../config";
import { useNavigate } from "react-router";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    emailAddress: "",
    name: "",
    gender: "",
    preferredDomain: "",
    college: "",
    contactNumber: "",
    whatsappNumber: "",
    qualification: "",
    currentYear: "",
    linkedInAndInstagram: false,
    acknowledgment: false,
  });

  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.emailAddress)
      tempErrors.emailAddress = "Email Address is required.";
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.gender) tempErrors.gender = "Gender is required.";
    if (!formData.preferredDomain)
      tempErrors.preferredDomain = "Preferred Internship Domain is required.";
    if (!formData.college) tempErrors.college = "College is required.";
    if (!formData.contactNumber)
      tempErrors.contactNumber = "Contact Number is required.";
    if (!formData.whatsappNumber)
      tempErrors.whatsappNumber = "WhatsApp Number is required.";
    if (!formData.qualification)
      tempErrors.qualification = "Academic Qualification is required.";
    if (!formData.currentYear)
      tempErrors.currentYear = "Current Year is required.";
    if (!formData.acknowledgment)
      tempErrors.acknowledgment = "Acknowledgment is mandatory.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMessage(null);
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BaseUrl}form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormMessage({
          type: "success",
          text: "Form submitted successfully! Redirecting to home...",
        });
        setFormData({
          emailAddress: "",
          name: "",
          gender: "",
          preferredDomain: "",
          college: "",
          contactNumber: "",
          whatsappNumber: "",
          qualification: "",
          currentYear: "",
          linkedInAndInstagram: false,
          acknowledgment: false,
        });
        setErrors({});
        setTimeout(() => {
          navigate("/");
        }, 3000);
        setIsSubmitting(false);
      } else {
        const errorData = await response.json();

        if (response.status === 400) {
          setFormMessage({ type: "error", text: errorData.message });
        } else {
          setFormMessage({
            type: "error",
            text: "Failed to submit form. Please try again.",
          });
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormMessage({
        type: "error",
        text: "An unexpected error occurred. Please try again later.",
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md m-4 mb-10">
      <h1 className="text-2xl font-bold mb-6">Registration Form</h1>
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
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Email Address</label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.emailAddress && (
            <p className="text-red-500">{errors.emailAddress}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="block font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500">{errors.gender}</p>}
        </div>

        <div>
          <label className="block font-medium">
            Preferred Internship Domain
          </label>
          <select
            name="preferredDomain"
            value={formData.preferredDomain}
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
          {errors.preferredDomain && (
            <p className="text-red-500">{errors.preferredDomain}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">College</label>
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            placeholder="Enter your college name"
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.college && <p className="text-red-500">{errors.college}</p>}
        </div>

        <div>
          <label className="block font-medium">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Enter your contact number"
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.contactNumber && (
            <p className="text-red-500">{errors.contactNumber}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">WhatsApp Number</label>
          <input
            type="text"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            placeholder="Enter your WhatsApp number"
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.whatsappNumber && (
            <p className="text-red-500">{errors.whatsappNumber}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">
            Highest Academic Qualification
          </label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="Enter your academic qualification"
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.qualification && (
            <p className="text-red-500">{errors.qualification}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Current Year (Education)</label>
          <input
            type="text"
            name="currentYear"
            value={formData.currentYear}
            onChange={handleChange}
            placeholder="Enter your current year"
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.currentYear && (
            <p className="text-red-500">{errors.currentYear}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Follow Us on Social Media</label>
          <p className="text-blue-500 font-medium">
            <a
              href="https://www.linkedin.com/company/innotraniee/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
          </p>
          <p className="text-pink-500 font-medium">
            <a
              href="https://www.instagram.com/innotraniee/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Instagram
            </a>
          </p>
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="acknowledgment"
              checked={formData.acknowledgment}
              onChange={handleChange}
              className="mr-2"
            />
            I have understood the internship details and acknowledge the terms.
          </label>
          {errors.acknowledgment && (
            <p className="text-red-500">{errors.acknowledgment}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
