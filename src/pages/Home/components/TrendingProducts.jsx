import { useProducts } from "../../../context/products.context";
import ProductCard from "./ProductCard";

const TrendingProducts = () => {
  const { products, addToCart } = useProducts();
  return (
    <>
      <section id="trending_products" className="my-20">
        <div className="main_container  flex align-center justify-center flex-wrap flex-col">
        <div className="w-full flex items-center px-10 lg:px-0">
                <h2 className="font-bold text-4xl">
                    <span className="text-[#fe7d53]">Trending</span> Products
                </h2> 
                <hr className="w-[170px] mt-2 border-2 border-[#fe7d534f] ml-8 hidden md:inline" /> 
            </div>
            
            <p className="text-gray-400 font-medium lg:w-[60%] pt-5 px-10 lg:px-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nemo
                assumenda officiis voluptas velit hic amet sequi atque soluta nihil?
            </p>
          <div className="flex flex-wrap align-center justify-center mt-10">
            {products?.slice(0, 8).map((_) => {
              return <ProductCard product={_} key={_.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingProducts;
