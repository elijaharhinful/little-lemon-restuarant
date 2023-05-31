import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpeg';
import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Kampala</h2>
          <p>
          A restaurant focused on making you feel at home while enjoying our various international cuisine.
          </p>
          <Link className="button-primary" to={pages.get('bookings').path}>
            Reserve a table
          </Link>
        </div>
        <img 
          className="hero-image" 
          src={restaurantFoodImage} 
          alt="Restaurant food" 
        />
      </div>
    </section>
  );
};

export default Hero;
