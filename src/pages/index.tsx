import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function HandbookSection({title, children}: {title: string; children: ReactNode}) {
  return (
    <section className={styles.handbookSection}>
      <Heading as="h2">{title}</Heading>
      {children}
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Developer handbook for organizational guidelines and best practices">
      <HomepageHeader />
      <main>
        <HandbookSection title="Introduction">
          <p>Welcome to the developer handbook. This guide provides an overview of our development practices, tools, and guidelines.</p>
        </HandbookSection>
        <HandbookSection title="Getting Started">
          <p>To get started, please follow the instructions in the <Link to="/docs/intro">documentation</Link>.</p>
        </HandbookSection>
        <HandbookSection title="Code of Conduct">
          <p>Our code of conduct outlines the expectations for behavior and interactions within the organization.</p>
        </HandbookSection>
        <HandbookSection title="Development Guidelines">
          <p>Follow these guidelines to ensure code quality and consistency across projects.</p>
        </HandbookSection>
        <HandbookSection title="Tools and Resources">
          <p>Here are some tools and resources to help you in your development journey.</p>
        </HandbookSection>
      </main>
    </Layout>
  );
}
