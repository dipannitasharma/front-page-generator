import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import logo from "../../assets/future.png";

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingHorizontal: 60,
    textAlign: "center",
    fontFamily: "Helvetica",
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    width: 100,
    marginBottom: 10,
  },

  college: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0000CC",
  },

  small: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 2,
  },

  title: {
    marginTop: 25,
    fontSize: 18,
    textTransform: "uppercase",
  },

  assessment: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "#0000FF",
  },

  subject: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "bold",
  },

  session: {
    marginTop: 12,
    fontSize: 15,
    fontWeight: "bold",
    color: "#0335CD",
  },

  presented: {
    marginTop: 20,
    fontSize: 13,
    fontWeight: "bold",
    color: "#A50021",
  },

  name: {
    marginTop: 5,
    fontSize: 14,
    textTransform: "uppercase",
  },

  year: {
    marginTop: 4,
    fontSize: 13,
    color: "#0033CC",
    fontWeight: "bold",
  },

  teacher: {
    marginTop: 15,
    fontSize: 13,
    fontWeight: "bold",
  },
});

const PresentationPDF = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* HEADER */}
        <View style={styles.header}>
          <Image src={logo} style={styles.logo} />

          <Text style={styles.college}>
            FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT
          </Text>

          <Text style={styles.small}>[CC – 148]</Text>
          <Text style={styles.small}>UNDER</Text>
          <Text style={styles.small}>MAKAUT, WB</Text>
        </View>

        {/* TITLE */}
        <Text style={styles.title}>
          {data.title || "TITLE OF THE PRESENTATION"}
        </Text>

        {/* ASSESSMENT */}
        <Text style={styles.assessment}>
          CONTINUOUS ASSESSMENT #{data.assessment === "CA1" ? "1" : "2"}
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

        {/* STUDENT */}
        <Text style={styles.presented}>PRESENTED BY</Text>

        <Text style={styles.name}>
          {data.name || "STUDENT NAME"}
        </Text>

        <Text>{data.university_roll || "ROLL NO"}</Text>

        <Text style={styles.year}>
          {data.year} Year : {data.semester} Semester
        </Text>

        <Text>{data.department || "DEPARTMENT"}</Text>

        {/* TEACHER */}
        <Text style={styles.teacher}>
          NAME OF THE TEACHER: {data.teacher_name || ""}
        </Text>

      </Page>
    </Document>
  );
};

export default PresentationPDF;
