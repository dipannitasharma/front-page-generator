import React, { useState, useEffect, useRef } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import Form from "../components/Form";
import ReportPreview from "../components/ReportPreview";
import PresentationPreview from "../components/PresentationPreview";

import ReportPDF from "../components/pdfs/ReportPDF";
import PresentationPDF from "../components/pdfs/PresentationPDF";

import generatePPTX from "../components/ppts/generatePPTX";

const HEADER_HEIGHT = 64;

/*
   REAL paper sizes (fixed physics objects)
   DO NOT make these responsive
*/
const PPT = { w: 960, h: 600 };
const A4 = { w: 794, h: 1123 }; // correct A4 ratio

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

    /* ================= SCALE ENGINE ================= */
    useEffect(() => {
        const resize = () => {
            if (!previewRef.current) return;

            const page = formData.assessment === "CA1" ? PPT : A4;

            const wrap = previewRef.current;

            const maxW = wrap.clientWidth - 24;
            const maxH = window.innerHeight - HEADER_HEIGHT - 60;

            const scaleW = maxW / page.w;
            const scaleH = maxH / page.h;

            let final = Math.min(scaleW, scaleH);

            if (final > 1) final = 1;

            setScale(final);
        };

        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [formData.assessment]);

    const page = formData.assessment === "CA1" ? PPT : A4;

    return (
        <div className="min-h-screen bg-[#0f0f0f] overflow-x-hidden">
            <div className="min-h-[calc(100vh-64px)] px-2 lg:px-8 py-4">
                <div className="h-full w-full flex flex-col lg:flex-row gap-6 mx-auto">
                    {/* ================= LEFT PANEL ================= */}
              <div
  className="
    w-full
    lg:w-[380px]
    bg-[#2f2f2f]
    rounded-2xl
    flex
    flex-col
    lg:h-[calc(100vh-110px)]
    overflow-hidden
  "
>

  {/* ================= FORM AREA ================= */}
  <div className="flex-1 p-4 overflow-y-auto">
    <div className="bg-[#3d3d3d] p-4 rounded-xl text-gray-200">
      <Form
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  </div>
{/* ================= BUTTON AREA ================= */}
<div className="p-3 m-4 flex gap-3 justify-center bg-[#3d3d3d] rounded-xl">

  {formData.assessment === "CA1" && (
    <button
      onClick={() => generatePPTX(formData)}
      className="
        px-4
        py-2
        text-sm
        bg-green-600
        hover:bg-green-700
        text-white
        rounded-lg
        transition
      "
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
        className="
          px-4
          py-2
          text-sm
          bg-blue-600
          hover:bg-blue-700
          text-white
          rounded-lg
          transition
          disabled:opacity-60
        "
      >
        {loading ? "Preparing..." : "Download PDF"}
      </button>
    )}
  </PDFDownloadLink>

</div>


</div>


                    {/* ================= RIGHT PREVIEW ================= */}
<div
  ref={previewRef}
  className="
    flex-1
    flex
    flex-col
    justify-start
    items-center
    overflow-auto
    bg-[#0F0F0F]
    mt-4 lg:mt-0
  "
>
  {/* HEIGHT HOLDER */}
  <div
    style={{
      height: page.h * scale,
    }}
    className="flex justify-center w-full"
  >
    {/* SCALE APPLIED HERE ONLY */}
    <div
      style={{
        width: page.w,
        height: page.h,
        transform: `scale(${scale})`,
        transformOrigin: "top center",
      }}
    >
      {formData.assessment === "CA1" ? (
        <PresentationPreview formData={formData} />
      ) : (
        <ReportPreview formData={formData} />
      )}
    </div>
  </div>

  {/* ================= PREVIEW NOTE ================= */}

<div
  className="
    mt-3
    flex
    items-center
    justify-center
    gap-2
    text-xs
    text-gray-400
    px-4
    leading-relaxed
    text-center
  "
>
  <span className="text-sm ">ℹ️</span>

  <span>
    This is only a preview. Downloaded documents will be generated in proper
    page size with the correct front-page layout.
    
  </span>
  
</div>

</div>

                </div>
            </div>
        </div>
    );
};

export default Home;