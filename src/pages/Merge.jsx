import React, { useState, useRef } from "react";
import { PDFDocument } from "pdf-lib";

const MAX_FILES = 10;

const Merge = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [customName, setCustomName] = useState(""); // ✅ added
  const fileInputRef = useRef(null);

  /*ADD FILES*/
  const handleSelect = async (e) => {
    const selected = Array.from(e.target.files);

    if (!selected.length) return;

    if (files.length + selected.length > MAX_FILES) {
      alert(`Maximum ${MAX_FILES} files allowed`);
      return;
    }

    const processed = await Promise.all(
      selected.map(async (file) => {
        const bytes = await file.arrayBuffer();
        const pdf = await PDFDocument.load(bytes);

        const pageCount = pdf.getPageCount();
        const preview = await createPreview(pdf);

        return {
          file,
          name: file.name,
          size: file.size,
          pages: pageCount,
          preview,
          range: `1-${pageCount}`,
        };
      })
    );

    setFiles((prev) => [...prev, ...processed]);
    e.target.value = "";
  };
  /*PREVIEW*/
  const createPreview = async (pdf) => {
    const temp = await PDFDocument.create();
    const [page] = await temp.copyPages(pdf, [0]);
    temp.addPage(page);

    const bytes = await temp.save();

    return URL.createObjectURL(
      new Blob([bytes], { type: "application/pdf" })
    );
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const list = [...files];
    [list[index - 1], list[index]] = [
      list[index],
      list[index - 1],
    ];
    setFiles(list);
  };

  const moveDown = (index) => {
    if (index === files.length - 1) return;
    const list = [...files];
    [list[index + 1], list[index]] = [
      list[index],
      list[index + 1],
    ];
    setFiles(list);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setFiles([]);
    setProgress(0);
    setCustomName("");
  };

  const updateRange = (index, value) => {
    const list = [...files];
    list[index].range = value;
    setFiles(list);
  };

  const parseRange = (range, max) => {
    const pages = new Set();

    range.split(",").forEach((part) => {
      if (part.includes("-")) {
        const [s, e] = part.split("-").map(Number);
        for (let i = s; i <= e && i <= max; i++) {
          pages.add(i - 1);
        }
      } else {
        const n = Number(part);
        if (n <= max) pages.add(n - 1);
      }
    });

    return [...pages];
  };

  /* ================= MERGE ================= */
  const handleMerge = async () => {
    if (files.length < 2) {
      alert("Select at least 2 PDFs");
      return;
    }

    try {
      setLoading(true);
      setProgress(0);

      const mergedPdf = await PDFDocument.create();

      for (let i = 0; i < files.length; i++) {
        const item = files[i];
        const bytes = await item.file.arrayBuffer();
        const pdf = await PDFDocument.load(bytes);

        const indexes = parseRange(
          item.range,
          pdf.getPageCount()
        );

        const pages = await mergedPdf.copyPages(
          pdf,
          indexes
        );

        pages.forEach((p) => mergedPdf.addPage(p));

        setProgress(
          Math.round(((i + 1) / files.length) * 100)
        );
      }

      const mergedBytes = await mergedPdf.save();

      const blob = new Blob([mergedBytes], {
        type: "application/pdf",
      });

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;

      //Custom filename logic
      a.download = customName
        ? `${customName}.pdf`
        : "merged.pdf";

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(url);
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Merge failed");
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 flex justify-center px-4">
      <div className="w-full max-w-2xl bg-[#323232] text-gray-200 p-6 rounded-xl border shadow-lg">

        <h2 className="text-xl font-semibold text-center mb-1">
          PDF Merger
        </h2>

        <p className="text-xs text-center text-gray-400 mb-4">
          Max {MAX_FILES} files • Reorder • Page Select • Preview
        </p>

        {/* Custom File Name Input */}
        {files.length > 0 && (
          <input
            type="text"
            placeholder="Enter Custom File Name"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            className="w-full mb-4 px-3 py-2 bg-[#222] border rounded outline-none text-sm"
          />
        )}

        <input
          type="file"
          accept="application/pdf"
          multiple
          ref={fileInputRef}
          onChange={handleSelect}
          className="w-full mb-4 text-sm file:mr-3 file:px-3 file:py-1.5 file:border-0 file:rounded file:bg-purple-600 file:text-white hover:file:bg-purple-700"
        />

        {/* FILE LIST (UNCHANGED) */}
        {files.length > 0 && (
          <div className="mb-4 max-h-80 overflow-auto space-y-2">
            {files.map((item, i) => (
              <div
                key={i}
                className="flex gap-3 bg-[#3a3a3a] p-2 rounded border"
              >
                <iframe
                  src={item.preview}
                  className="w-20 h-24 rounded bg-white"
                  title="preview"
                />

                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-medium">
                    {i + 1}. {item.name}
                  </p>

                  <p className="text-xs text-gray-400 mb-1">
                    {(item.size / 1024).toFixed(1)} KB •{" "}
                    {item.pages} pages
                  </p>

                  <input
                    value={item.range}
                    onChange={(e) =>
                      updateRange(i, e.target.value)
                    }
                    placeholder="1-3,5"
                    className="w-full px-2 py-1 text-xs bg-[#222] border rounded outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => moveUp(i)}
                    className="px-2 bg-blue-500 rounded"
                  >
                    ↑
                  </button>

                  <button
                    onClick={() => moveDown(i)}
                    className="px-2 bg-blue-500 rounded"
                  >
                    ↓
                  </button>

                  <button
                    onClick={() => removeFile(i)}
                    className="px-2 bg-red-500 rounded"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PROGRESS */}
        {loading && (
          <div className="mb-3">
            <div className="text-xs mb-1">
              Merging... {progress}%
            </div>
            <div className="w-full h-2 bg-gray-700 rounded">
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-purple-600 rounded transition-all"
              />
            </div>
          </div>
        )}

        {/* ACTIONS */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={handleMerge}
            disabled={files.length < 2 || loading}
            className="flex-1 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50"
          >
            {loading ? "Merging..." : "Merge PDFs"}
          </button>

          {files.length > 0 && (
            <>
              <button
                onClick={() => fileInputRef.current.click()}
                className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
              >
                + Add More
              </button>

              <button
                onClick={clearAll}
                className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
              >
                Clear
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Merge;