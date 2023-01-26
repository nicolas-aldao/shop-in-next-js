// import { Inter } from '@next/font/google';
import { Head } from 'next/head';
import Header from '../components/Header';
// import styles from '@styles/Home.module.css';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Shop in Next.js</title>
      </Head>
      {/* <main className={styles.main}>
        <div className={styles.center}> */}
      <Header />
      {/* </div>
      </main> */}
    </>
  );
}
