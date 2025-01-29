import { SectionTitle } from "../sectionTitle/section-title"
import "./infromation.scss"

export function Info(){
    return(
        <div className="infos">
          <SectionTitle text="Idiomas"/>
          <div className="languges-info">
            <span>EN - Iniciante</span>
            <span>PT-BR - Idioma Nativo</span>
          </div>
          <SectionTitle text="Formação"/>
          <span>🎓 Bacharelado em Ciência da Computação - Universidade Jorge Amado - 7° semestre</span>
        </div>
    )
}