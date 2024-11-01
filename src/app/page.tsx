import { Header } from "./components/Header/header";
import { Experience } from "./components/experience/experience";
import "../styles/home.scss";

export default function Home() {
  return (
    <main className="container">
     <Header/>
     <Experience/>
        <div className="infos">
          <h3>Idiomas</h3>
          <div className="Languges-info">
            <span>🇺🇸 EN - Iniciante</span>
            <br />
            <span>🇧🇷 PT-BR - Idioma Nativo</span>
          </div>
          <h3>Educação</h3>
          <span>🎓</span>
          <span>Bacharelado em Ciência da Computação - Universidade Jorge Amado</span>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>Contate-me</button>
        </div>
    </main>
  );
}
