import Image from "next/image";
import "./header.scss"

export function Header(){
    return(
        <div className="header">    
            <div>
                <h1>Oi, Eu sou Rodrigo Abade! </h1>
                <h2>Ciêntista da Computação</h2>
            </div>
            <Image
            src="/me.jpg"
            alt="Vercel.Logo"
            width={225}
            height={210}
            priority
            />
        </div>
    )
}