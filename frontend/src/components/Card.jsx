import "../Urun.css/Card.css"
const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (<>  
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100">
        <img  src={img} alt={title} className="card-img-top" />
         <div className="card-body d-flex flex-column">
           <h5 className="card-title">{title}</h5>
          <div className="card-reviews d-flex align-items-center mb-2">
             <div className="text-warning">
              
                 <i  className="bi bi-star-fill"></i>
              {star}
             </div>
             <span className="total-reviews ms-2">({reviews} reviews)</span>
          </div>
           <div className="card-price d-flex justify-content-between align-items-center mt-auto">
            <div className="price">
              <del className="text-muted">{prevPrice}</del>{' '}
             <span className="fw-bold">{newPrice}</span>
         </div>
            <button className="btn btn-outline-primary w-90 mt-2">
              <i className="bi bi-bag-fill"></i> Add to Bag
           </button>
          </div>
       </div>
    </div>
     </div>

    {/* <div class="card" style={{width: '18rem;'}}>
  <img src={img} class="card-img-top" alt={title}/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <span class="card-text">{star} {reviews}</span>
    <span>{prevPrice} {newPrice}</span>
    <a href="#" class="btn btn-primary">Sepete Ekle</a>
  </div>
</div> */}
    </>
  );
};

export default Card;
