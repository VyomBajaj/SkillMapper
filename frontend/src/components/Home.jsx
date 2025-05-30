import React from "react";
import { Rocket, Compass, User } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-900 via-gray-900 to-gray-800 text-white">
      <header className="w-full px-8 py-6 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-tight">SkillMap</h1>
        <nav className="flex gap-6 text-sm">
          <a href="#roadmap" className="hover:text-blue-400 transition">Roadmaps</a>
          <a href="#roles" className="hover:text-blue-400 transition">Roles</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
        </nav>
      </header>

      <main className="px-8 py-12 max-w-6xl mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Bridge the Gap Between <span className="text-blue-500">Where You Are</span> and <span className="text-green-400">Where You Want to Be</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            SkillMap helps you build personalized roadmaps based on your current skills and your dream role. Start your journey today.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
              Get Started
            </button>
            <button className="border border-gray-500 hover:border-gray-300 text-gray-300 hover:text-white px-6 py-2 rounded-lg transition">
              Learn More
            </button>
          </div>
        </section>

        <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          <FeatureCard 
            icon={<User className="h-8 w-8 text-blue-400" />} 
            title="Skill Assessment" 
            desc="Analyze your current skill set to determine where you stand." 
          />
          <FeatureCard 
            icon={<Compass className="h-8 w-8 text-purple-400" />} 
            title="Smart Roadmaps" 
            desc="Generate dynamic roadmaps tailored to your strengths and goals." 
          />
          <FeatureCard 
            icon={<Rocket className="h-8 w-8 text-green-400" />} 
            title="Career Launchpad" 
            desc="Follow your roadmap and achieve your target role confidently." 
          />
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-700">
        © {new Date().getFullYear()} SkillMap. All rights reserved.
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div
    className="bg-gray-800 p-6 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-2 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-2xl"
    style={{
      transformStyle: "preserve-3d",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
    }}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{desc}</p>
  </div>
);

export default Home;
