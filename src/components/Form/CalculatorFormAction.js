import styles from "./CalculatorFormAction.module.css";

function clickResetHandler()
{
 console.log("reset click");
}

function CalculatorFormAction() {
  return (
    <p className={styles.actions}>
      <button type="reset" className={styles.buttonAlt} onClick={clickResetHandler}>
        Reset
      </button>
      <button type="submit" className={styles.button}>
        Calculate
      </button>
    </p>
  );
}

export default CalculatorFormAction;
