import AppBar from "@/components/AppBar";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Project Management",
  description: "",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppBar />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
