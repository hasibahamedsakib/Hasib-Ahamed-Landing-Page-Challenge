import BannerImg from "/src/assets/banner-image.png";
const Banner = () => {
  return (
    <section className=" bg-[#EAEAEA]">
      <div className="Container flex  justify-center  h-[920px]">
        <h1 className="text-3xl font-semibold underline text-center">
          Banner Section
        </h1>
        <div className="flex items-end">
          <img src={BannerImg} alt="Banner image" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
