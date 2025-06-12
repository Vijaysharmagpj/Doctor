import React, { useEffect, useState } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import axios from "axios";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 11,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  item: {
    width: "45%",
    margin: 5,
    padding: 6,
    border: "1 solid #0F92CC",
    borderRadius: 4,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 2,
  },
  value: {
    marginLeft: 5,
  },
});

const renderField = (label, value) => (
  <View style={styles.item}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value || "-"}</Text>
  </View>
);

const PatientPDF = () => {
  const [patientList, setPatientLists] = useState([]);

  const fetchPatientList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/doctor/getTreatment"
      );
      if (res.data.success) {
        setPatientLists(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPatientList();
  }, []);

  return (
    <>
      <Document>
        {patientList.map((patient, index) => (
          <Page key={index} size="A4" style={styles.page}>
            <Text style={styles.title}>Patient Details</Text>
            <View style={styles.grid}>
              {renderField("Ref. No", patient.refNo)}
              {renderField("Name", patient.name)}
              {renderField("Address", patient.address)}
              {renderField("Thir", patient.thir)}
              {renderField("App", patient.app)}
              {renderField("Gender", patient.gender)}
              {renderField("Religion", patient.religion)}
              {renderField("Age", patient.age)}
              {renderField("Height", patient.height)}
              {renderField("Mind", patient.mind)}
              {renderField(
                "Date",
                patient.date
                  ? new Date(patient.date).toLocaleDateString("en-GB")
                  : "-"
              )}
              {renderField("Desire", patient.desire)}
              {renderField("Weight", patient.weight)}
              {renderField("Adct", patient.adct)}
              {renderField("Swt", patient.swt)}
              {renderField("Tng", patient.tng)}
              {renderField("NGl", patient.ngl)}
              {renderField("BP", patient.bp)}
              {renderField("Prt", patient.prt)}
              {renderField("Hc", patient.hc)}
              {renderField("Chest", patient.chest)}
              {renderField("Ph", patient.ph)}
              {renderField("Fh", patient.fh)}
              {renderField("Complain", patient.complain)}
              {renderField(
                "Prescription Date",
                patient.prescriptionDate
                  ? new Date(patient.prescriptionDate).toLocaleDateString(
                      "en-GB"
                    )
                  : "-"
              )}
              {renderField("Follow-Up", patient.followUp)}
              {renderField("Rx", patient.rx)}
              {renderField("Medicine Course", patient.medicineCourse)}
              {renderField("Days", patient.days)}
            </View>
          </Page>
        ))}
      </Document>
    </>
  );
};
export default PatientPDF;
