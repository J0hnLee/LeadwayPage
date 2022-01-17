import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

import 'aos/dist/aos.css'; // You can also use <link> for styles

const VerticalFeatures = () => {
  return (
    <div>
      <Section title="歡迎光臨" description="這是一間不太一樣的藥局">
        <VerticalFeatureRow
          title="藥師"
          description="阿里阿瓜 亮瞎狗眼"
          image="/assets/images/pharm1.jpeg"
          imageAlt="First feature alt text"
        />
        <VerticalFeatureRow
          title="藥師"
          description="自介寫起來"
          image="/assets/images/pharm2.jpeg"
          imageAlt="Second feature alt text"
          reverse
        />
        <VerticalFeatureRow
          title="店寵"
          description=" 宇宙怪獸"
          image="/assets/images/pet.jpeg"
          imageAlt="Third feature alt text"
        />
      </Section>
    </div>
  );
};

export default VerticalFeatures;
