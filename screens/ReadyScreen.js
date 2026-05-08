import React, { useState } from "react";
import {
  Alert,
  Linking,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

export default function ReadyScreen() {
  const [zoneCode, setZoneCode] = useState("");

  const city = "Lakewood";
  const vendorName = "ParkMobile";

  const handleStartParking = async () => {
    if (!zoneCode.trim()) {
      Alert.alert("Zone required", "Enter the zone number from the parking sign.");
      return;
    }

    const url = `https://parkmobile.io/`;

    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert("Could not open app", "Open the parking app manually.");
    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <View>
        <Text style={styles.small}>Ready to park</Text>
        <Text style={styles.title}>ParkShell</Text>
        <Text style={styles.subtitle}>
          One parking timer. The right vendor every time.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Detected city</Text>
        <Text style={styles.value}>{city}</Text>

        <View style={styles.line} />

        <Text style={styles.label}>Parking provider</Text>
        <Text style={styles.value}>{vendorName}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.inputLabel}>Zone number</Text>

        <TextInput
          value={zoneCode}
          onChangeText={setZoneCode}
          placeholder="Enter zone code"
          placeholderTextColor="#777"
          style={styles.input}
          keyboardType="number-pad"
        />

        <Pressable style={styles.button} onPress={handleStartParking}>
          <Text style={styles.buttonText}>Start Parking</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>
        ParkShell does not process payments. You will pay inside the official parking app.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#0A0A0A",
    padding: 24,
    justifyContent: "space-between"
  },
  small: {
    color: "#A3E635",
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
    marginTop: 20
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "900",
    marginTop: 8
  },
  subtitle: {
    color: "#A3A3A3",
    fontSize: 16,
    marginTop: 8,
    lineHeight: 23
  },
  card: {
    backgroundColor: "#171717",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "#262626"
  },
  label: {
    color: "#737373",
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase"
  },
  value: {
    color: "white",
    fontSize: 28,
    fontWeight: "900",
    marginTop: 6
  },
  line: {
    height: 1,
    backgroundColor: "#2A2A2A",
    marginVertical: 18
  },
  inputLabel: {
    color: "white",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 10
  },
  input: {
    backgroundColor: "#0A0A0A",
    color: "white",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 18,
    padding: 16,
    fontSize: 22,
    marginBottom: 14
  },
  button: {
    backgroundColor: "#A3E635",
    padding: 16,
    borderRadius: 18,
    alignItems: "center"
  },
  buttonText: {
    color: "#0A0A0A",
    fontSize: 16,
    fontWeight: "900"
  },
  footer: {
    color: "#777",
    textAlign: "center",
    fontSize: 13,
    lineHeight: 19
  }
});
