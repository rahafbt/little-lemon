import { Link } from "react-router-dom";
import restauranfood from '../assets/restauranfood.jpg'

const CallToAction = () => {
  return (
    <section className="callToAction">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p className="banner">We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to={"/booking"}>
          <button>Reserve a Table</button>
        </Link>
        <div className="bannerImg">
          <img src={restauranfood} alt="Restaurant food" />
        </div>
    </section>
  );
};
export default CallToAction;
