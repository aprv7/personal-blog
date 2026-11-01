
import "./retro.css";
import NavBar from "./NavBar";

export default function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
