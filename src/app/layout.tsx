import "@/styles/globals.css";
import RootNav from "@/sheard/navbar/RootNav";
import RootFooter from "@/sheard/footer/RootFooter";

export const metadata = {
  title: "Abdul Jabbar - MERN Stack Developer",
  description: "Portfolio of Abdul Jabbar, MERN Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <RootNav>
          <RootFooter>
            {children}
          </RootFooter>
        </RootNav>
      </body>
    </html>
  );
}
