import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import folderUploadIcon from "../imgs/folder-upload.svg";

export default function UploadDocument() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const maxSize = 5 * 1024 * 1024; // 5MB
      const allowedFormats = ["application/pdf", "image/jpeg", "image/png"];

      if (selectedFile.size > maxSize) {
        alert("File size exceeds 5MB limit");
        return;
      }

      if (!allowedFormats.includes(selectedFile.type)) {
        alert("Only PDF, JPG, and PNG formats are allowed");
        return;
      }

      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleNext = () => {
    if (!file) {
      alert("Please upload a valid ID document");
      return;
    }
    navigate("/allset", { state: { document: file } });
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
          className="mb-4 self-start p-0 text-black"
          style={{ color: "#000000" }}
          aria-label="Go back"
        >
          <span className="text-4xl text-black" style={{ color: "#000000" }}>
            ←
          </span>
        </button>

        {/* Header */}
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Identity & Documents
          </h1>
          <p className="text-gray-400 text-sm">
            Provide info & upload documents for verification.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="mb-6 flex items-center gap-2">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold text-xs mb-1.5">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-center text-xs font-medium text-teal-600 leading-tight whitespace-nowrap">
              Personal
              <br />
              information
            </p>
          </div>

          {/* Connector Line */}
          <div className="flex-1 h-0.5 bg-teal-500 self-start mt-1"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold text-xs mb-1.5">
              2
            </div>
            <p className="text-center text-xs font-medium text-teal-600 leading-tight whitespace-nowrap">
              Upload
              <br />
              Documents
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-3 mb-4">
          {/* Valid ID Card */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Valid ID Card
            </label>
            <input
              type="text"
              placeholder="Upload NIN or Drivers License"
              value={fileName}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm placeholder-gray-400 bg-gray-50 cursor-pointer"
              onClick={() => document.getElementById("fileInput").click()}
            />
          </div>

          {/* File Upload Area */}
          <div
            className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-teal-500 hover:bg-teal-50/30 transition-colors"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <input
              id="fileInput"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileSelect}
              className="hidden"
            />

            <img
              src={folderUploadIcon}
              alt=""
              className="mx-auto mb-3 h-7 w-7 object-contain"
            />

            <p className="text-sm font-medium text-teal-600 mb-1">
              Click to <span className="underline">select files to upload</span>
            </p>
            <p className="text-xs text-gray-500">
              Accepted formats: PDF, JPG, PNG. Max file size: 5MB.
            </p>

            {file && (
              <div className="mt-3 p-2 bg-teal-50 rounded border border-teal-200">
                <p className="text-xs text-teal-700 truncate">✓ {fileName}</p>
              </div>
            )}
          </div>
        </form>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-full rounded-lg bg-[#44A1A0] px-4 py-2.5 text-base font-semibold text-white transition-all duration-300 ease-out hover:bg-[#3b8c8b] active:bg-[#3b8c8b]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
