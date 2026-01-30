import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import Form from "./components/Form";
import ReportPreview from "./components/ReportPreview";
import PresentationPreview from "./components/PresentationPreview";

import ReportPDF from "./components/pdfs/ReportPDF";
import PresentationPDF from "./components/pdfs/PresentationPDF";

import generatePPTX from "./components/ppts/generatePPTX";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    university_roll: "",
    subject_name: "",
    subject_code: "",
    title: "",
    teacher_name: "",
    semester: "",
    year: "",
    department: "",
    session: "",
    assessment: "CA1",
  });

  return (
    <div className="bg-gray-100 min-h-screen">


      {/* ================= LEFT FIXED PANEL ================= */}
      <div
        className="
          fixed top-0 left-0 h-screen
          w-full lg:w-[480px]
          bg-white
          shadow-xl
          flex flex-col
          border-r
          z-20
        "
      >


        {/* FORM */}
        <div className="flex-1 overflow-y-auto p-4">

          <div className="bg-white rounded-xl shadow-md border p-4">

            <Form
              formData={formData}
              setFormData={setFormData}
            />

          </div>

        </div>


        {/* BUTTON BAR */}
        <div className="p-3 bg-white border-t shadow-inner flex flex-wrap gap-2 justify-center">


          {/* PPTX */}
          {formData.assessment === "CA1" && (
            <button
              onClick={() => generatePPTX(formData)}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Download PPTX
            </button>
          )}


          {/* PDF */}
          <PDFDownloadLink
            document={
              formData.assessment === "CA1" ? (
                <PresentationPDF data={formData} />
              ) : (
                <ReportPDF data={formData} />
              )
            }
            fileName={
              formData.assessment === "CA1"
                ? "CA1_Presentation.pdf"
                : "CA2_Report.pdf"
            }
          >
            {({ loading }) => (
              <button
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              >
                {loading ? "Preparing..." : "Download PDF"}
              </button>
            )}
          </PDFDownloadLink>

        </div>

      </div>


      {/* ================= RIGHT PREVIEW ================= */}
      <div
        className="
          ml-0 lg:ml-120
          min-h-screen
          bg-gray-300
          flex
          justify-center
          items-center
          p-4
        "
      >


        {/* SCALE WRAPPER */}
                <div
            style={{
              transform:
                formData.assessment === "CA2"
                  ? "scale(calc((100vh - 140px) / 1123))"
                  : "scale(1)",
              transformOrigin: "top center",
            }}
          >



          {/* PAGE FRAME */}
          <div
            className={`
              bg-white shadow-2xl rounded-sm
              ${
                formData.assessment === "CA1"
                  ? "w-240 aspect-video"
                  : "w-full h-fit"
              }
            `}
          >


            {/* CONTENT */}
            {formData.assessment === "CA1" ? (
              <PresentationPreview formData={formData} />
            ) : (
              <ReportPreview formData={formData} />
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default App;
