export default function Home() {
  return (
    <div className="home min-h-screen bg-gradient-to-br from-white to-secondary-light relative">
      <div className="container w-[95%] mx-auto">
        <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h1 className="text-primary-dark text-5xl md:text-6xl font-alexandria tracking-normal leading-tight animate-fadeInUp">
            Transforming your idea into a successful digital product
          </h1>
          <p className="text-primary DEFAULT mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fadeInUp delay-200">
            At Codeverse, we excel in designing and developing websites and mobile applications with high quality and unique user experiences.
          </p>
          <button className="mt-10 px-6 py-4 w-full sm:w-1/2 rounded-2xl text-xl font-mono bg-primary-dark text-white hover:bg-primary DEFAULT transition duration-500 animate-pulseSlow">
            Book your Consultation
          </button>
        </section>
      </div>
    </div>
  );
}
