import { useState } from "react";
import styles from "./CounterCard.module.css";
import {
  FaAngleDown,
  FaAngleUp,
  FaAngleDoubleUp,
  FaAngleDoubleDown,
  FaHashtag,
} from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import Button from "../utilityButton/Button";

const CounterCard = () => {
  const [count, setCount] = useState(0);
  const handleIncreaseByOne = () => {
    const randNum = Math.floor(Math.random() * 101);
    setCount(randNum);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Current value</span>
        <h1>{count}</h1>
      </div>
      <div className={styles.btnWrapper}>
        <Button
          title="Increase by 1"
          onClick={() => setCount((prev) => prev + 1)}
        >
          <FaAngleUp />
        </Button>
        <Button
          title="Increase by 10"
          onClick={() => setCount((prev) => prev + 10)}
        >
          <FaAngleDoubleUp />
        </Button>
        <Button title="Reset to 0" onClick={() => setCount(0)}>
          <GrPowerReset />
        </Button>
        <Button
          title="Random num between 1 and 100"
          onClick={handleIncreaseByOne}
        >
          <FaHashtag />
        </Button>
        <Button
          title="Decrease by 10"
          onClick={() => setCount((prev) => prev - 10)}
        >
          <FaAngleDoubleDown />
        </Button>
        <Button
          title="Decrease by 1"
          onClick={() => setCount((prev) => prev - 1)}
        >
          <FaAngleDown />
        </Button>
      </div>
    </div>
  );
};

export default CounterCard;
