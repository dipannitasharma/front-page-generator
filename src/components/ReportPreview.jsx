import React from "react";

const ReportPreview = ({ formData }) => {
  return (
    <div className="w-full flex justify-center overflow-hidden">

      {/* PAGE */}
      <div
        className="
          w-full
          max-w-200
          h-225
          bg-[#f8f9fb]
          px-8
          md:px-16
          py-10
          md:py-14
          flex
          flex-col
          text-center
          font-serif
        "
      >
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center">
          <img
            src="/future.png"
            alt="FIEM Logo"
            className="h-20 md:h-24 mb-5 object-contain"
          />

          <h2 className="text-lg md:text-xl font-bold text-[#000099]">
            FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT
          </h2>

          <p className="mt-1 text-sm font-bold">[CC – 148]</p>
          <p className="text-sm font-bold">UNDER</p>
          <p className="text-sm font-bold">MAKAUT, WB</p>
        </div>

        {/* ================= TITLE ================= */}
        <div className="mt-10 md:mt-14">
          <h1 className="text-lg md:text-xl tracking-wide uppercase leading-snug">
            {formData.title || "TITLE OF THE PRESENTATION"}
          </h1>
        </div>

        {/* ================= ASSESSMENT ================= */}
        <div className="mt-8 md:mt-10 space-y-2">
          <p className="text-xl md:text-2xl font-bold text-[#0000FF]">
            CONTINUOUS ASSESSMENT #
            {formData.assessment === "CA1" ? "1" : "2"}
          </p>

          <p className="text-base md:text-lg font-semibold uppercase">
            {formData.subject_name || "SUBJECT NAME"}
          </p>

          <p className="text-base font-semibold">
            {formData.subject_code || "SUBJECT CODE"}
          </p>
        </div>

        {/* ================= SESSION ================= */}
        <div className="mt-8 md:mt-10">
          <p className="text-base md:text-lg font-semibold">
            <span className="text-[#0335CD]">
              Academic Session:
            </span>{" "}
            {formData.session || "2025-26"}
          </p>
        </div>

        {/* ================= STUDENT ================= */}
        <div className="mt-10 md:mt-14 space-y-2">
          <p className="text-xl md:text-2xl text-[#A50021] font-bold">
            SUBMITTED BY
          </p>

          <p className="mt-3 text-lg md:text-xl font-semibold uppercase">
            {formData.name || "NAME OF THE STUDENT"}
          </p>

          <p className="text-base">
            {formData.university_roll || "UNIVERSITY ROLL NO."}
          </p>

          <p className="text-[#0033CC] font-semibold text-sm md:text-base">
            <span className="text-gray-500">
              {formData.year}
            </span>{" "}
            Year :
            <span className="text-gray-500">
              {" "}
              {formData.semester}
            </span>{" "}
            Semester
          </p>

          <p className="uppercase font-semibold">
            {formData.department || "DEPARTMENT"}
          </p>
        </div>

        {/* ================= TEACHER ================= */}
        <div className="mt-auto pt-8 md:pt-12">
          <p className="font-semibold uppercase">
            Name of the Teacher:{" "}
            {formData.teacher_name || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportPreview;
