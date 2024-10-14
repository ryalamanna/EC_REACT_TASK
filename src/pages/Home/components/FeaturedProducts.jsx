import { useProducts } from "../../../context/products.context";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const { products, addToCart } = useProducts();
  return (
    <>
      <section id="category_section" className="my-20">
        <div className="main_container  flex align-center justify-center flex-wrap flex-col">
            <div className="w-[100%] flex items-center ">
                <h2 className="font-bold text-4xl">
                    <span className="text-[#fe7d53]">Featured</span> Products
                </h2> 
                <hr className="w-[170px] mt-2 border-2 border-[#fe7d534f] ml-8" /> 
            </div>
            
            <p className="text-gray-400 font-medium w-[60%] pt-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nemo
                assumenda officiis voluptas velit hic amet sequi atque soluta nihil?
            </p>
            <div className="flex flex-wrap align-center justify-center mt-10">
                {products?.slice(0, 4).map((_) => {
                    return (
                        <ProductCard
                            product = {_}
                            key={_.id}
                        />
                    );
                })}
            </div>
            
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
