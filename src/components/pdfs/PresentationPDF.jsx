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

/* REGISTER TIMES NEW ROMAN */
Font.register({
  family: "TimesNewRoman",
  fonts: [
    { src: TIMES, fontWeight: "normal" },
    { src: TIMES_BOLD, fontWeight: "bold" },
  ],
});

const styles = StyleSheet.create({

  /* 16:9 SLIDE SIZE */
  page: {
    width: 960,
    height: 540,
    paddingHorizontal: 50,
    paddingVertical: 35,
    fontFamily: "Helvetica",
  },

  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },

  /* ---------- TOP ---------- */

  top: {
    alignItems: "center",
  },

  logo: {
    width: 130,
    marginBottom: 8,
  },

  college: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0000CC",
    marginBottom: 2,
  },

  small: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 1,
  },

  /* ---------- TITLE ---------- */

  middle: {
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  assessment: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0000FF",
    fontFamily: "TimesNewRoman",
    marginBottom: 6,
  },

  subject: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "TimesNewRoman",
    textTransform: "uppercase",
    textAlign: "center",
  },

  session: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0335CD",
    marginTop: 10,
  },

  /* ---------- STUDENT ---------- */

  bottom: {
    alignItems: "center",
  },

  presented: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#A50021",
    fontFamily: "TimesNewRoman",
    marginBottom: 4,
  },

  name: {
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: "TimesNewRoman",
    marginBottom: 3,
  },

  roll: {
    fontSize: 13,
    marginBottom: 3,
  },

  year: {
  fontSize: 14,
  fontWeight: "bold",
  marginBottom: 3,
  textAlign: "center",
  color: "#0033CC",
},


gray: {
  color: "#6B7280",   // Tailwind gray-500
},


  dept: {
    fontSize: 13,
    marginBottom: 6,
  },

  teacher: {
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "TimesNewRoman",
    textTransform: "uppercase",
  },
});

const PresentationPDF = ({ data }) => {
  return (
    <Document>
      <Page size={[960, 540]} style={styles.page}>

        <View style={styles.wrapper}>

          {/* ================= TOP ================= */}
          <View style={styles.top}>

            <Image src={logo} style={styles.logo} />

            <Text style={styles.college}>
              FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT
            </Text>

            <Text style={styles.small}>[CC – 148]</Text>
            <Text style={styles.small}>UNDER</Text>
            <Text style={styles.small}>MAKAUT, WB</Text>

          </View>


          {/* ================= MIDDLE ================= */}
          <View style={styles.middle}>

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

            <Text style={styles.assessment}>
              CONTINUOUS ASSESSMENT #1
            </Text>

            <Text style={styles.subject}>
              {data.subject_name || "SUBJECT NAME"}
            </Text>

            <Text style={styles.subject}>
              {data.subject_code || "SUBJECT CODE"}
            </Text>

            <View style={{ marginTop: 15 }}>
              <Text style={styles.session}>
                Academic Session: {data.session || "2025-26"}
              </Text>
            </View>

          </View>


          {/* ================= BOTTOM ================= */}
          <View style={styles.bottom}>
          
                      <Text style={styles.presented}>
                        PRESENTED BY
                      </Text>
          
                      <Text style={{ ...styles.name, marginTop: 5 }}>
                        {data.name || "NAME OF THE STUDENT"}
                      </Text>
          
                      <Text style={{ ...styles.roll, marginTop: 5 }}>
                        {data.university_roll || "UNIVERSITY ROLL NO."}
                      </Text>
          
                       <View style={{ flexDirection: "row", marginTop: 10 }}>
                      
                        <Text style={[styles.year, styles.gray]}>
                          {data.year}
                        </Text>
                      
                        <Text style={styles.year}>
                          {" "}Year :{" "}
                        </Text>
                      
                        <Text style={[styles.year, styles.gray]}>
                          {data.semester}
                        </Text>
                      
                        <Text style={styles.year}>
                          {" "}Semester
                        </Text>
                      
                      </View>

          
                      <Text style={{ ...styles.dept, marginTop: 5 }}>
                        {data.department || "DEPARTMENT"}
                      </Text>
          
                      <Text style={{ ...styles.teacher, marginTop: 10 }}>
                        NAME OF THE TEACHER: {data.teacher_name || ""}
                      </Text>
          
                    </View>

        </View>

      </Page>
    </Document>
  );
};

export default PresentationPDF;
