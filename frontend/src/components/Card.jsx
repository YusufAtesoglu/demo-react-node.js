import "../pages/css/Card.css"
const Card = ({ img, name, star, reviews, prevPrice, newPrice }) => {
    return (
      <div className="col-md-4 col-sm-6 mb-4">
        <div className="card h-100 custom-card">
          <img src={img} alt={name} className="card-img-top custom-card-img" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{name}</h5>
            <div className="card-reviews d-flex align-items-center mb-2">
              <div className="text-warning">
                <i className="bi bi-star-fill"></i> {star}
              </div>
              <span className="total-reviews ms-2">({reviews} reviews)</span>
            </div>
            <div className="card-price d-flex justify-content-between align-items-center mt-auto">
              <div className="price">
                <del className="text-muted">{prevPrice}</del> <span className="fw-bold">{newPrice}</span>
              </div>
              <button className="btn btn-outline-primary w-100 mt-2">
                <i className="bi bi-bag-fill"></i> Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  