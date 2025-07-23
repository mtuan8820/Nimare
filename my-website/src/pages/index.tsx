import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
// @ts-ignore
import Image from '@theme/IdealImage';

import styles from './index.module.css';
import CountdownTimer from "@site/src/components/CountdownTimer";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('container hero row', styles.heroBanner)}>
          <div className={clsx(" col col--4 col--offset-2", styles.container)}>
              <Heading as="h1" className="hero__title text--primary">
                  {siteConfig.title}
              </Heading>
              <p className=" text--left">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                  <Link
                      // className={clsx('button button--lg', styles.buttonCustom)}
                      className="button button--outline button--primary"
                      to="/vocabulary/vocabulary/minna/minna-vocab-26">
                      Getting Started
                  </Link>
              </div>
          </div>
          <div className={clsx(styles.heroImage, 'col col--6')}>
              <Image img={require("@site/static/img/edited.png")} alt="日本語"/>
          </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
          {/*<CountdownCard />*/}
        <CountdownTimer />
        <HomepageFeatures />

      </main>
    </Layout>
  );
}
