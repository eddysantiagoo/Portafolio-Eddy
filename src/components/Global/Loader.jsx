import Image from "next/image";
import Navbar from "components/Static/Navbar";

export default function Loader() {
  return (
    <div className="flex justify-center items-center " style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <Image src="/images/GifPalomaPNG.gif" width={120} height={120} alt="Cargando..." />
    </div>
  );
}
