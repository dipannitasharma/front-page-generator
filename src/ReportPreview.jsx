import React from "react";

const ReportPreview = ({ formData }) => {
  return (
    /* RESPONSIVE WRAPPER */
    <div className="w-full overflow-x-auto flex justify-center">

      {/* SCALE CONTROLLER */}
      <div
        className="
          origin-top 
          scale-[0.6] 
          sm:scale-[0.7] 
          md:scale-[0.85] 
          lg:scale-100
        "
      >
        {/* ACTUAL A4 PAGE (DO NOT TOUCH SIZE) */}
        <div
          id="report-a4"
          className="w-[210mm] h-[297mm] bg-white px-12 py-10 shadow-lg text-center flex flex-col"
        >
          {/* INSTITUTE BLOCK */}
          <div className="flex flex-col items-center mt-10">
            <img src="./future.png" alt="FIEM Logo" className="h-20 mb-4" />

            <h2 className="text-xl font-bold text-[#000099]">
              FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT
            </h2>

            <p className="text-sm font-bold mt-3">[CC – 148]</p>
            <p className="text-sm font-bold mt-5">UNDER</p>
            <p className="text-sm font-bold mt-4">MAKAUT, WB</p>
          </div>

          <div className="mt-25"></div>

          {/* TITLE */}
          <div>
            <h1 className="text-2xl uppercase tracking-wide">
              {formData.title || "TITLE OF THE PRESENTATION"}
            </h1>
          </div>

          <div className="mt-14"></div>

          {/* CA + SUBJECT */}
          <div className="font-times">
            <p className="font-bold text-2xl text-[#0000FF]">
              CONTINUOUS ASSESSMENT #{formData.assessment === "CA1" ? "1" : "2"}
            </p>

            <p className="mt-2 font-bold">
              {formData.subject_name || "DATA WAREHOUSING & DATA MINING"}
            </p>

            <p className="mt-1 text-sm font-bold">
              {formData.subject_code || "PEC-IT602B"}
            </p>
          </div>

          <div className="mt-12"></div>

          {/* ACADEMIC SESSION */}
          <div>
            <p className="text-xl font-semibold mt-10">
              <span className="font-semibold text-[#0335CD]">
                Academic Session:
              </span>{" "}
              {formData.session || "2025-26"}
            </p>
          </div>

          <div className="mt-14"></div>

          {/* SUBMITTED BY */}
          <div className="font-times">
            <p className="text-2xl text-[#A50021] font-bold">SUBMITTED BY</p>

            <p className="mt-3 text-lg font-semibold uppercase">
              {formData.name || "NAME OF THE STUDENT"}
            </p>

            <p className="mt-3">
              {formData.university_roll || "UNIVERSITY ROLL NO."}
            </p>

            <p className="mt-3 text-lg font-semibold text-[#0033CC]">
              <span className="text-gray-500">{formData.year}</span> Year :
              <span className="text-gray-500"> {formData.semester}</span> Semester
            </p>

            <p className="mt-3 uppercase">
              {formData.department || "DEPARTMENT NAME"}
            </p>
          </div>

          {/* PUSH TEACHER DOWN */}
          <div className="flex-grow"></div>

          {/* TEACHER */}
          <div className="mb-6 font-times">
            
                <p className="text-mid font-semibold uppercase">
                Name of the Teacher: {formData.teacher_name}
                </p>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPreview;