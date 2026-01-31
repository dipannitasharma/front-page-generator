import React, { useState, useEffect, useRef } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import Form from "../components/Form";
import ReportPreview from "../components/ReportPreview";
import PresentationPreview from "../components/PresentationPreview";

import ReportPDF from "../components/pdfs/ReportPDF";
import PresentationPDF from "../components/pdfs/PresentationPDF";

import generatePPTX from "../components/ppts/generatePPTX";

const HEADER_HEIGHT = 64;

// Virtual canvas (for view only)
const PPT = { w: 960, h: 600 };
const A4 = { w: 800, h: 900 };

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

  const previewRef = useRef(null);

  /* VIEW MODE SCALE */
 useEffect(() => {
  const resize = () => {
    if (!previewRef.current) return;

    const isMobile = window.innerWidth < 768;

    const page =
      formData.assessment === "CA1" ? PPT : A4;

    const wrap = previewRef.current;

    const maxW = wrap.clientWidth - 24;
    const maxH =
      window.innerHeight - HEADER_HEIGHT - 60;

    let scaleW = maxW / page.w;
    let scaleH = maxH / page.h;

    let final;

    // 👉 REPORT: Fit by HEIGHT only (no scroll)
    if (formData.assessment === "CA2") {
      final = scaleH;
    }
    // 👉 PPT: Normal fit
    else {
      final = Math.min(scaleW, scaleH);
    }

    if (isMobile) final *= 0.95;

    if (final > 1) final = 1;

    setScale(final);
  };

  resize();
  window.addEventListener("resize", resize);

  return () =>
    window.removeEventListener("resize", resize);
}, [formData.assessment]);


  const page =
    formData.assessment === "CA1" ? PPT : A4;

  return (
  <div className="h-screen bg-[#0f0f0f] overflow-hidden">
    
    {/* HEADER SPACE
    <div style={{ height: HEADER_HEIGHT }} /> */}

    {/* MAIN AREA */}
    <div className="h-[calc(100vh-64px)] px-3 lg:px-8 py-4">

      <div
        className="
          h-full
          max-w-450
          mx-auto
          flex
          flex-col
          lg:flex-row
          gap-6
        "
      >
        {/* ================= LEFT ================= */}
        <div
          className="
            w-full
            lg:w-[420px]
            bg-[#2f2f2f]
            rounded-2xl
            flex
            flex-col
            h-full
            lg:h-fit
          "
        >
          {/* FORM */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="bg-[#3d3d3d] p-4 rounded-xl text-gray-200">
              <Form
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="p-6 m-6 flex gap-3 justify-center bg-[#3d3d3d] rounded-2xl">

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
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-60"
                >
                  {loading ? "Preparing..." : "Download PDF"}
                </button>
              )}
            </PDFDownloadLink>

          </div>
        </div>

        {/* ================= RIGHT ================= */}
<div
  ref={previewRef}
  className="
    flex-1
    bg-[#0F0F0F]
    rounded-2xl
    h-full
    flex
    justify-center
    items-center
    overflow-hidden
  "
>


          {/* SCALE WRAPPER */}
          <div
          className="flex justify-center items-center"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center center",
            }}
          >
            {/* PAGE */}
            <div
              className="bg-white mb-10 overflow-hidden"
              style={{
                width: page.w,
                height: page.h,
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
  </div>
);

};

export default Home;
