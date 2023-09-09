import styles from "./Button.module.css";

// eslint-disable-next-line react/prop-types
const Button = ({ children, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
