import React from 'react';

const Product = ({ result }) => {
  return (
    <div className="container pt-5">
      <div className="row">
        {result}
      </div>
    </div>
  );
};

export default Product;
