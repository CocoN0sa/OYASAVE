import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Helper function to get initial form data from sessionStorage
const getInitialFormData = () => {
  try {
    const savedFormData = sessionStorage.getItem("personalInfoFormData");
    if (savedFormData) {
      return JSON.parse(savedFormData);
    }
  } catch (error) {
    console.error("Error loading form data from sessionStorage:", error);
  }
  return {
    firstname: "",
    middlename: "",
    lastname: "",
    gender: "",
    date: "",
    phonenumber: "",
  };
};

// Helper function to get initial file state from sessionStorage
const getInitialFileState = () => {
  try {
    const savedFileName = sessionStorage.getItem("uploadedFileName");
    if (savedFileName) {
      return {
        name: savedFileName,
        isRestored: true,
      };
    }
  } catch (error) {
    console.error("Error loading file data from sessionStorage:", error);
  }
  return null;
};

const PersonalInfo = () => {
  const [personalInfoOpen, setPersonalInfoOpen] = useState(false);
  const [uploadDocumentsOpen, setUploadDocumentsOpen] = useState(false);

  // Form state - initialized from sessionStorage
  const [formData, setFormData] = useState(getInitialFormData);

  // File upload state - initialized from sessionStorage
  const [uploadedFile, setUploadedFile] = useState(getInitialFileState);

  // Track if user has saved each section - initialized from sessionStorage
  const [personalInfoSaved, setPersonalInfoSaved] = useState(() => {
    try {
      return sessionStorage.getItem("personalInfoSaved") === "true";
    } catch {
      return false;
    }
  });

  const [uploadDocumentsSaved, setUploadDocumentsSaved] = useState(() => {
    try {
      return sessionStorage.getItem("uploadDocumentsSaved") === "true";
    } catch {
      return false;
    }
  });

  // Validation function for Personal Information
  const isPersonalInfoComplete = () => {
    return (
      formData.firstname.trim() !== "" &&
      formData.lastname.trim() !== "" &&
      formData.gender !== "" &&
      formData.date !== "" &&
      formData.phonenumber.trim() !== ""
    );
  };

  // Validation function for Upload Documents
  const isUploadDocumentsComplete = () => {
    return uploadedFile !== null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handlePersonalInfoSave = () => {
    try {
      sessionStorage.setItem("personalInfoFormData", JSON.stringify(formData));
      sessionStorage.setItem("personalInfoSaved", "true");
      setPersonalInfoSaved(true);
      alert("Personal information saved to sessionStorage!");
    } catch (error) {
      console.error("Error saving to sessionStorage:", error);
      alert("Failed to save personal information!");
    }
  };

  const handleUploadDocumentsSave = () => {
    if (uploadedFile) {
      try {
        sessionStorage.setItem("uploadedFileName", uploadedFile.name);
        sessionStorage.setItem("uploadDocumentsSaved", "true");
        setUploadDocumentsSaved(true);
        alert("Document uploaded and saved to sessionStorage!");
      } catch (error) {
        console.error("Error saving to sessionStorage:", error);
        alert("Failed to save document!");
      }
    } else {
      alert("Please upload a document first!");
    }
  };

  const personalInfoStatus = isPersonalInfoComplete();
  const uploadDocumentsStatus = isUploadDocumentsComplete();

  return (
    <div>
      <div className="container bg-white w-full max-w-md mx-auto p-4 pb-24">
        <div id="return-button" className="mt-2 mb-2">
          <button type="button">
            <p className="text-4xl">←</p>
          </button>
        </div>
        <div className="w-full h-auto gap-[4px] opacity-100">
          <div className="heading">
            <h2 className="font-bold text-2xl leading-[140%] tracking-normal">
              Update Personal Info
            </h2>
          </div>
          <div className="subtext">
            <p className="font-normal text-base pt-2 leading-[140%] tracking-normal text-[#98A2B3]">
              KYC & Verification
            </p>
          </div>
        </div>

        <div className="w-full bg-white rounded-2xl">
          <button
            onClick={() => setPersonalInfoOpen(!personalInfoOpen)}
            className="w-full flex items-center justify-between p-3 pl-0 text-left"
          >
            <div className="pl-0 flex gap-1">
              {personalInfoSaved && (
                <img
                  src={
                    personalInfoStatus
                      ? "/src/imgs/good.png"
                      : "/src/imgs/error.png"
                  }
                  alt=""
                  className="w-[17px & 17px] h-[17px] mt-1.5"
                />
              )}
              <div>
                <h2 className="font-semibold text-gray-800">
                  Personal Information
                </h2>
                {personalInfoSaved && (
                  <p
                    className={`font-aeonik font-normal text-[11px] leading-[140%] tracking-normal ${personalInfoStatus ? "text-[#34A853]" : "text-red-500"}`}
                  >
                    {personalInfoStatus ? "Completed" : "Incomplete"}
                  </p>
                )}
              </div>
            </div>

            <ChevronDown
              className={`transition-transform duration-300 ${
                personalInfoOpen ? "rotate-180" : ""
              }`}
              size={20}
            />
          </button>

          {/* Dropdown Content */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              personalInfoOpen
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 pl-0 pt-0 space-y-4">
              <div className="Firstname">
                <label
                  className="font-aeonik font-normal text-base leading-[140%] tracking-normal"
                  htmlFor="firstname"
                >
                  Firstname *
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  placeholder="Enter First Name"
                  className="w-full border rounded-xl px-3 py-2 my-1 border-[#D0D5DD] placeholder-[#98A2B3]"
                />
              </div>

              <div className="middlename mt-[-10px]">
                <label
                  className="font-aeonik font-normal text-base leading-[140%] tracking-normal"
                  htmlFor="middlename"
                >
                  Middlename
                </label>
                <input
                  type="text"
                  name="middlename"
                  value={formData.middlename}
                  onChange={handleInputChange}
                  placeholder="Enter Middle Name"
                  className="w-full border rounded-xl px-3 py-2 my-1 border-[#D0D5DD] placeholder-[#98A2B3]"
                />
              </div>

              <div className="lastname mt-[-10px]">
                <label
                  className="font-aeonik font-normal text-base leading-[140%] tracking-normal"
                  htmlFor="lastname"
                >
                  Lastname *
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  placeholder="Enter Last Name"
                  className="w-full border rounded-xl px-3 py-2 my-1 border-[#D0D5DD] placeholder-[#98A2B3]"
                />
              </div>
              <div className="gender mt-[-10px]">
                <label
                  className="font-aeonik font-normal text-base leading-[140%] tracking-normal"
                  htmlFor="gender"
                >
                  Gender *
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full border rounded-xl px-3 py-2 my-1 border-[#D0D5DD] text-[#98A2B3]"
                >
                  <option value="" className="text-[#98A2B3]">
                    Select Gender
                  </option>
                  <option value="male" className="text-gray-800">
                    Male
                  </option>
                  <option value="female" className="text-gray-800">
                    Female
                  </option>
                  <option value="other" className="text-gray-800">
                    Other
                  </option>
                </select>
              </div>

              <div className="date mt-[-10px]">
                <label
                  className="font-aeonik font-normal text-base leading-[140%] tracking-normal"
                  htmlFor="date"
                >
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  placeholder="Select date"
                  className="w-full border rounded-xl px-3 py-2 my-1 border-[#D0D5DD] text-[#98A2B3]"
                />
              </div>

              <div className="phonenumber mt-[-10px]">
                <label
                  className="font-aeonik font-normal text-base leading-[140%] tracking-normal"
                  htmlFor="phonenumber"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleInputChange}
                  placeholder="Enter Phone Number"
                  className="w-full border rounded-xl px-3 py-2 my-1 border-[#D0D5DD] placeholder-[#98A2B3]"
                />
              </div>

              <button
                onClick={handlePersonalInfoSave}
                className="w-full bg-teal-600 text-white py-2 rounded-xl hover:bg-teal-700 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-auto bg-white rounded-2xl p mt-3">
          {/* Header */}
          <button
            onClick={() => setUploadDocumentsOpen(!uploadDocumentsOpen)}
            className="w-full flex items-center justify-between p-3 pl-0 text-left"
          >
            <div className="pl-0 flex gap-1">
              {uploadDocumentsSaved && (
                <img
                  src={
                    uploadDocumentsStatus
                      ? "/src/imgs/good.png"
                      : "/src/imgs/error.png"
                  }
                  alt=""
                  className="w-[17px & 17px] h-[17px] mt-1.5"
                />
              )}
              <div>
                <h2 className="font-semibold text-gray-800">
                  Upload Documents
                </h2>
                {uploadDocumentsSaved && (
                  <p
                    className={`font-aeonik font-normal text-[11px] leading-[140%] tracking-normal ${uploadDocumentsStatus ? "text-[#34A853]" : "text-red-500"}`}
                  >
                    {uploadDocumentsStatus ? "Completed" : "Incomplete"}
                  </p>
                )}
              </div>
            </div>

            <ChevronDown
              className={`transition-transform duration-300 ${
                uploadDocumentsOpen ? "rotate-180" : ""
              }`}
              size={20}
            />
          </button>

          {/* Dropdown Content */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              uploadDocumentsOpen
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="font-aeonik font-normal text-base leading-[140%] tracking-normal">
              Valid ID Card *
            </p>
            <label className="w-full h-12 flex items-center mt-1 p-3.5 rounded-xl border border-[#D0D5DD] cursor-pointer bg-gray-50 hover:bg-gray-100">
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              {uploadedFile ? (
                <span className="text-green-600 font-aeonik font-normal text-base leading-[140%] tracking-normal">
                  {uploadedFile.name}
                </span>
              ) : (
                <span className="text-[#98A2B3] font-aeonik font-normal text-base leading-[140%] tracking-normal">
                  Upload NIN or Drivers License
                </span>
              )}
            </label>

            <button
              onClick={handleUploadDocumentsSave}
              className="w-full bg-teal-600 text-white my-5 py-2 rounded-xl hover:bg-teal-700 transition"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
