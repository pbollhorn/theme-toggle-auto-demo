import styles from "./App.module.css";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeContext";

function App() {
  return (
    <div className={styles.app}>
      <h1>Hello React</h1>
      <ThemeToggle />
      <div className={styles.card}>Themed content box</div>
    </div>
  );
}

export default App;
