const ProductCard = ({ product, onClick }) => {
    return (
      <div className="group relative border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onClick(product)}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 ">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 sm:h-52 lg:h-80 w-full object-scale-down object-center "
          />
          

        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex justify-between gap-2">
            <h3 className="text-sm text-gray-700 text-ellipsis line-clamp-1">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0 " />
                {product.title}
              </a>
            </h3>
            <p className="text-sm font-semibold text-red-700">${product.price}</p>
          </div>
          <div className="flex justify-between">
          <p className="mt-1 text-sm text-gray-500 capitalize">{product.category}</p> 
          <p className="mt-1 text-sm text-gray-500 self-end">{product.rating.rate} ⭐</p>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  