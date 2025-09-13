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
import CountdownCard from "@site/src/components/CountdownCard";


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
          <div className={clsx("row", styles.container)}>
              <div className={clsx("col col--3 col--offset-2", styles.firstCol)}>
                  <Heading as="h1" className="">
                      {siteConfig.title}
                  </Heading>
                  <p>{siteConfig.tagline}</p>
                  <div className={styles.button}>
                      <Link
                          // className={clsx('button button--lg', styles.buttonCustom)}
                          className="button"
                          to="/vocabulary/vocabulary/minna/minna-vocab-26">
                          Start Now
                      </Link>
                  </div>
              </div>
              <div className={clsx('col col--5', styles.heroImage)}>
                  <Image img={require("@site/static/img/coffee_cup-removebg-preview.png")} alt="coffe-cup"/>
              </div>
          </div>


  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
          <section className={styles.heroBanner}>
              <HomepageHeader />
          </section>

          <section>
              <CountdownCard />
          </section>

          {/*<section>*/}
          {/*    <HomepageFeatures />*/}
          {/*</section>  */}
      </main>
    </Layout>
  );
}
