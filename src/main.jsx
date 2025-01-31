import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Internship from "./pages/Internship.jsx";
import Verification from "./pages/Verification.jsx";
import Services from "./pages/Services.jsx";
import Error from "./pages/Error.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import RegistrationForm from "./pages/RegistrationForm.jsx";
import ProjectSubmission from "./pages/projectSubmission.jsx";
import PaymentSuccess from "./pages/success.jsx";
import Projects from "./pages/Projects.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/internships" element={<Internship />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/submit-project" element={<ProjectSubmission />} />
          <Route path="/payment/response" element={<PaymentSuccess />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
