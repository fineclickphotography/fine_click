import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const specialties = [
    "Weddings",
    "Maternity Shoots",
    "Birthdays",
    "Corporate Events",
    "Portrait Sessions",
  ];

  const features = [
    "Cinematic Visuals",
    "High-Resolution Editing",
    "Client-Focused Service",
    "Timely Delivery",
    "Affordable Packages",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-black via-[#0b0b0b] to-black text-white"
    >
      <RevealOnScroll>
        <div className="max-w-5xl w-full mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-center">
            About Us
          </h2>

          <div className="rounded-2xl p-8 md:p-10 backdrop-blur-sm bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] border border-yellow-800/20 shadow-xl transition-all duration-300 hover:-translate-y-1">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
              Welcome to <strong className="text-yellow-400">Fine Click Photography</strong>, where every click tells a story.
              <br />
              We are a creative photography studio dedicated to capturing your most cherished moments with style, emotion, and precision.
              Whether it’s a wedding, maternity shoot, birthday, corporate event, or a casual portrait session, we bring your vision to life through our lens.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#111111] border border-yellow-800/30 rounded-2xl p-6 transition-all hover:shadow-[0_0_15px_#FFD70055] hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-yellow-300 mb-4">
                  What We Specialize In
                </h3>
                <div className="flex flex-wrap gap-3">
                  {specialties.map((item, key) => (
                    <span
                      key={key}
                      className="bg-yellow-500/10 text-yellow-300 py-1 px-3 rounded-full text-sm font-medium hover:bg-yellow-500/20 transition shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#111111] border border-yellow-800/30 rounded-2xl p-6 transition-all hover:shadow-[0_0_15px_#FFD70055] hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-amber-300 mb-4">
                  Why Clients Love Us
                </h3>
                <div className="flex flex-wrap gap-3">
                  {features.map((feature, key) => (
                    <span
                      key={key}
                      className="bg-amber-500/10 text-amber-300 py-1 px-3 rounded-full text-sm font-medium hover:bg-amber-500/20 transition shadow-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 rounded-2xl bg-[#111111] border border-yellow-800/30 shadow-md hover:shadow-[0_0_10px_#FFD70055] transition-all">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">📍 Our Studio</h3>
              <p className="text-gray-300 leading-relaxed">
                Based in <strong className="text-yellow-300">Chennai, India</strong>, we offer services across the city and are open to destination shoots as well.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111111] border border-yellow-800/30 shadow-md hover:shadow-[0_0_10px_#FFD70055] transition-all">
              <h3 className="text-xl font-bold text-amber-400 mb-4">📸 Our Mission</h3>
              <p className="text-gray-300">
                At <span className="text-yellow-300">Fine Click Photography</span>, we don’t just take photos — we create memories that last a lifetime.
                Every session is a chance to tell your story with creativity and care.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
