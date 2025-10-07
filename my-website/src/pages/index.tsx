import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import "./index.css";
import CountdownCard from "@site/src/components/CountdownCard";
import HeroSection from '@site/src/components/HeroSection';
import JLPTList from '../components/JLPTList';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className={clsx('container')}>
          <section className={clsx('before-pattern after-pattern')} >
              <HeroSection />
          </section>  

          <section className={clsx('before-pattern after-pattern')}>
              <JLPTList/>
          </section>

          <section className={clsx('before-pattern after-pattern')} >
              <CountdownCard />
          </section>
      </main>
    </Layout>
  );
}
