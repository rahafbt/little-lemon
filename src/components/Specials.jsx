import SpecialsData from "../SpecialsData";

const Specials = () => {
  return (
    <section className="specials">
        <div className="specials-title">
            <h2>This weeks specials!</h2>
            <button>Online Menu</button>
        </div>
        
        <div className="specials-cards">
            {SpecialsData.map(dish => (
                <div key={dish.id} className="card">
                    <img src={dish.image} alt={dish.title} />
                    <div className="card-text">
                        <div className="card-heading">
                            <h4>{dish.title}</h4>
                            <h4 className="card-price">${dish.price.toFixed(2)}</h4>
                        </div>
                        <p>{dish.description}</p>
                        <div className="card-order">
                            <h4>Order a delivery</h4>  
                        </div>
                    </div>                  
                </div>
            ))}
        </div>
    </section>
  );
};
export default Specials;
