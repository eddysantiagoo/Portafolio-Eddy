import Image from "next/image";

export default function Background() {
    return(
       <div className="background-image-gradient h-screen w-screen md:bg-contain md:bg-center lg:bg-cover opacity-10" 
            style={{ backgroundImage: 'url("/images/background-gradient.webp")'}}>
       </div>
    )
};