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

      {/* MAIN WRAPPER */}
      <div className="flex flex-col lg:flex-row min-h-screen">


        {/* ================= LEFT PANEL ================= */}
        <div
          className="
            w-full
            lg:fixed lg:top-0 lg:left-0
            lg:h-screen lg:w-[480px]
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
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
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
                  ? `${formData.subject_name || "Presentation"}.pdf`
                  : `${formData.subject_name || "Report"}.pdf`
              }
            >
              {({ loading }) => (
                <button
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 transition"
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
            flex-1
            lg:ml-120
            bg-gray-300
            flex
            justify-center
            items-start
            p-3 sm:p-4
            overflow-auto
          "
        >

          {/* SCALE WRAPPER */}
          <div
            className="flex justify-center w-full"
            style={{
              transform:
                formData.assessment === "CA2"
                  ? "scale(min(1, (90vw / 794), (85vh / 1123)))"
                  : "scale(min(1, (95vw / 960), (85vh / 540)))",

              transformOrigin: "top center",
            }}
          >

            {/* PAGE FRAME */}
            <div
              className={`
                bg-white
                shadow-2xl
                rounded-sm
                md:flex
                hidden
                justify-center
                items-center
                ${
                  formData.assessment === "CA1"
                    ? "w-[960px] aspect-video"
                    : "w-fit max-w-3xl h-280.75"
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

    </div>
  );
};

export default App;
