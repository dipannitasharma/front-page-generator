import React from "react";

const PresentationPreview = ({ formData }) => {
  return (
    /* RESPONSIVE WRAPPER */
    <div className="w-full overflow-x-auto flex justify-center">

      {/* SCALE CONTROLLER */}
      <div
        className="
          origin-top
          scale-[0.7]
          sm:scale-[0.8]
          md:scale-[0.9]
          lg:scale-100
        "
      >
        {/* ACTUAL SLIDE (FIXED SIZE) */}
        <div className="w-[960px] h-[540px] bg-white my-8 p-10 shadow-lg flex flex-col justify-between text-center">

          {/* TOP BLOCK */}
          <div className="flex flex-col items-center">
            <img src="./future.png" alt="FIEM Logo" className="h-16 mb-2" />

            <h2 className="text-lg font-bold">
              FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT
            </h2>

            <p className="text-sm font-bold">[CC – 148]</p>
            <p className="text-sm font-bold">UNDER</p>
            <p className="text-sm font-bold">MAKAUT, WB</p>
          </div>

          {/* TITLE + SUBJECT */}
          <div>
            <h1 className="text-lg uppercase mt-2">
              {formData.title || "TITLE OF THE PRESENTATION"}
            </h1>

            <p className="mt-3 text-lg font-semibold text-[#0000FF]">
              CONTINUOUS ASSESSMENT #{formData.assessment === "CA1" ? "1" : "2"}
            </p>

            <p className="mt-2 uppercase font-semibold">
              {formData.subject_name || "SUBJECT NAME"}
            </p>

            <p className="uppercase font-semibold">
              {formData.subject_code || "SUBJECT CODE"}
            </p>

            <p className="mt-2 text-lg text-[#0335CD] font-bold">
              Academic Session: {formData.session || "2025-26"}
            </p>
          </div>

          {/* STUDENT DETAILS */}
          <div>
            <p className="text-sm text-[#A50021] font-bold">
              PRESENTED BY
            </p>

            <p className="text-lg uppercase">
              {formData.name || "STUDENT NAME"}
            </p>

            <p>
              {formData.university_roll || "ROLL NO"}
            </p>

            <p className="text-[#0033CC] font-semibold">
              <span className="text-gray-500">
                {formData.year}
              </span>{" "}
              Year :{" "}
              <span className="text-gray-500">
                {formData.semester}
              </span>{" "}
              Semester
            </p>

            <p className="uppercase text-sm">
              {formData.department || "DEPARTMENT"}
            </p>
          </div>

          {/* TEACHER */}
          <div>
            <p className="font-semibold uppercase">
              Name of the Teacher: {formData.teacher_name || ""}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PresentationPreview;