import styles from "./AdviceCard.module.css";
import dividerDesktop from "../../assets/images/divider-desktop.svg";
import dividerMobile from "../../assets/images/divider-mobile.svg"; // Poprawiono ścieżkę dla urządzeń mobilnych
import dice from "../../assets/images/icon-dice.svg";
import { useEffect, useState } from "react";
import axios from "axios";

export function AdviceCard() {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const adviceData = response.data.slip;
      setAdvice(adviceData);
    } catch (error) {
      console.error("Error while fetching advice:", error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Advice #{advice.id}</h1>
      <p className={styles.text}>{advice.advice}</p>
      <img
        src={dividerDesktop}
        alt="divider"
        className={styles.dividerDesktop}
      />
      <img src={dividerMobile} alt="divider" className={styles.dividerMobile} />
      <div className={styles.dice} onClick={getAdvice}>
        <img src={dice} alt="Dice icon" />
      </div>
    </div>
  );
}
