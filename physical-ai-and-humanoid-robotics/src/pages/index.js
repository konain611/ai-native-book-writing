import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import LearnSection from '../components/HomeSections/LearnSection';
import WhySection from '../components/HomeSections/WhySection';
import StartSection from '../components/HomeSections/StartSection';

export default function Home() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics"
      description="A comprehensive guide to embodied intelligence, humanoid engineering, and intelligent machines."
    >
      <main>  
        <HomepageFeatures />
        <WhySection />
        <LearnSection />
        <StartSection />
      </main>
    </Layout>
  );
}
