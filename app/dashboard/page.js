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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const data = {
    labels: ["School A", "School B", "School C", "School D"],
    datasets: [
      {
        label: "Preparedness Score",
        data: [75, 60, 90, 50],
        backgroundColor: "rgba(34,197,94,0.7)", // Tailwind green-500
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "School Preparedness Dashboard" },
    },
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6 text-green-400">Admin Dashboard</h1>
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
