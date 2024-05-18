"use client";
import React from "react";
import styles from './PasswordGenerator.module.css';
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";

export default function Home() {
  return (
    <main className={styles.container}>
      <PasswordGenerator />
    </main>
  );
}
