import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="h-screen relative">
      <div
        className={`${styles.paddingX} absolute inset-0 z-[10] top-[120px] max-w-7xl mx-auto flex items-center `}
      >
        <div className="flex flex-col justify-start items-start mt-5 ">
          <div className="h-1 sm:w-80 w-40 primary-gradient" />
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi!
              <span className="text-brand font-normal"> I'm Nicholas</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Front-end developer looking to create fun and inspiring designs
              with attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
