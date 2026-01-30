import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PptxGenJS from "pptxgenjs";
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
    <div className="bg-gray-200 min-h-screen p-6">

      <Form formData={formData} setFormData={setFormData} />

      {/* PREVIEW */}
      {formData.assessment === "CA1" ? (
        <PresentationPreview formData={formData} />
      ) : (
        <ReportPreview formData={formData} />
      )}

      {/* DOWNLOAD BUTTONS */}
      <div className="text-center mt-6 flex justify-center gap-4">

        {/* PPTX ONLY FOR CA1 */}
        {formData.assessment === "CA1" && (
          <button
            onClick={() => generatePPTX(formData)}
            className="px-6 py-2 bg-green-600 text-white rounded"
          >
            Download PPTX
          </button>
        )}

        {/* PDF FOR BOTH CA1 & CA2 */}
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
              className="px-6 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              {loading ? "Preparing PDF..." : "Download PDF"}
            </button>
          )}
        </PDFDownloadLink>

      </div>
    </div>
  );
};

/* ---------- PPTX GENERATOR ---------- */


export default App;
