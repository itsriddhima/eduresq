export default function Alerts() {
  const alerts = [
    { id: 1, type: "Flood", location: "Punjab", status: "Active" },
    { id: 2, type: "Earthquake", location: "Uttarakhand", status: "Warning" },
    { id: 3, type: "Cloudburst", location: "Himachal Pradesh", status: "Resolved" },
  ];

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-extrabold mb-6 text-orange-400">
        Emergency Alerts
      </h1>
      <p className="text-gray-300 mb-4 text-lg">
        Stay updated with the latest disaster alerts across regions.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#1E293B] rounded-lg shadow-lg">
          <thead>
            <tr className="bg-[#0F172A] text-orange-400">
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert) => (
              <tr key={alert.id} className="border-b border-gray-700">
                <td className="py-3 px-4 text-gray-200">{alert.type}</td>
                <td className="py-3 px-4 text-gray-200">{alert.location}</td>
                <td
                  className={`py-3 px-4 font-semibold ${
                    alert.status === "Active"
                      ? "text-red-400"
                      : alert.status === "Warning"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }`}
                >
                  {alert.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
