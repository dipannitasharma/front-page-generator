import React from "react";

const PresentationPreview = ({ formData }) => {
  
 return (
  <div className="w-full flex justify-center overflow-visible">

    {/* SCALE CONTAINER */}
    <div
      className="origin-top, scale-100"
      
    >
      {/* SLIDE */}
      <div
        id="presentation-slide"
        className="
          w-[960px]
          h-[600px]
          p-12
          flex
          flex-col
          justify-between
          text-center
          font-sans
          bg-[#f4f6fa]
        "
      >

        {/* ================= TOP ================= */}
        <div className="flex flex-col items-center space-y-1">
          <img
            src="/future.png"
            alt="FIEM Logo"
            className="h-20 object-contain mb-2"
          />

          <h2 className="text-xl font-bold text-[#000099]">
            FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT
          </h2>

          <p className="text-sm font-bold">[CC – 148]</p>
          <p className="text-sm font-bold">UNDER</p>
          <p className="text-sm font-bold">MAKAUT, WB</p>
        </div>

        {/* ================= CENTER ================= */}
        <div className="space-y-3">

          <h1 className="text-xl mt-4 font-semibold uppercase leading-snug">
            {formData.title || "TITLE OF THE PRESENTATION"}
          </h1>

          <p className="text-lg font-times font-bold text-[#0000FF]">
            CONTINUOUS ASSESSMENT #
            {formData.assessment === "CA1" ? "1" : "2"}
          </p>

          <p className="uppercase font-times font-semibold">
            {formData.subject_name || "SUBJECT NAME"}
          </p>

          <p className="uppercase font-times font-semibold">
            {formData.subject_code || "SUBJECT CODE"}
          </p>

          <p className="text-lg font-bold text-[#0335CD]">
            Academic Session: {formData.session || "2025-26"}
          </p>

        </div>

        {/* ================= STUDENT ================= */}
        <div className="space-y-1">

          <p className="text-xl font-times text-[#A50021] font-bold">
            PRESENTED BY
          </p>

          <p className="textlg font-times uppercase font-semibold">
            {formData.name || "STUDENT NAME"}
          </p>

          <p>
            {formData.university_roll || "ROLL NO"}
          </p>

          <p className="text-[#0033CC] font-semibold">
            <span className="text-gray-500">{formData.year}</span> Year :
            <span className="text-gray-500"> {formData.semester}</span> Semester
          </p>

          <p className="uppercase text-sm font-semibold">
            {formData.department || "DEPARTMENT"}
          </p>

        </div>

        {/* ================= TEACHER ================= */}
        <div>
          <p className="font-semibold font-times uppercase">
            Name of the Teacher: {formData.teacher_name || ""}
          </p>
        </div>

      </div>
    </div>
  </div>
  );
};

export default PresentationPreview;
