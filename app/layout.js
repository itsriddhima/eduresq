import "./globals.css";

export const metadata = {
  title: "EduResQ",
  description: "Learn. Prepare. Respond.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-inter bg-[#0A192F] text-white">
        {children}
      </body>
    </html>
  );
}
