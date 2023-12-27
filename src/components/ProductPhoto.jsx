import './ProductPhoto.css'
function ProductPhoto({ productValue, productImage }) {
  return (
    <>
      <div>
        <img src={productImage} alt="#" className="photo" />
        {/*<h1 className='productName'>Podrão do Destruidor</h1>*/}
        <p className="productDescription">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          facere, accusamus laboriosam est commodi rem dolorem praesentium qui
          beatae eius veniam eos facilis fugit placeat reiciendis rerum mollitia
          asperiores? Quia.
        </p>
        <h2 className="productPrice">R${productValue.toFixed(2)}</h2>
      </div>
    </>
  )
}

export default ProductPhoto
