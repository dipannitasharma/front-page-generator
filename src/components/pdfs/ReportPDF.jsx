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
    padding: 45, // outer white margin
    backgroundColor: "#FFFFFF",
  },

  borderBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    paddingHorizontal: 50,
    paddingVertical: 50,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },

  logo: {
    width: 200,
    marginBottom: 25,
  },

  college: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000099",
    marginBottom: 8,
  },

  small: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 5,
  },

  title: {
    marginTop: 70,
    fontSize: 16,
    textTransform: "uppercase",
  },

  assessment: {
    marginTop: 45,
    fontSize: 18,
    fontWeight: "bold",
    color: "#0000FF",
    fontFamily: "TimesNewRoman",
  },

  subject: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "TimesNewRoman",
    textTransform: "uppercase",
  },

  session: {
    marginTop: 50,
    fontSize: 14,
    fontWeight: "bold",
    color: "#0000FF",
  },

  submitted: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#A50021",
    fontFamily: "TimesNewRoman",
  },

  name: {
    marginTop: 12,
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: "TimesNewRoman",
  },

  roll: {
    marginTop: 8,
    fontSize: 13,
  },

  year: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#0000FF",
  },

  dept: {
    marginTop: 6,
    fontSize: 13,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  teacher: {
    marginTop: 45,
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "TimesNewRoman",
    textTransform: "uppercase",
  },
});

const ReportPDF = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.borderBox}>

          {/* TOP SECTION */}
          <View style={{ alignItems: "center" }}>
            <Image src={logo} style={styles.logo} />

            <Text style={styles.college}>
              FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT
            </Text>

            <Text style={styles.small}>[CC – 148]</Text>
            <Text style={styles.small}>UNDER</Text>
            <Text style={styles.small}>MAKAUT, WB</Text>

            <Text style={styles.title}>
              {data.title || "TITLE OF THE PRESENTATION"}
            </Text>

            <Text style={styles.assessment}>
              CONTINUOUS ASSESSMENT #
              {data.assessment === "CA1" ? "1" : "2"}
            </Text>

            <Text style={styles.subject}>
              {data.subject_name || "SUBJECT NAME"}
            </Text>

            <Text style={styles.subject}>
              {data.subject_code || "SUBJECT CODE"}
            </Text>

            <Text style={styles.session}>
              Academic Session: {data.session || "2025-26"}
            </Text>
          </View>

          {/* BOTTOM SECTION */}
          <View style={{ alignItems: "center" }}>
            <Text style={styles.submitted}>
              REPORT SUBMITTED BY
            </Text>

            <Text style={styles.name}>
              {data.name || "NAME OF THE STUDENT"}
            </Text>

            <Text style={styles.roll}>
              {data.university_roll || "UNIVERSITY ROLL NO."}
            </Text>

            <Text style={styles.year}>
              {data.year} Year : {data.semester} Semester
            </Text>

            <Text style={styles.dept}>
              {data.department?.toUpperCase()}
            </Text>

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