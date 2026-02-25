import React from "react";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

import logo from "../../assets/future.png";
import TIMES from "../../assets/fonts/TIMES.TTF";
import TIMES_BOLD from "../../assets/fonts/TIMESBD.TTF";

Font.register({
  family: "TimesNewRoman",
  fonts: [
    { src: TIMES, fontWeight: "normal" },
    { src: TIMES_BOLD, fontWeight: "bold" },
  ],
});

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 60,
    paddingVertical: 50,
    fontFamily: "Helvetica",
  },

  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },

  top: { alignItems: "center" },
  middle: { alignItems: "center" },
  bottom: { alignItems: "center" },

  logo: {
    width: 200,
    marginBottom: 12,
  },

  college: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0000CC",
    marginBottom: 4,
  },

  small_cc: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 6,
  },

  small_under: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 7,
  },

  small_makaut: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },

  title: {
    marginTop: 10,
    fontSize: 15,
    textTransform: "uppercase",
  },

  assessment: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: "bold",
    color: "#0000FF",
    fontFamily: "TimesNewRoman",
  },

  subject: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "TimesNewRoman",
    textTransform: "uppercase",
  },

  submitted: {
    marginTop: 25,
    fontSize: 14,
    fontWeight: "bold",
    color: "#A50021",
    fontFamily: "TimesNewRoman",
  },

  name: {
    marginTop: 6,
    fontSize: 15,
    textTransform: "uppercase",
    fontFamily: "TimesNewRoman",
  },

  roll: {
    marginTop: 8,
    fontSize: 13,
  },

  year: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "bold",
    color: "#0033CC",
  },

  gray: {
    color: "#6B7280",
  },

  dept: {
    marginTop: 12,
    fontSize: 13,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  teacher: {
    marginTop: 12,
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "TimesNewRoman",
    textTransform: "uppercase",
  },

  session: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#0335CD",
  },
});

const ReportPDF = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.wrapper}>

          {/* ================= TOP ================= */}
          <View style={styles.top}>
            <Image src={logo} style={styles.logo} />

            <Text style={styles.college}>
              FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT
            </Text>

            <Text style={styles.small_cc}>[CC – 148]</Text>
            <Text style={styles.small_under}>UNDER</Text>
            <Text style={styles.small_makaut}>MAKAUT, WB</Text>
          </View>

          {/* ================= MIDDLE ================= */}
          <View style={styles.middle}>

            {/* TITLE */}
            <Text style={styles.title}>
              {data.title || "TITLE OF THE PRESENTATION"}
            </Text>

            {/* ASSESSMENT */}
            <Text style={styles.assessment}>
              CONTINUOUS ASSESSMENT #
              {data.assessment === "CA1" ? "1" : "2"}
            </Text>

            {/* SUBJECT */}
            <Text style={styles.subject}>
              {data.subject_name || "SUBJECT NAME"}
            </Text>

            <Text style={styles.subject}>
              {data.subject_code || "SUBJECT CODE"}
            </Text>

            {/* SESSION */}
            <Text style={styles.session}>
              Academic Session: {data.session || "2025-26"}
            </Text>

          </View>

          {/* ================= BOTTOM ================= */}
          <View style={styles.bottom}>

            <Text style={styles.submitted}>
              SUBMITTED BY
            </Text>

            <Text style={styles.name}>
              {data.name || "NAME OF THE STUDENT"}
            </Text>

            <Text style={styles.roll}>
              {data.university_roll || "UNIVERSITY ROLL NO."}
            </Text>

            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Text style={[styles.year, styles.gray]}>
                {data.year}
              </Text>
              <Text style={styles.year}> Year : </Text>
              <Text style={[styles.year, styles.gray]}>
                {data.semester}
              </Text>
              <Text style={styles.year}> Semester</Text>
            </View>

            {/* ✅ DEPARTMENT ADDED HERE */}
           <Text style={styles.dept}>
  {data.department ? data.department.toUpperCase() : ""}
</Text>

            {/* TEACHER */}
            <Text style={styles.teacher}>
              NAME OF THE TEACHER: {data.teacher_name || ""}
            </Text>

          </View>

        </View>
      </Page>
    </Document>
  );
};

export default ReportPDF;