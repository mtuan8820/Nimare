import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";

import styles from './styles.module.css';
import Heading from '@theme/Heading';

export default function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
          <div className={clsx(styles.container)}>
              <div className={clsx("col ", styles.firstCol)}>
                  <Heading as="h1" className="">
                      {siteConfig.title}
                  </Heading>
                  <p>{siteConfig.tagline}</p>
                      {/* <Link
                          className={styles.button}
                          to="/vocabulary/vocabulary/minna/minna-vocab-26">
                          Start Now
                      </Link> */}
                  <p>勉強しましょう</p>
              </div>
              <div className={clsx('col', styles.heroImage)}>
                {/* <Study role="img" className={clsx(styles.image)} /> */}
              </div>
          </div>


  );
}
