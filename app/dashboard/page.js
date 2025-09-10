"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const data = {
    labels: ["School A", "School B", "School C", "School D"],
    datasets: [
      {
        label: "Preparedness (%)",
        data: [75, 40, 60, 90],
        backgroundColor: ["#22c55e", "#f97316", "#3b82f6", "#e11d48"], // green, orange, blue, red
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#d1d5db" }, // gray-300 for text
      },
      title: {
        display: true,
        text: "School Preparedness Overview",
        color: "#d1d5db",
      },
    },
    scales: {
      x: {
        ticks: { color: "#d1d5db" },
      },
      y: {
        ticks: { color: "#d1d5db" },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-extrabold mb-6 text-green-400">Admin Dashboard</h1>
      <p className="text-gray-300 mb-6 text-lg">
        Track and monitor preparedness levels across schools.
      </p>

      <div className="max-w-3xl mx-auto bg-[#1E293B] p-6 rounded-xl shadow-lg">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
