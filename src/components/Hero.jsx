const Hero = () => {
  return (
    <div className="relative bg-[url(/hero.png)] sm:min-ph-[25vh] sm:h-[45vh] sm:max-h-[50vh] bg-cover bg-right bg-no-repeat">
      <div className="container py-8 sm:py-0 sm:flex justify-between items-center h-full">
        <div className="flex items-center h-full">
          <div>
            <p className="uppercase text-primary font-bold">
              Shop our freshest items..
            </p>
            <h2 className="text-primaryDark font-bold text-[24px] sm:text-[30px] md:text-[40px] lg:text[48px] pb-8 leading-tight">
              Fresh hand-picked vegetables
              <br />
              <span className="text-primary">Everyday</span>
            </h2>

            <a className="border-b border-black" href="#">
              Discover More..
            </a>
          </div>
        </div>
        <div className="flex items-center h-full">
          <img src="/veg_basket.png" alt="veg_basket" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
