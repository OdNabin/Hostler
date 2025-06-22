import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const slideVariants = {
  initial: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 1,
    scale: 0.98,
    position: "absolute",
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    position: "relative",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 1,
    scale: 0.98,
    position: "absolute",
    transition: { duration: 0.4, ease: "easeInOut" },
  }),
};

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    birthday: "",
    email: "",
    phone: "",
    fatherPhone: "",
    gender: "",
    idProof: null,
    photo: null,
    address: "",
    street: "",
    state: "",
    pin: "",
  });

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "file" ? files[0] : value,
    }));
  };

  const validateStep = () => {
    if (step === 0) {
      const requiredFields = [
        "name",
        "fatherName",
        "birthday",
        "email",
        "phone",
        "fatherPhone",
        "gender",
        "idProof",
        "photo",
      ];
      for (const field of requiredFields) {
        if (!formData[field]) {
          toast.error(`Please fill in ${field}`);
          return false;
        }
      }
    }

    if (step === 1) {
      const requiredFields = ["address", "street", "state", "pin"];
      for (const field of requiredFields) {
        if (!formData[field]) {
          toast.error(`Please fill in ${field}`);
          return false;
        }
      }
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setDirection(1);
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setDirection(-1);
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log("Submitted data:", formData);
      toast.success("Form submitted successfully!");
    }
  };

  return (
    <div className="container  form-container position-relative " style={{ maxWidth: "100%" }}>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="position-relative overflow-hidden" style={{ minHeight: "600px" }}>
        <AnimatePresence custom={direction} mode="wait">
          {step === 0 && (
            <motion.div
              key="step1"
              layout
              className="form-step"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
            >
              <h3 className="mb-5">Personal Information</h3>
              <input id="name" type="text" placeholder="Name" className="form-control mb-3" onChange={handleChange} />
              <input id="fatherName" type="text" placeholder="Father's Name" className="form-control mb-3" onChange={handleChange} />
              <input id="birthday" type="date" className="form-control mb-3" onChange={handleChange} />
              <input id="email" type="email" placeholder="Email" className="form-control mb-3" onChange={handleChange} />
              <input id="phone" type="tel" placeholder="Phone" className="form-control mb-3" onChange={handleChange} />
              <input id="fatherPhone" type="tel" placeholder="Father's Phone" className="form-control mb-3" onChange={handleChange} />

              <div className="mb-3">
                <label>Gender:</label><br />
                <input type="radio" id="gender" name="gender" value="Male" onChange={handleChange} /> Male{" "}
                <input type="radio" id="gender" name="gender" value="Female" onChange={handleChange} /> Female{" "}
                <input type="radio" id="gender" name="gender" value="Other" onChange={handleChange} /> Other
              </div>

              <label>ID Proof:</label>
              <input id="idProof" type="file" className="form-control mb-3" onChange={handleChange} />

              <label>Photo:</label>
              <input id="photo" type="file" className="form-control mb-4" onChange={handleChange} />

              <button type="button" className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step2"
              layout
              className="form-step"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
            >
              <h3>Address Information</h3>
              <input id="address" type="text" placeholder="Address" className="form-control mb-3" onChange={handleChange} />
              <input id="street" type="text" placeholder="Street" className="form-control mb-3" onChange={handleChange} />
              <input id="state" type="text" placeholder="State" className="form-control mb-3" onChange={handleChange} />
              <input id="pin" type="text" placeholder="Pin Code" className="form-control mb-4" onChange={handleChange} />

              <button type="button" className="btn btn-secondary me-2" onClick={handleBack}>
                Back
              </button>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default MultiStepForm;
