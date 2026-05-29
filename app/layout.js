import "./globals.css";

export const metadata = {
  title: "Internship E-Portfolio",
  description:
    "A clean skill development e-portfolio for a university internship programme.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
