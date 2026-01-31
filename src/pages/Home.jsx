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
            <div className="min-h-[calc(100vh-64px)] px-0 lg:px-8 py-4">
                <div className="h-full w-full flex flex-col lg:flex-row gap-6 mx-auto">
                    {/* ================= LEFT PANEL ================= */}
                    <div className="w-full lg:w-[420px] bg-[#2f2f2f] rounded-2xl flex flex-col">
                        <div className="p-4">
                            <div className="bg-[#3d3d3d] p-4 rounded-xl text-gray-200">
                                <Form
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                            </div>
                        </div>

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
                                        {loading
                                            ? "Preparing..."
                                            : "Download PDF"}
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
              justify-center
              items-start
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;