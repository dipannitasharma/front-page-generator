# 📄 PDF & Presentation Generator and Merger

A React-based web application to generate academic front pages, preview
documents, download PDFs/PPTs, and merge multiple PDF files.

------------------------------------------------------------------------

## 🚀 Features

### ✅ Document Generator

-   Create front pages for:
    -   Continuous Assessment 1 (PPT)
    -   Continuous Assessment 2 (Report / A4)
-   Live preview with auto scaling
-   Download as:
    -   PDF
    -   PPTX (for CA1)

### ✅ PDF Merger

-   Upload up to 10 PDF files
-   Preview first page (desktop supported)
-   Reorder files
-   Select custom page ranges
-   Merge and download as a single PDF

### ✅ Responsive Design

-   Works on desktop and mobile
-   Auto layout adjustment
-   Optimized left-panel + preview UI

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   React.js
-   Tailwind CSS
-   pdf-lib
-   @react-pdf/renderer
-   PptxGenJS

------------------------------------------------------------------------

## 📂 Project Structure

    src/
    │
    ├── components/
    │   ├── Form.jsx
    │   ├── ReportPreview.jsx
    │   ├── PresentationPreview.jsx
    │   ├── pdfs/
    │   │   ├── ReportPDF.jsx
    │   │   └── PresentationPDF.jsx
    │   └── ppts/
    │       └── generatePPTX.js
    │
    ├── pages/
    │   ├── Home.jsx
    │   └── Merge.jsx
    │
    └── App.jsx

------------------------------------------------------------------------

## ⚙️ Installation

1.  Clone the repository

``` bash
git clone https://github.com/your-username/project-name.git
```

2.  Navigate to the project

``` bash
cd project-name
```

3.  Install dependencies

``` bash
npm install
```

4.  Start the development server

``` bash
npm run dev
```

------------------------------------------------------------------------

## 📥 Usage

### Document Generator

1.  Open Home page
2.  Fill student and subject details
3.  Select assessment type (CA1 / CA2)
4.  Preview the document
5.  Download PDF or PPTX

### PDF Merger

1.  Open Merge page
2.  Upload PDF files
3.  Reorder if needed
4.  Set page ranges
5.  Click Merge

------------------------------------------------------------------------

## ⚠️ Important Notes

-   Preview is for visual reference only.
-   Downloaded documents are generated in real page size.
-   Mobile browsers may not support inline PDF preview.
-   Maximum 10 files allowed for merging.

------------------------------------------------------------------------

## 📱 Mobile Support

-   Responsive layout
-   Touch-friendly buttons
-   Auto scaling preview
-   External PDF viewer used on some devices

------------------------------------------------------------------------

## 🔒 Limitations

-   No cloud storage
-   No user authentication
-   Offline only
-   Preview quality may vary by device

------------------------------------------------------------------------

## 🌟 Future Improvements

-   Cloud saving
-   User login system
-   PDF thumbnail generation for mobile
-   Drag-and-drop reordering
-   Dark/Light theme toggle

------------------------------------------------------------------------

## 🙏 Special Thanks

Special thanks to **[Raunak
Manna](https://github.com/RaunakDiesFromCode)** for patiently listening to my “it was working yesterday” excuses, helping me fix bugs at weird hours,replying to my midnight SOS messages, and still choosing not to mute me.

------------------------------------------------------------------------

## 👨‍💻 Developer

Developed by **Dipannita Sharma**

------------------------------------------------------------------------

## 📄 License

This project is for academic and educational use. Commercial usage
requires permission.
