import { RevealOnScroll } from "../RevealOnScroll";
import { Camera, Heart, Clock, Sparkles, Star, MapPin, Globe } from "lucide-react";

export const About = () => {
  const specialties = [
    "💍 Weddings",
    "🤰 Maternity Shoots",
    "🎉 Birthdays",
    "🏢 Corporate Events",
    "📷 Portrait Sessions",
  ];

  const features = [
    { icon: <Camera size={16} />, label: "Cinematic Visuals" },
    { icon: <Sparkles size={16} />, label: "High-Resolution Editing" },
    { icon: <Heart size={16} />, label: "Client-Focused Service" },
    { icon: <Clock size={16} />, label: "Timely Delivery" },
    { icon: <Star size={16} />, label: "Affordable Packages" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-black via-[#0b0b0b] to-black text-white"
    >
      <RevealOnScroll>
        <div className="max-w-6xl w-full mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-center drop-shadow-lg">
            📸 About Us
          </h2>

          <div className="rounded-2xl p-8 md:p-10 backdrop-blur-md bg-gradient-to-r from-[#1c1c1c] to-[#101010] border border-yellow-800/30 shadow-2xl transition-all duration-300 hover:scale-[1.01]">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
              Welcome to <strong className="text-yellow-400">Fine Click Photography</strong> — where <span className="text-amber-300">every click tells a story</span>.
              <br />
              We capture <em>emotion, style, and moments</em> that matter. Whether it's a wedding, maternity shoot, birthday celebration, or a corporate event —
              our lens brings your vision to life. 🌟
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#111111] border border-yellow-800/30 rounded-2xl p-6 hover:shadow-[0_0_20px_#FFD70055] hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-semibold text-yellow-300 mb-4">✨ What We Specialize In</h3>
                <div className="flex flex-wrap gap-3">
                  {specialties.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-yellow-500/10 text-yellow-300 py-1.5 px-4 rounded-full text-sm font-medium hover:bg-yellow-500/20 transition shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#111111] border border-yellow-800/30 rounded-2xl p-6 hover:shadow-[0_0_20px_#FFD70055] hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-semibold text-amber-300 mb-4">🌟 Why Clients Love Us</h3>
                <div className="flex flex-col gap-3">
                  {features.map(({ icon, label }, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 py-1.5 px-4 rounded-full text-sm font-medium shadow-sm transition"
                    >
                      {icon}
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 rounded-2xl bg-[#111111] border border-yellow-800/30 shadow-md hover:shadow-[0_0_15px_#FFD70055] transition-all">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">📍 Our Studio</h3>
              <p className="text-gray-300 leading-relaxed">
                Based in <strong className="text-yellow-300">Chennai, India</strong>, we offer services across the city and love capturing destination dreams too. <MapPin className="inline-block ml-1 text-yellow-400" size={18} />
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111111] border border-yellow-800/30 shadow-md hover:shadow-[0_0_15px_#FFD70055] transition-all">
              <h3 className="text-xl font-bold text-amber-400 mb-4">🎯 Our Mission</h3>
              <p className="text-gray-300">
                At <span className="text-yellow-300">Fine Click Photography</span>, we don't just take pictures —
                we craft timeless stories with light, lens, and love. <Globe className="inline-block ml-1 text-amber-400" size={18} />
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
