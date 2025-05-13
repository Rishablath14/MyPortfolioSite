import "../../(root)/globals.css";
export const metadata = {
  title: "Dashboard",
  description: "Rishab Lath Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
