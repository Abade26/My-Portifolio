import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"

interface SocialBtnsProps{

}
export function SocialBtns(props: SocialBtnsProps){
    return(
        <div className="social">
            <a href="https://www.instagram.com/abade_dev/">
                <InstaIcon/>
            </a>
            <a href="https://github.com/Abade26">
                <GitHubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/rodrigo-abade/">
                <LinkedInIcon/>
            </a>
          </div>
    )
}