import React, { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import Form from "../components/Form";
import ReportPreview from "../components/ReportPreview";
import PresentationPreview from "../components/PresentationPreview";

import ReportPDF from "../components/pdfs/ReportPDF";
import PresentationPDF from "../components/pdfs/PresentationPDF";

import generatePPTX from "../components/ppts/generatePPTX";

const HEADER_HEIGHT = 64;

const Home = () => {
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

  const [scale, setScale] = useState(1);

  /* AUTO SCALE PREVIEW */
  useEffect(() => {
    function resize() {
      const screenW = window.innerWidth;
      const screenH = window.innerHeight - HEADER_HEIGHT - 40;

      // Correct sizes
      const pptW = 960;
      const pptH = 540;

      const a4W = 794;
      const a4H = 1123;

      const pageW = formData.assessment === "CA1" ? pptW : a4W;
      const pageH = formData.assessment === "CA1" ? pptH : a4H;

      const scaleW = screenW / pageW;
      const scaleH = screenH / pageH;

      // Prevent too small scale on mobile
      const finalScale = Math.max(
        Math.min(scaleW, scaleH, 1),
        0.5
      );

      setScale(finalScale);
    }

    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, [formData.assessment]);

  return (
    <div
      className="
        flex flex-col lg:flex-row
        min-h-screen
        p-3 lg:p-10
        gap-6
        items-stretch
        overflow-x-hidden
      "
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      {/* ================= LEFT PANEL ================= */}
      <div
        className="
          w-full
          lg:w-[420px]
          bg-[#323232]
          rounded-2xl
          flex flex-col
          lg:sticky
          top-20
          h-fit
        "
      >
        {/* FORM */}
        <div className="flex-1 overflow-y-auto p-3">
          <div className="bg-[#444] text-gray-200 border p-4 rounded-xl">
            <Form
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="p-3 m-3 bg-[#444] flex gap-3 justify-center rounded-xl mb-3">

          {formData.assessment === "CA1" && (
            <button
              onClick={() => generatePPTX(formData)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
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
            fileName="file.pdf"
          >
            {({ loading }) => (
              <button
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
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
          bg-[#121212]
          rounded-xl
          flex
          justify-center
          items-center
          overflow-auto
          p-3
          mt-15
        "
      >
        {/* SCALE CONTAINER */}
        <div
          className="flex justify-center w-full"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          {/* PAGE FRAME */}
          <div
            className="bg-white shadow-xl rounded-2xl overflow-hidden"
            style={{
              width:
                formData.assessment === "CA1"
                  ? "960px"
                  : "794px",

              height:
                formData.assessment === "CA1"
                  ? "540px"
                  : "900px",
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
  );
};

export default Home;
