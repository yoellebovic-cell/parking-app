import React from "react";
import { StatusBar } from "expo-status-bar";
import ReadyScreen from "./screens/ReadyScreen";

export default function App() {
  return (
    <>
      <ReadyScreen />
      <StatusBar style="light" />
    </>
  );
}
