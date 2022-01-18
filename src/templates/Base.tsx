import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import NavBar from './Hero';
import VerticalFeatures from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <NavBar />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
