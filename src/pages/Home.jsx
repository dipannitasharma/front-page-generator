import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import Form from "../components/Form";
import ReportPreview from "../components/ReportPreview";
import PresentationPreview from "../components/PresentationPreview";

import ReportPDF from "../components/pdfs/ReportPDF";
import PresentationPDF from "../components/pdfs/PresentationPDF";

import generatePPTX from "../components/ppts/generatePPTX";

const HEADER_HEIGHT = 64;

const PPT = { w: 960, h: 540 };
const A4 = { w: 794, h: 1123 };

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

  const page =
    formData.assessment === "CA1" ? PPT : A4;

  return (
    <div
      className="
        min-h-screen
        bg-[#0f0f0f]
        px-3 py-4 lg:p-8
      "
     
    >
      <div
        className="
          max-w-400
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
            lg:sticky
            top-24
            max-h-[calc(100vh-120px)]
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
          <div className="p-4 flex gap-3 justify-center bg-[#3d3d3d] rounded-b-2xl">

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
          className="
            flex-1
            bg-[#0F0F0F]
            rounded-xl
            overflow-auto

          "
        >
          {/* CENTER */}
          <div className="flex justify-center ">
            <div
              className="
                scale-80
                shadow-2xl
                overflow-hidden
              "
              style={{
                width: page.w,
                minHeight: page.h,
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

export default Home;
