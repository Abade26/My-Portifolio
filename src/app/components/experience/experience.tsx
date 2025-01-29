import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"
import "./experience.scss"

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experience"/>   
            <p> Atuo há 1 ano como estagiário de TI em Desenvolvimento de Software no 
                Ministério Público da Bahia.</p>
            <div className="experience-time">
                    <div className="experience-language">
                        <Image
                        src="/HTML.png"
                        alt="HTML Logo"
                        width={40}
                        height={40}
                        priority
                        />
                        <div className="experience-unit">
                            <div className="experience-messure messure-1">
                                1 Ano
                            </div>
                        </div> 
                    </div>
                    <div className="experience-language">
                        <Image
                        src="/CSS.png"
                        alt="CSS Logo"
                        width={40}
                        height={40}
                        priority
                        />
                          <div className="experience-unit">
                            <div className="experience-messure messure-1">
                                1 Ano
                            </div>
                        </div> 
                    </div>
                    <div className="experience-language">
                        <Image
                        src="/JS.png"
                        alt="JS Logo"
                        width={40}
                        height={40}
                        priority
                        />
                          <div className="experience-unit">
                            <div className="experience-messure messure-6">
                                6 Meses
                            </div>
                        </div> 
                    </div>
                    <div className="experience-language">
                        <Image
                        src="/CSharp.png"
                        alt="CSharp Logo"
                        width={40}
                        height={40}
                        priority
                        />
                          <div className="experience-unit">
                            <div className="experience-messure messure-6">
                                6 Meses
                            </div>
                        </div> 
                    </div>
                </div>            
            </div>    
    )
}