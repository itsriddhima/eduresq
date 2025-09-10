import "./globals.css";

export const metadata = {
  title: "EduResQ",
  description: "Learn. Prepare. Respond.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}