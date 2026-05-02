import "../../(root)/globals.css";
export const metadata = {
  title: "Dashboard",
  description: "Rishab Lath Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
