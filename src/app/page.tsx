import { Header } from "./components/Header/header";
import { Experience } from "./components/experience/experience";
import "../styles/home.scss";
import { Info } from "./components/information/information";
import Image from "next/image";
import { EmailIcon } from "./components/icons/email-icon";
import { SocialBtns } from "./components/social-btns/social-btns";

export default function Home() {
  return (
    <main className="container">
     <Header/>
     <Experience/>
      <Info/>
        <div className="buttons">
          <SocialBtns/>
          <a className="btn-primary" href="mailto:rodrigoabade26@gmail.com">
            Contate-me
            <EmailIcon/>
          </a>
        </div>
    </main>
  );
}
