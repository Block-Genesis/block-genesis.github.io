import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="row">
      <div className="col">
        <img alt="Merkle Tree" src="/img/merkle_tree.png" />
      </div>
      <div className="col">
        <div className="padding-left--md">
          <h2 className="hero__title">Learn</h2>
          <p>
            Whether you have no idea what a blockchain is, or have been building all the decentralized things since 2009, our community will help you learn what you need to know to participate in building a better web, together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <main className="main--landing">
        <div className="container">
          <HomepageHeader />
          {/* <HomepageFeatures /> */}
        </div>
      </main>
    </Layout>
  );
}
