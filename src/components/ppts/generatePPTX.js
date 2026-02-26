import PptxGenJS from "pptxgenjs";

const generatePPTX = (data, customFileName) => {
  const pptx = new PptxGenJS();

  // A4 Landscape
  pptx.defineLayout({
    name: "A4LAND",
    width: 13.33,
    height: 7.5,
  });

  pptx.layout = "A4LAND";

  const slide = pptx.addSlide();

  slide.background = { fill: "FFFFFF" };

  /* ================= LOGO ================= */

  slide.addImage({
    path: "/future.png",
    x: 5.6,
    y: 0.25,
    w: 1.8,
  });

  slide.addText(
    "FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT",
    {
      x: 0.5,
      y: 1.5,
      w: 12.3,
      fontSize: 22,
      bold: true,
      align: "center",
      color: "0000CC",
    }
  );

  slide.addText(
    "[CC – 148]\nUNDER\nMAKAUT, WB",
    {
      x: 0.5,
      y: 2.0,
      w: 12.3,
      fontSize: 14,
      bold: true,
      align: "center",
    }
  );

  /* ================= MAIN ================= */

  slide.addText(
    data.title || "TITLE OF THE PRESENTATION",
    {
      x: 0.5,
      y: 2.7,
      w: 12.3,
      fontSize: 20,
      align: "center",
    }
  );

  slide.addText(
    `CONTINUOUS ASSESSMENT #${data.assessment === "CA1" ? "1" : "2"}`,
    {
      x: 0.5,
      y: 3.3,
      w: 12.3,
      fontSize: 18,
      bold: true,
      align: "center",
      color: "0000FF",
    }
  );

  slide.addText(
    `${data.subject_name}\n${data.subject_code}`,
    {
      x: 0.5,
      y: 4.0,
      w: 12.3,
      fontSize: 15,
      bold: true,
      align: "center",
    }
  );

  slide.addText(
    `Academic Session: ${data.session}`,
    {
      x: 0.5,
      y: 4.6,
      w: 12.3,
      fontSize: 16,
      bold: true,
      align: "center",
      color: "0335CD",
    }
  );

  /* ================= STUDENT ================= */

  slide.addText(
    "PRESENTED BY",
    {
      x: 0.5,
      y: 5.2,
      w: 12.3,
      fontSize: 14,
      bold: true,
      align: "center",
      color: "A50021",
    }
  );

  slide.addText(
    `${data.name}\n${data.university_roll}`,
    {
      x: 0.5,
      y: 5.7,
      w: 12.3,
      fontSize: 14,
      align: "center",
    }
  );

  slide.addText(
    `${data.year} Year : ${data.semester} Semester\n${data.department}`,
    {
      x: 0.5,
      y: 6.2,
      w: 12.3,
      fontSize: 14,
      align: "center",
      color: "0033CC",
    }
  );

  slide.addText(
    `NAME OF THE TEACHER: ${data.teacher_name}`,
    {
      x: 0.5,
      y: 6.7,
      w: 12.3,
      fontSize: 14,
      bold: true,
      align: "center",
    }
  );

  /* ================= SAVE ================= */

  const finalFileName =
    customFileName && customFileName.trim() !== ""
      ? customFileName
      : `${data.name || "Presentation"}_${data.subject_code || ""}_${data.assessment}.pptx`;

  pptx.writeFile(finalFileName);
};

export default generatePPTX;