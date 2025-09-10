'use client';
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-center px-6">
      
      {/* Logo + Tagline */}
      <motion.img
        src="/logo.png"
        alt="EduResQ Logo"
        className="w-28 h-28 mt-12 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <h1 className="text-4xl font-bold mb-2 text-orange">
        EduResQ: Learn. Prepare. Respond.
      </h1>
      <p className="max-w-2xl mb-8 text-gray-300">
        Building disaster-prepared youth for a safer tomorrow.
      </p>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mb-12 flex-wrap justify-center">
        <Link href="/learning">
          <button className="bg-cyan hover:bg-cyan/90">Start Learning</button>
        </Link>
        <Link href="/alerts">
          <button className="bg-orange hover:bg-orange/90">Emergency Alerts</button>
        </Link>
        <Link href="/dashboard">
          <button className="bg-green-600 hover:bg-green-500">Admin Dashboard</button>
        </Link>
      </div>

      {/* Critical Problem Section */}
      <section className="max-w-4xl mb-16 text-left">
        <h2 className="text-2xl font-semibold mb-4 text-cyan">
          The Critical Problem
        </h2>
        <p className="text-gray-300 leading-relaxed">
          The National Disaster Management Authority (NDMA) consistently reports
          low awareness among youth despite India’s vulnerability to floods,
          earthquakes, and cloudbursts.  
          <br /><br />
          Recent examples highlight this urgency:  
          • August 2025 – Flash floods in Punjab displaced thousands.  
          • September 2025 – Cloudbursts in Uttarakhand triggered massive landslides.  
          • September 2025 – Earthquake tremors shook North India, exposing poor
          preparedness in schools and communities.  
          <br /><br />
          Lack of preparedness leads to panic, chaos, and increased fatalities
          during emergencies.
        </p>
      </section>

      {/* Why This Matters Now Section */}
      <section className="max-w-4xl mb-16 text-left">
        <h2 className="text-2xl font-semibold mb-4 text-orange">
          Why This Matters Now
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Equipping students with disaster-preparedness knowledge transforms
          potential victims into agents of safety.  
          By creating resilient youth, we build safer schools, homes, and a
          stronger nation.  
          EduResQ bridges the gap between awareness and action with adaptive
          learning, real-time alerts, and readiness dashboards.
        </p>
      </section>

      {/* Features / Modules */}
      <section className="max-w-6xl mb-16 text-left">
        <h2 className="text-2xl font-semibold mb-6 text-cyan text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold text-cyan mb-2">Interactive Learning</h3>
            <p className="text-gray-300">
              Web modules with gamified quizzes to teach disaster response effectively.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-cyan mb-2">Simulated Drills</h3>
            <p className="text-gray-300">
              Click-through disaster drill animations for hands-on practice.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-cyan mb-2">Region-Specific Alerts</h3>
            <p className="text-gray-300">
              Real-time alerts for emergencies based on location.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-cyan mb-2">Admin Dashboard</h3>
            <p className="text-gray-300">
              Track participation and preparedness using Python + MySQL backend.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-cyan mb-2">Adaptive Learning</h3>
            <p className="text-gray-300">
              Rule-based difficulty adjustments for different age groups.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-cyan mb-2">Future Enhancements</h3>
            <p className="text-gray-300">
              AR/VR immersive simulations for realistic disaster practice.
            </p>
          </div>
        </div>
      </section>

      {/* Visuals / Placeholder */}
      <section className="max-w-6xl mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-orange">Visuals & Simulations</h2>
        <div className="image-placeholder">
          [Add images, animations, or AR/VR simulations here]
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-8 border-t border-cyan text-cyan">
        © 2025 EduResQ | Designed with ❤️ for safer campuses
      </footer>
    </div>
  );
}
