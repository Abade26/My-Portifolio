import { Header } from "./components/Header/header";
import "src/styles/home.scss";

// 👋
export default function Home() {
  return (
    <main className="container">
     <Header/>
      <div className="experience">
        <h3>Experiência</h3>
        <p>texto</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Idiomas</h3>
          <div className="Languges-info">
            <span>🇺🇸 EN - Iniciante</span>
            <span>🇧🇷 PT-BR - Idioma Nativo</span>
          </div>
          <h3>Educação</h3>
          <span>🎓</span>
          <span>Bacharelado em Ciência da Computação - Universidade Jorge Amado</span>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>entre em contato comigo</button>
        </div>
      </div>
    </main>
  );
}
