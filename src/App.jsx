import React, { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import Form from "./components/Form";
import ReportPreview from "./components/ReportPreview";
import PresentationPreview from "./components/PresentationPreview";

import ReportPDF from "./components/pdfs/ReportPDF";
import PresentationPDF from "./components/pdfs/PresentationPDF";

import generatePPTX from "./components/ppts/generatePPTX";
import Header from "./components/Header";
// import Footer from "./components/Footer"; // Not needed

const HEADER_HEIGHT = 64; // adjust if needed

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
      const screenH = window.innerHeight - HEADER_HEIGHT;

      // CA1 = PPT
      const pptW = 960;
      const pptH = 540;

      // CA2 = Report
      const a4W = 794;
      const a4H = 800;

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
    /* ROOT (Dynamic Height for Mobile) */
    <div className="bg-gray-100 min-h-[100dvh] flex flex-col overflow-x-hidden">

      {/* ================= FIXED HEADER ================= */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />

      </div>

      {/* ================= MAIN CONTENT =========a======== */}
      <div
        className="
          flex
          flex-1
          flex-col
          lg:flex-row
          p-3
          lg:p-10
          gap-6
          justify-center
          items-center
          lg:items-start
        "
        style={{
          paddingTop: HEADER_HEIGHT,
        }}
      >

        {/* ================= LEFT PANEL ================= */}
        <div
          className="
            w-full
            lg:w-120
            bg-white
            border
            h-fit
            rounded-2xl
            px-4
            flex
            flex-col

            lg:sticky
            lg:top-20
          "
        >

          {/* FORM */}
          <div className="flex justify-center p-4">
            <div className="w-full max-w-md rounded-xl bg-white border p-4">

              <Form
                formData={formData}
                setFormData={setFormData}
              />

            </div>
          </div>

          {/* BUTTON BAR */}
          <div className="p-3 bg-white flex flex-wrap gap-2 justify-center">

            {formData.assessment === "CA1" && (
              <button
                onClick={() => generatePPTX(formData)}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Download PPTX
              </button>
            )}

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
            flex-1
            flex
            justify-center
            items-center
            lg:items-start
            p-4
            mt-4 lg:mt-0
            overflow-hidden
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
              className="
                bg-white
                shadow-2xl
                rounded-sm
                overflow-hidden
                flex
                justify-center
              "
              style={{
                width:
                  formData.assessment === "CA1"
                    ? "960px"
                    : "794px",

                height:
                  formData.assessment === "CA1"
                    ? "540px"
                    : "800px",
              }}
            >

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
