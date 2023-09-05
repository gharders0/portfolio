import * as React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>This is Grace's page</h1>
        <Link className={styles.btn} to='/projects'>
          Projects
        </Link>
      </div>
    </Layout>
  );
}
