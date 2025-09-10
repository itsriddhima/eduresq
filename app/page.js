\"use client\";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Logo + Tagline */}
      <motion.img
        src="/logo.png"
        alt="EduResQ Logo"
        className="w-28 h-28 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <h1 className="text-4xl font-bold mb-2 text-orange-400">
        EduResQ: Learn. Prepare. Respond.
      </h1>
      <p className="max-w-2xl mb-8 text-gray-300">
        Building disaster-prepared youth for a safer tomorrow.
      </p>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mb-12">
        <Link href="/learning">
          <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500">
            Start Learning
          </button>
        </Link>
        <Link href="/alerts">
          <button className="px-5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500">
            Emergency Alerts
          </button>
        </Link>
        <Link href="/dashboard">
          <button className="px-5 py-2 rounded-xl bg-green-600 hover:bg-green-500">
            Admin Dashboard
          </button>
        </Link>
      </div>

      {/* Critical Problem Section */}
      <section className="max-w-4xl mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">
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
      <section className="max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">
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
    </div>
  );
}