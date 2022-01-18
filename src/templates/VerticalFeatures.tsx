import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import  Aos  from 'aos';



const VerticalFeatures = () => {
  useEffect(() => {
    Aos.init({       
// Global settings:
disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
initClassName: 'aos-init', // class applied after initialization
animatedClassName: 'aos-animate', // class applied on animation
useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
disableMutationObserver: false, // disables automatic mutations' detections (advanced)
debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
offset: 120, // offset (in px) from the original trigger point
delay: 3000, // values from 0 to 3000, with step 50ms
duration: 400, // values from 0 to 3000, with step 50ms
easing: 'ease', // default easing for AOS animations
once: false, // whether animation should happen only once - while scrolling down
mirror: false, // whether elements should animate out while scrolling past them
anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animatio

     });
  }, []);
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
