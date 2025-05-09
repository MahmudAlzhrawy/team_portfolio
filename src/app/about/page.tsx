export default function About() {
  return (
    <div className="about min-h-screen bg-cream/70 pt-20">
      <div className="container w-[90%] mx-auto text-center">
        <h1 className="text-chestnut-dark text-5xl md:text-6xl font-alexandria font-bold mb-6 animate-fadeInUp">
          About Codeverse
        </h1>

        <p className="text-chestnut-light text-lg md:text-xl max-w-3xl mx-auto leading-8 animate-fadeInUp delay-200">
          At Codeverse, we are passionate about turning visions into reality. We
          specialize in crafting high-quality websites and mobile applications
          that provide seamless user experiences. Our mission is to empower
          businesses with innovative digital solutions tailored to their needs.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div className="bg-[#FFF8E7] p-8 rounded-2xl shadow-md animate-fadeInUp delay-300">
            <h2 className="text-chestnut-dark text-3xl font-alexandria mb-4">
              Our Mission
            </h2>
            <p className="text-chestnut-light text-lg leading-7">
              To transform innovative ideas into successful digital products
              that enhance user engagement and drive growth.
            </p>
          </div>

          <div className="bg-[#FFF8E7] p-8 rounded-2xl shadow-md animate-fadeInUp delay-500">
            <h2 className="text-chestnut-dark text-3xl font-alexandria mb-4">
              Our Vision
            </h2>
            <p className="text-chestnut-light text-lg leading-7">
              To become a leading force in the digital world by consistently
              delivering creative, effective, and reliable tech solutions.
            </p>
          </div>
        </div>

        <button className="mt-14 px-6 py-4 w-full sm:w-1/2 rounded-2xl text-xl font-mono bg-chestnut-rosewood text-cream hover:bg-chestnut-mahogany transition duration-500 animate-pulseSlow">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
