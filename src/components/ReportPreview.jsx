import React from "react";

const ReportPreview = ({ formData }) => {
  return (
    <div
      style={{
        width: 794,
        height: 1123,
      }}
      className="bg-[#f8f9fb] p-10 shadow-2xl"
    >
      {/* OUTER BORDER */}
      <div className="border-3 border-black h-full p-5">

        {/* INNER BORDER */}
        <div className=" h-full flex flex-col justify-between px-16 py-14 text-center">

          {/* ================= TOP SECTION ================= */}
          <div>
            <div className="flex flex-col items-center">
              <img
                src="/future.png"
                alt="FIEM Logo"
                className="h-24 mb-6 object-contain"
              />

              <h2 className="text-lg font-bold text-[#000099]">
                FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT
              </h2>

              <p className="text-sm font-bold mt-4">[CC – 148]</p>
              <p className="text-sm font-bold mt-2">UNDER</p>
              <p className="text-sm font-bold mt-2">MAKAUT, WB</p>
            </div>

            {/* TITLE */}
            <div className="mt-24">
              <h1 className="text-xl uppercase tracking-wide">
                {formData.title || "TITLE OF THE PRESENTATION"}
              </h1>
            </div>

            {/* ASSESSMENT */}
            <div className="mt-10 space-y-2">
              <p className="text-2xl font-bold font-times text-[#0000FF]">
                CONTINUOUS ASSESSMENT #
                {formData.assessment === "CA1" ? "1" : "2"}
              </p>

              <p className="font-semibold font-times uppercase">
                {formData.subject_name || "SUBJECT NAME"}
              </p>

              <p className="font-semibold font-times uppercase">
                {formData.subject_code || "SUBJECT CODE"}
              </p>
            </div>

            {/* SESSION */}
            <div className="mt-14">
              <p className="font-semibold">
                Academic Session: {formData.session || "2025-26"}
              </p>
            </div>
          </div>

          {/* ================= BOTTOM SECTION ================= */}
          <div className="space-y-3">

            <p className="text-2xl text-[#A50021] font-times font-bold">
              REPORT SUBMITTED BY
            </p>

            <p className="text-xl font-semibold font-times uppercase">
              {formData.name || "NAME OF THE STUDENT"}
            </p>

            <p>{formData.university_roll || "UNIVERSITY ROLL NO."}</p>

            <p className="text-[#0000FF] font-bold">
              {formData.year} Year : {formData.semester} Semester
            </p>

            <p className="uppercase font-semibold">
              {formData.department || "DEPARTMENT"}
            </p>

            <div className="pt-10">
              <p className="font-semibold uppercase">
                Name of the Teacher: {formData.teacher_name}
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ReportPreview;