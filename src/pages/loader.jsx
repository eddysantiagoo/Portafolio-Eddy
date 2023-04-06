import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex justify-center items-center py-28">
      <Image src="/images/GifPalomaPNG.gif" width={120} height={120} alt="Cargando..." />
      <h1>El arte la paloma</h1>
    </div>
  );
}
