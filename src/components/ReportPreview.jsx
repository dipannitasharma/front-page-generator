import React from "react";

const ReportPreview = ({ formData }) => {
  return (
    <div className="w-full h-full flex justify-center items-start overflow-hidden">

      {/* A4 INNER PAGE */}
      <div
        id="report-a4"
        className="w-full h-full bg-white text-center px-12 py-10"
        style={{
          boxSizing: "border-box",
        }}
      >

        {/* HEADER */}
        <div className="flex flex-col items-center mt-6">
          <img src="/future.png" alt="FIEM Logo" className="h-20 mb-4" />

          <h2 className="text-xl font-bold text-[#000099]">
            FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT
          </h2>

          <p className="text-sm font-bold mt-2">[CC – 148]</p>
          <p className="text-sm font-bold mt-2">UNDER</p>
          <p className="text-sm font-bold mt-2">MAKAUT, WB</p>
        </div>

        {/* TITLE */}
        <div className="mt-8">
          <h1 className="text-2xl uppercase tracking-wide">
            {formData.title || "TITLE OF THE PRESENTATION"}
          </h1>
        </div>

        {/* ASSESSMENT */}
        <div className="mt-8">
          <p className="font-bold text-2xl text-[#0000FF] font-times">
            CONTINUOUS ASSESSMENT #
            {formData.assessment === "CA1" ? "1" : "2"}
          </p>

          <p className="mt-2 font-bold font-times">
            {formData.subject_name || "SUBJECT NAME"}
          </p>

          <p className="mt-1 text-sm font-bold font-times">
            {formData.subject_code || "SUBJECT CODE"}
          </p>
        </div>

        {/* SESSION */}
        <div className="mt-8">
          <p className="text-lg font-semibold">
            <span className="text-[#0335CD]">Academic Session:</span>{" "}
            {formData.session || "2025-26"}
          </p>
        </div>

        {/* STUDENT */}
        <div className="mt-8">
          <p className="text-2xl text-[#A50021] font-bold font-times">
            SUBMITTED BY
          </p>

          <div  className="flex flex-col gap-2">
            <p className="mt-3 text-lg font-semibold font-times uppercase">
            {formData.name || "NAME OF THE STUDENT"}
          </p>

          <p>{formData.university_roll || "UNIVERSITY ROLL NO."}</p>

          <p className="text-[#0033CC] font-semibold">
            <span className="text-gray-500">{formData.year}</span> Year :
            <span className="text-gray-500">
              {" "}
              {formData.semester}
            </span>{" "}
            Semester
          </p>

          <p className="mt-2 uppercase font-times">
            {formData.department || "DEPARTMENT"}
          </p>
          </div>
        </div>

        {/* TEACHER */}
        <div className="mt-10">
          <p className="font-semibold uppercase font-times">
            Name of the Teacher: {formData.teacher_name || ""}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ReportPreview;
