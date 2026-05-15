import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PersonalInfo() {
  const navigate = useNavigate();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    phoneNumber: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.gender ||
      !formData.dateOfBirth ||
      !formData.phoneNumber
    ) {
      alert("Please fill in all required fields");
      return;
    }
    // Proceed to next step
    navigate("/upload-documents", { state: { personalInfo: formData } });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-sm px-4 pt-4 pb-4">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="mb-4 p-0 text-gray-600 hover:text-gray-900 transition-colors text-2xl"
          aria-label="Go back"
        >
          ←
        </button>

        {/* Header */}
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Signup To Get Started
          </h1>
          <p className="text-gray-400 text-sm">Lets create your account</p>
        </div>

        {/* Progress Tracker */}
        <div className="mb-6 flex items-center gap-2">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold text-xs mb-1.5">
              1
            </div>
            <p className="text-center text-xs font-medium text-teal-600 leading-tight whitespace-nowrap">
              Personal
              <br />
              information
            </p>
          </div>

          {/* Connector Line */}
          <div className="flex-1 h-0.5 bg-gray-300 self-start mt-1"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-semibold text-xs mb-1.5">
              2
            </div>
            <p className="text-center text-xs font-medium text-gray-400 leading-tight whitespace-nowrap">
              Upload
              <br />
              Documents
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-3 mb-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={(e) =>
                handleInputChange("firstName", e.currentTarget.value)
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm placeholder-gray-400"
            />
          </div>

          {/* Middle Name */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Middle Name
            </label>
            <input
              type="text"
              placeholder="Enter Middle Name"
              value={formData.middleName}
              onChange={(e) =>
                handleInputChange("middleName", e.currentTarget.value)
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm placeholder-gray-400"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={(e) =>
                handleInputChange("lastName", e.currentTarget.value)
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm placeholder-gray-400"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Gender
            </label>
            <div className="relative">
              <select
                value={formData.gender}
                onChange={(e) =>
                  handleInputChange("gender", e.currentTarget.value)
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm appearance-none bg-white cursor-pointer"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <div className="pointer-events-none absolute right-4 top-2 text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Date of Birth
            </label>
            <button
              type="button"
              onClick={() => setShowDatePicker(true)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm placeholder-gray-400 text-left flex items-center justify-between bg-white"
            >
              <span
                className={
                  formData.dateOfBirth ? "text-gray-900" : "text-gray-400"
                }
              >
                {formData.dateOfBirth
                  ? new Date(formData.dateOfBirth).toLocaleDateString()
                  : "Select Date"}
              </span>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-10h-4v4h4z" />
              </svg>
            </button>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={formData.phoneNumber}
              onChange={(e) =>
                handleInputChange("phoneNumber", e.currentTarget.value)
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm placeholder-gray-400"
            />
          </div>
        </form>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-full bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-base"
        >
          Next
        </button>

        {/* Date Picker Modal */}
        {showDatePicker && (
          <div className="fixed inset-0 bg-black/50 flex items-end z-50">
            <div className="w-full bg-white rounded-t-2xl p-4 animate-in slide-in-from-bottom">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Select Date of Birth
                </h3>
                <button
                  onClick={() => setShowDatePicker(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="mb-4">
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => {
                    handleInputChange("dateOfBirth", e.currentTarget.value);
                    setShowDatePicker(false);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
                  autoFocus
                />
              </div>

              <button
                onClick={() => setShowDatePicker(false)}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2.5 rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
