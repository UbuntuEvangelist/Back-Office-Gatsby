import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { H6 } from '../i18n';

function FaqPage() {
  return (
    <Layout>
      <Seo title="About" />
      <SectionWrapper className="bg-background">
        <H6>FaqPage</H6>
      </SectionWrapper>
    </Layout>
  );
}

export default FaqPage;
