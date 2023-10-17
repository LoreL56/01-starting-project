import styles from "./CalculatorFormAction.module.css";

function CalculatorFormAction(props) {
  function clickResetHandler() {
    props.onReset();
  }

  return (
    <p className={styles.actions}>
      <button
        type="reset"
        className={styles.buttonAlt}
        onClick={clickResetHandler}
      >
        Reset
      </button>
      <button type="submit" className={styles.button}>
        Calculate
      </button>
    </p>
  );
}

export default CalculatorFormAction;
