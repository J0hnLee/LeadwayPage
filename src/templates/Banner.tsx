import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="這是我們的Line"
      subtitle="和我們聯繫"
      button={
        <Link href="https://line.me/R/ti/p/%40723qfabn">
          <a>
            <Button>Line</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
