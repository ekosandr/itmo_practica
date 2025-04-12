import { ReactNode } from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export const Layout = ({ children, title = "Моё приложение" }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>React app (client side rendering)</h1>
      </header>
      <main className={styles.content}>{children}</main>
    </div>
  );
};
