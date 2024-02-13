import styles from "./AdviceCard.module.css";
import dividerDesktop from "../../assets/images/divider-desktop.svg";
import dividerMobile from "../../assets/images/divider-desktop.svg";
import dice from "../../assets/images/icon-dice.svg";

export function AdviceCard() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>Advice #1</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
          repellendus deserunt numquam laboriosam sapiente eveniet soluta
          voluptatum adipisci illo consequatur ducimus a eaque? Labore
          doloremque natus unde sed esse harum!
        </p>
        <img
          src={dividerDesktop}
          alt="divider"
          className={styles.dividerDesktop}
        />
        <img
          src={dividerMobile}
          alt="divider"
          className={styles.dividerMobile}
        />
        <div className={styles.dice}>
          <img src={dice} alt="Dice icon" />
        </div>
      </div>
    </>
  );
}
