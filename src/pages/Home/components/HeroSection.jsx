import hero_Img from "/public/hero_1.png";


const HeroSection = () => {
  return (
    <section
      id="hero_section"
      className="bg-gradient-to-r from-[#fe7d53] to-[#ff6531] text-white pt-20"
    >
      <div className="main_container_wide">
        <div className="grid px-2 md:px-0 md:grid-cols-2">
          <div className="flex flex-col justify-center p-1">
            <p className="font-medium">Get 20% Sale on all products</p>
            <h1 className="font-bold text-6xl pr-6 mt-2">
              The Molti Online Store
            </h1>
            <p className="mt-6   font-regular">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              nihil nobis aliquid numquam doloribus dolorum perspiciatis
              asperiores omnis sequi repudiandae modi eum consequuntur
              recusandae exercitationem, ipsam voluptate obcaecati eligendi
              nesciunt?
            </p>
            <div>
              <a
                href="#trending_products"
                className="inline-block rounded px-7 py-3 mt-8 mb-24 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 bg-white  text-[#ff6533] font-bold text-[16px] "
              >
                SHOP PRODUCTS <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            
          </div>
          <div className="pl-2">
            <img src={hero_Img} alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
