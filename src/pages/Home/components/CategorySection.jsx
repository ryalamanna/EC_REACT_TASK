import c1 from "/public/women_category.png";
import c2 from "/public/men_category.png";
import c3 from "/public/fashion_category.png";

const CategorySection = () => {
  return (
    <section id="category_section" className="text-white mt-9 mb-[-150px]">
      <div className="main_container_wide flex">
        <div className="border w-[33%] m-4 rounded-lg bg-[#ff8057] grid grid-cols-2">
          <div className="pl-6">
            <p className="text-[14px] font-medium mt-14">New Release</p>
            <h2 className="font-bold text-3xl mt-5">Women Collection</h2>
            <a
              className="font-medium text-[14px] tracking-normal block mt-8 mb-10"
              href="#"
            >
              SHOP NOW
            </a>
          </div>
          <div className="flex">
            <img src={c1} alt="" />
          </div>
        </div>
        <div className="border w-[33%] m-4 rounded-lg bg-[#ff8057] grid grid-cols-2">
          <div className="pl-6">
            <p className="text-[14px] font-medium mt-14">New Release</p>
            <h2 className="font-bold text-3xl mt-5">Women Collection</h2>
            <a
              className="font-medium text-[14px] tracking-normal block mt-8 mb-10"
              href="#"
            >
              SHOP NOW
            </a>
          </div>
          <div className="flex">
            <img src={c2} alt="" />
          </div>
        </div>
        <div className="border w-[33%] m-4 rounded-lg bg-[#ff8057] grid grid-cols-2">
          <div className="pl-6">
            <p className="text-[14px] font-medium mt-14">New Release</p>
            <h2 className="font-bold text-3xl mt-5">Women Collection</h2>
            <a
              className="font-medium text-[14px] tracking-normal block mt-8 mb-10"
              href="#"
            >
              SHOP NOW
            </a>
          </div>
          <div className="flex">
            <img src={c3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
