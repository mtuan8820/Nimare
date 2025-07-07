import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Vocabulary',
    Svg: require('@site/static/img/a-member-of-society-who-overcomes-hurdles-svgrepo-com.svg').default,
    description: (
      <>
          Explore essential vocabulary from the みんなの日本語 textbook,
          organized by lesson. I also share unique or tricky words I encounter while preparing for the JLPT N4 exam.
      </>
    ),
  },
  {
    title: 'Grammar',
    Svg: require('@site/static/img/grammar.svg').default,
    description: (
      <>
          A growing collection of grammar notes based on <br />みんなの日本語 and Try! series.
          Each grammar point includes explanations, example sentences, and personal tips to help you understand and use it naturally.
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/autumn-of-reading-svgrepo-com.svg').default,
    description: (
      <>
          Personal reflections and study updates from my Japanese learning journey.
          I write about what I’ve learned, what I’m struggling with, and tips that might help you too.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
