import { SectionTitle } from "../sectionTitle/section-title"
import "./experience.scss"

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experience"/>   
            <p> Atuo há 10 meses como estagiário de TI em Desenvolvimento de Softwere no 
                Ministério Público da Bahia.</p>
            <div className="experience-time"></div>
        </div>
    )
}