import { ReactNode } from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>React app (client side rendering) cd</h1>
      </header>
      <main className={styles.content}>{children}</main>
    </div>
  );
};
