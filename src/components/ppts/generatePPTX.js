import PptxGenJS from "pptxgenjs";

const generatePPTX = (data) => {
  const pptx = new PptxGenJS();

  pptx.defineLayout({
    name: "A4LAND",
    width: 13.33,
    height: 7.5,
  });

  pptx.layout = "A4LAND";

  const slide = pptx.addSlide();

  slide.background = { fill: "FFFFFF" };

  slide.addImage({
    path: "./assets/future.png",
    x: 5.3,
    y: 0.3,
    w: 2,
  });

  slide.addText("FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT", {
    x: 1,
    y: 1.3,
    w: 11,
    fontSize: 20,
    bold: true,
    align: "center",
    color: "0000CC",
  });

  slide.addText("[CC – 148]\nUNDER\nMAKAUT, WB", {
    x: 1,
    y: 1.9,
    w: 11,
    fontSize: 14,
    bold: true,
    align: "center",
  });

  slide.addText(data.title || "TITLE", {
    x: 1,
    y: 2.8,
    w: 11,
    fontSize: 18,
    align: "center",
  });

  slide.addText(
    `CONTINUOUS ASSESSMENT #1`,
    {
      x: 1,
      y: 3.4,
      w: 11,
      fontSize: 18,
      bold: true,
      align: "center",
      color: "0000FF",
    }
  );

  slide.addText(
    `${data.subject_name}\n${data.subject_code}`,
    {
      x: 1,
      y: 4.1,
      w: 11,
      fontSize: 14,
      bold: true,
      align: "center",
    }
  );

  slide.addText(`Academic Session: ${data.session}`, {
    x: 1,
    y: 4.8,
    w: 11,
    fontSize: 16,
    bold: true,
    align: "center",
    color: "0335CD",
  });

  slide.addText("PRESENTED BY", {
    x: 1,
    y: 5.5,
    w: 11,
    fontSize: 14,
    bold: true,
    align: "center",
    color: "A50021",
  });

  slide.addText(
    `${data.name}\n${data.university_roll}`,
    {
      x: 1,
      y: 6.1,
      w: 11,
      fontSize: 14,
      align: "center",
    }
  );

  slide.addText(
    `${data.year} Year : ${data.semester} Semester\n${data.department}`,
    {
      x: 1,
      y: 6.7,
      w: 11,
      fontSize: 14,
      align: "center",
      color: "0033CC",
    }
  );

  slide.addText(`NAME OF THE TEACHER: ${data.teacher_name}`, {
    x: 1,
    y: 7.3,
    w: 11,
    fontSize: 14,
    bold: true,
    align: "center",
  });

  pptx.writeFile("CA1_Presentation.pptx");
};

export default generatePPTX;
