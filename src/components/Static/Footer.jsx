import Button from "components/Global/Button";
import Link from "next/link";
import { useRouter } from "next/router"
import { useState } from "react";
import eddyConfig from "../../../eddy.config";
import 'animate.css'



export default function Footer() {
    

    let [heartColor, setHeartColor] = useState('#d89ffe');

    function randomColor() {
        let color = '#';
        let letters = '0123456789ABCDEF';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return <>
    
        <div className="max-w-7xl mx-auto py-12 border-t border-gray-500/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <p className="text-lg text-zinc-400 text-center">© {new Date().getFullYear()} {eddyConfig.name}. <p className="font-medium text-center"><a href="https://github.com/eddysantiagoo/Portafolio-Eddy/blob/main/thank%20u.md" target="_blank" rel="noopener noreferrer" className="underline text-[#d89ffe] hover:text-white">Construido con la ayuda de muchas personas y sus contribuciones</a></p> </p>
                <div className="text-right">
                    <p className="font-medium text-zinc-400 select-none">Adaptado con <i onClick={() => { setHeartColor(randomColor()) }} className="fas fa-heart animate__animated animate__heartBeat animate__infinite"  style={{ color: heartColor, cursor: 'pointer' } } /> por <a href="https://youtu.be/dQw4w9WgXcQ" target={"_blank"} className="text-[#d89ffe] hover:text-primary hover:dark:text-white">Eddy</a></p>
               </div>
            </div>
        </div>
    </>
}