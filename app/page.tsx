import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href="/simple-dashboard">Simple dashboard</Link>
        </li>
        <li>
          <Link href="/navigation">Navigation example </Link>
        </li>
      </ul>
    </main>
  );
}
