import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section > 
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
    
    <button className="	 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Hello</button>

<button className={`.btn-primary {
            @apply text-white bg-primary-500;
          }
          .btn-primary:hover {
            @apply bg-primary-800;
          }`}>
Hello</button>
  </Section>
);

export { Banner };
