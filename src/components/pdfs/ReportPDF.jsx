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
    fontFamily: "Helvetica", // default
  },

  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },

  top: {
    alignItems: "center",
  },

  middle: {
    alignItems: "center",
  },

  bottom: {
    alignItems: "center",
    
  },

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
    marginBottom: 5,
    marginTop: 6,
  },

  small_under: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 7,
  },

  small_makaut: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
    marginTop: 5,
  },

  title: {
    marginTop: 10,
    fontSize: 15,
    textTransform: "uppercase",
  },

  /* ---------- TIMES NEW ROMAN ---------- */

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
    marginBottom: 2,
    fontFamily: "TimesNewRoman",
  },

  teacher: {
    marginTop: 20,
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "TimesNewRoman",
  },

  /* ---------- NORMAL ---------- */

  session: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#0335CD",
  },

  roll: {
    marginTop: 2,
    fontSize: 13,
  },

  year: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "bold",
    color: "#0033CC",
  },

  dept: {
    marginTop: 5,
    fontSize: 13,
  },
});

const ReportPDF = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        <View style={styles.wrapper}>

          {/* TOP SECTION */}
          <View style={styles.top}>

            <Image src={logo} style={styles.logo} />

            <Text style={styles.college}>
              FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT
            </Text>

           <View style={{ marginTop: 5 }}><Text style={styles.small_cc}>[CC – 148]</Text></View>
           <View style={{ marginTop: 6 }}><Text style={styles.small_under}>UNDER</Text></View>
           <View style={{ marginTop: 4 }}><Text style={styles.small_makaut}>MAKAUT, WB</Text></View>

          </View>


          {/* MIDDLE SECTION */}
          {/* ================= MIDDLE ================= */}
<View style={styles.middle}>

  {/* ---------- ZONE 1 : TITLE ---------- */}
  <View
    style={{
      paddingTop: 10,
      paddingBottom: 10,
      alignItems: "center",
    }}
  >
    <Text style={styles.title}>
      {data.title || "TITLE OF THE PRESENTATION"}
    </Text>
  </View>


  {/* ---------- ZONE 2 : ASSESSMENT + SUBJECT ---------- */}
  <View
    style={{
      paddingTop: 10,
      paddingBottom: 10,
      alignItems: "center",
    }}
  >

    <Text style={styles.assessment}>
      CONTINUOUS ASSESSMENT #2
    </Text>

    <View style={{ marginTop: 6 }}>
      <Text style={styles.subject}>
        {data.subject_name || "SUBJECT NAME"}
      </Text>

      <Text style={styles.subject}>
        {data.subject_code || "SUBJECT CODE"}
      </Text>
    </View>

  </View>


  {/* ---------- ZONE 3 : SESSION ---------- */}
    <View
      style={{
        paddingTop: 50,
        paddingBottom: 30,
        alignItems: "center",
      }}
    >
      <Text style={styles.session}>
        Academic Session: {data.session || "2025-26"}
      </Text>
    </View>

  </View>


            {/* BOTTOM SECTION */}
          <View style={styles.bottom}>

            <Text style={styles.submitted}>
              SUBMITTED BY
            </Text>

            <Text style={{ ...styles.name, marginTop: 10 }}>
              {data.name || "NAME OF THE STUDENT"}
            </Text>

            <Text style={{ ...styles.roll, marginTop: 10 }}>
              {data.university_roll || "UNIVERSITY ROLL NO."}
            </Text>

            <Text style={{ ...styles.year, marginTop: 10 }}>
              {data.year} Year : {data.semester} Semester
            </Text>

            <Text style={{ ...styles.dept, marginTop: 10 }}>
              {data.department || "DEPARTMENT"}
            </Text>

            <Text style={{ ...styles.teacher, marginTop: 15 }}>
              NAME OF THE TEACHER: {data.teacher_name || ""}
            </Text>

          </View>

        </View>

      </Page>
    </Document>
  );
};

export default ReportPDF;
