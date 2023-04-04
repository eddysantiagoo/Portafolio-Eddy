import Button from "components/Global/Button";
import Link from "next/link";
import { useRouter } from "next/router"
import { useState } from "react";
import clquConfig from "../../../eddy.config";
import 'animate.css'



export default function Footer() {
    

    let [heartColor, setHeartColor] = useState('#b7b78a');

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
                <p className="text-lg text-zinc-400 text-center">© {new Date().getFullYear()} {clquConfig.name}. Todos los derechos reservados </p>
                <div className="text-right">
                    <p className="text-lg text-zinc-400 select-none">Adaptado con <i onClick={() => { setHeartColor(randomColor()) }} className="fas fa-heart animate__animated animate__heartBeat animate__infinite"  style={{ color: heartColor, cursor: 'pointer' } } /> por <a href="https://youtu.be/dQw4w9WgXcQ" target={"_blank"} className="text-secondary hover:text-primary hover:dark:text-white">Eddy</a></p>
               </div>
            </div>
        </div>
    </>
}