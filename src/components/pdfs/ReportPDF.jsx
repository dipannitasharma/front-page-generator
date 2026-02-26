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
    padding:30,
    backgroundColor: "#FFFFFF",
  },

  borderBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    padding: 40,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },

  logo: {
    width: 200,
    marginBottom: 15,
  },

  college: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000099",
    marginBottom: 6,
  },

  small: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 4,
    marginBottom: 2,
  },

  title: {
    marginTop: 70,
    fontSize: 16,
    textTransform: "uppercase",
  },

  assessment: {
    marginTop: 35,
    fontSize: 18,
    fontWeight: "bold",
    color: "#0000FF",
    fontFamily: "TimesNewRoman",
  },

  subject: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "TimesNewRoman",
    textTransform: "uppercase",
  },

  session: {
    marginTop: 35,
    fontSize: 20,
    fontWeight: "bold",
    color: "#0000FF",
  },

  submitted: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#A50021",
    fontFamily: "TimesNewRoman",
    marginBottom: 30,
  },

  name: {
    marginTop: 10,
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: "TimesNewRoman",
  },

  roll: {
    marginTop: 6,
    fontSize: 13,
  },

  year: {
    marginTop: 6,
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
    marginTop: 25,
    marginBottom: 20,
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

          {/* TOP */}
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

          {/* BOTTOM */}
          <View style={{ alignItems: "center" }}>
            <Text style={styles.submitted}>
              REPORT SUBMITTED BY
            </Text>

            <Text style={{ ...styles.name, marginBottom: 8 }}>
              {data.name || "NAME OF THE STUDENT"}
            </Text>

            <Text style={{ ...styles.roll, marginBottom: 5 }}>
              {data.university_roll || "UNIVERSITY ROLL NO."}
            </Text>

            <Text style={styles.year}>
              {data.year} Year : {data.semester} Semester
            </Text>

            <Text style={styles.dept}>
              {data.department?.toUpperCase()}
            </Text>

            <Text style={styles.teacher}>
              NAME OF THE SUBJECT TEACHER: {data.teacher_name || ""}
            </Text>
          </View>

        </View>
      </Page>
    </Document>
  );
};

export default ReportPDF;