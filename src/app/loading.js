import styles from "@/app/globals.css";
const Loading = () => {
  return (
    <div class="ring">
      Loading
      <span className={styles.spin}></span>
    </div>
  );
};

export default Loading;
