import React, { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import Form from "./components/Form";
import ReportPreview from "./components/ReportPreview";
import PresentationPreview from "./components/PresentationPreview";

import ReportPDF from "./components/pdfs/ReportPDF";
import PresentationPDF from "./components/pdfs/PresentationPDF";

import generatePPTX from "./components/ppts/generatePPTX";
import Header from "./components/Header";

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

  /* ================= SCALE STATE ================= */
  const [scale, setScale] = useState(1);

  /* ================= AUTO SCALE ================= */
  useEffect(() => {
    function resize() {
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;

      // CA1 = PPT (16:9)
      const pptW = 960;
      const pptH = 540;

      // CA2 = A4
      const a4W = 794;
      const a4H = 900;

      const pageW =
        formData.assessment === "CA1" ? pptW : a4W;

      const pageH =
        formData.assessment === "CA1" ? pptH : a4H;

      const scaleW = screenW / pageW;
      const scaleH = screenH / pageH;

      const newScale = Math.min(scaleW, scaleH, 1);

      setScale(newScale);
    }

    resize();

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, [formData.assessment]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      {/* ================= MAIN WRAPPER ================= */}
      <div className="flex flex-col lg:flex-row min-h-screen mt-10">

        {/* ================= LEFT PANEL ================= */}
        <div
          className="
            w-full
            lg:fixed lg:top-0 lg:left-0
            lg:h-screen lg:w-120
            bg-white
            shadow-xl
            flex flex-col
            border-r
            z-20
          "
        >
          {/* FORM */}
          <div className="flex-1 overflow-y-auto p-4 mt-15">

            <div className="bg-white rounded-xl shadow-md border p-4">

              <Form
                formData={formData}
                setFormData={setFormData}
              />

            </div>
         

          {/* ================= BUTTON BAR ================= */}
          <div className="p-3 bg-white shadow-inner flex flex-wrap gap-2 justify-center">

            {/* PPTX DOWNLOAD */}
            {formData.assessment === "CA1" && (
              <button
                onClick={() => generatePPTX(formData)}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Download PPTX
              </button>
            )}

            {/* PDF DOWNLOAD */}
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
         </div>


        {/* ================= RIGHT PREVIEW ================= */}
        <div
          className="
            flex-1
            lg:ml-120
            flex
            justify-center
            items-start
            p-3
            overflow-auto
          "
        >

          {/* SCALE CONTAINER */}
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top center",
            }}
          >

            {/* PAGE FRAME */}
            <div
              className="bg-white shadow-2xl rounded-sm flex justify-center overflow-hidden"

              style={{
                width:
                  formData.assessment === "CA1"
                    ? "960px"
                    : "794px",

                height:
                  formData.assessment === "CA1"
                    ? "540px"
                    :  "900px"
,
              }}
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
