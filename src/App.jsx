import React, { useState } from "react";
import Form from "./Form";
import ReportPreview from "./ReportPreview";
import PresentationPreview from "./PresentationPreview";
import html2pdf from "html2pdf.js";
import PptxGenJS from "pptxgenjs";

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

  /* ---------- PDF (CA2) ---------- */
  const downloadPDF = () => {
    const element = document.getElementById("report-a4");

    const options = {
      margin: 0,
      filename: "CA2_Report_Front_Page.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };

  /* ---------- PPTX (CA1) ---------- */
  const downloadPPTX = () => {
    const pptx = new PptxGenJS();
    const slide = pptx.addSlide();

    slide.addText(
      formData.title || "TITLE OF THE PRESENTATION",
      {
        x: 1,
        y: 1,
        w: 8,
        h: 1,
        fontSize: 28,
        align: "center",
      }
    );

    slide.addText(
      `CONTINUOUS ASSESSMENT #1
${formData.subject_name}
${formData.subject_code}
Academic Session: ${formData.session}`,
      {
        x: 1,
        y: 2.4,
        w: 8,
        h: 1.6,
        fontSize: 16,
        align: "center",
      }
    );

    slide.addText(
      `PRESENTED BY
${formData.name}
${formData.university_roll}
${formData.year} Year : ${formData.semester} Semester
${formData.department}`,
      {
        x: 1,
        y: 4.2,
        w: 8,
        h: 2,
        fontSize: 14,
        align: "center",
      }
    );

    slide.addText(
      `Name of the Teacher: ${formData.teacher_name}`,
      {
        x: 1,
        y: 6.4,
        w: 8,
        h: 0.6,
        fontSize: 14,
        align: "center",
      }
    );

    pptx.writeFile("CA1_Presentation.pptx");
  };

  return (
    <div className="bg-gray-200 min-h-screen p-6">
      <Form formData={formData} setFormData={setFormData} />

      {formData.assessment === "CA1" ? (
        <PresentationPreview formData={formData} />
      ) : (
        <ReportPreview formData={formData} />
      )}

      {/* ---------- DOWNLOAD BUTTONS ---------- */}
      <div className="text-center mt-6">
        {formData.assessment === "CA1" && (
          <button
            onClick={downloadPPTX}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-4"
          >
            Download CA1 Presentation (PPTX)
          </button>
        )}

        {formData.assessment === "CA2" && (
          <button
            onClick={downloadPDF}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Download CA2 Report (PDF)
          </button>
        )}
      </div>
    </div>
  );
};

export default App;