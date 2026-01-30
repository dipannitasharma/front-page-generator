import React from "react";

const ReportPreview = ({ formData }) => {
  return (
    <div className="w-full overflow-x-auto flex justify-center">
      {/* PREVIEW SCALE ONLY */}
      <div className="origin-top scale-[0.6] sm:scale-[0.7] md:scale-[0.85] lg:scale-100">

        {/* EXPORT SAFE A4 */}
        <div
          id="report-a4"
          className="w-[210mm] bg-white px-12 py-10 text-center"
          style={{ transform: "none" }}
        >
          <div className="flex flex-col items-center mt-8">
            <img src="/future.png" alt="FIEM Logo" className="h-20 mb-4" />

            <h2 className="text-xl font-bold text-[#000099]">
              FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT
            </h2>

            <p className="text-sm font-bold mt-2">[CC – 148]</p>
            <p className="text-sm font-bold mt-3">UNDER</p>
            <p className="text-sm font-bold mt-2">MAKAUT, WB</p>
          </div>

          <div className="mt-10">
            <h1 className="text-2xl uppercase tracking-wide">
              {formData.title || "TITLE OF THE PRESENTATION"}
            </h1>
          </div>

          <div className="mt-10">
            <p className="font-bold text-2xl text-[#0000FF]">
              CONTINUOUS ASSESSMENT #{formData.assessment === "CA1" ? "1" : "2"}
            </p>

            <p className="mt-2 font-bold">
              {formData.subject_name || "SUBJECT NAME"}
            </p>

            <p className="mt-1 text-sm font-bold">
              {formData.subject_code || "SUBJECT CODE"}
            </p>
          </div>

          <div className="mt-10">
            <p className="text-lg font-semibold">
              <span className="text-[#0335CD]">Academic Session:</span>{" "}
              {formData.session || "2025-26"}
            </p>
          </div>

          <div className="mt-10">
            <p className="text-2xl text-[#A50021] font-bold">SUBMITTED BY</p>

            <p className="mt-3 text-lg font-semibold uppercase">
              {formData.name || "NAME OF THE STUDENT"}
            </p>

            <p>{formData.university_roll || "UNIVERSITY ROLL NO."}</p>

            <p className="mt-2 text-lg font-semibold text-[#0033CC]">
              {formData.year} Year : {formData.semester} Semester
            </p>

            <p className="mt-2 uppercase">
              {formData.department || "DEPARTMENT"}
            </p>
          </div>

          <div className="mt-6">
            <p className="font-semibold uppercase">
              Name of the Teacher: {formData.teacher_name || ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPreview;
