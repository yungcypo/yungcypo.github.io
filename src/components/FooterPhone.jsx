import React, {useState} from 'react';
import {Link} from "react-router-dom";

import "../css-old/styles.css"
import "../css-old/footerphone.css"

import kontakt from "../constants/kontakt";

const Footer = () => {
    const [footerHovered, setFooterHovered] = useState(null);
    const handleFooterMouseEnter = (e) => {
        setFooterHovered(e)
    }
    const handleFooterMouseLeave = () => {
        setFooterHovered(null)
    }

    return (
        <footer id={"footerphone"} className={"footerphone noprint phone"}>
            <div>
                <p style={{fontSize: "1.125em"}}>Cypo's Website</p>
                <p className={"vyrazne"}>v3.0.0</p>
                <p>2020 - 2024</p>
            </div>
            <div>
                <p>Made with</p>
                <div>
                    <Link to={"https://react.dev/"} target={"_blank"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
                            <title>React</title>
                            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                            <g stroke="#61dafb" strokeWidth="1" fill="none">
                                <ellipse rx="11" ry="4.2"/>
                                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                            </g>
                        </svg>
                    </Link>
                    <Link to={"https://chat.openai.com/"} target={"_blank"}>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 1000 1000"
                             fill={"#1ca483"}><title>ChatGPT</title>
                            <path
                                d="M928.29,409.26c22.68-68.11,14.88-142.68-21.4-204.61-54.55-95.01-164.25-143.87-271.35-120.88C587.89,30.08,519.41-.45,447.64,0c-109.52-.26-206.66,70.24-240.35,174.45-70.34,14.41-131.05,58.45-166.58,120.85C-14.27,390.05-1.75,509.46,71.7,590.74c-22.68,68.11-14.88,142.68,21.4,204.61,54.55,95.01,164.25,143.87,271.35,120.88,47.64,53.69,116.12,84.22,187.88,83.76,109.58,.28,206.76-70.27,240.42-174.55,70.34-14.41,131.05-58.45,166.58-120.85,54.92-94.74,42.37-214.1-31.06-295.33h0Zm-375.86,525.35c-43.84,.06-86.29-15.29-119.95-43.37,1.51-.82,4.17-2.29,5.91-3.35l199.1-115.02c10.17-5.79,16.43-16.63,16.36-28.33V463.84l84.16,48.6c.9,.44,1.51,1.31,1.63,2.31v232.47c-.12,103.36-83.84,187.15-187.21,187.39Zm-402.64-171.96c-21.96-37.94-29.87-82.4-22.36-125.58,1.48,.88,4.06,2.47,5.91,3.53l199.1,115.02c10.1,5.91,22.61,5.91,32.71,0l243.08-140.36v97.18c.06,1.01-.4,1.97-1.21,2.59l-201.28,116.21c-89.61,51.63-204.13,20.95-255.96-68.58h0Zm-52.38-434.67c21.86-37.99,56.39-67.08,97.54-82.16,0,1.72-.1,4.75-.1,6.87v230.02c-.07,11.7,6.17,22.52,16.35,28.31l243.08,140.34-84.16,48.58c-.84,.56-1.91,.65-2.84,.26l-201.29-116.31c-89.47-51.83-120.15-166.29-68.58-255.92Zm691.44,160.91l-243.1-140.36,84.16-48.57c.84-.56,1.91-.65,2.84-.25l201.29,116.21c89.64,51.77,120.34,166.42,68.56,256.05-21.9,37.93-56.41,66.99-97.52,82.13v-236.9c.1-11.69-6.1-22.51-16.23-28.31Zm83.76-126.07c-1.48-.91-4.06-2.47-5.91-3.53l-199.12-115.02c-10.1-5.89-22.59-5.89-32.71,0l-243.08,140.36v-97.18c-.06-1.01,.4-1.97,1.21-2.59l201.28-116.12c89.67-51.7,204.28-20.93,255.98,68.74,21.84,37.9,29.75,82.23,22.36,125.34h0Zm-526.58,173.23l-84.17-48.6c-.9-.44-1.51-1.31-1.63-2.31V252.67c.07-103.51,84.03-187.37,187.55-187.3,43.78,.03,86.16,15.38,119.79,43.38-1.51,.82-4.16,2.29-5.91,3.35l-199.1,115.02c-10.17,5.78-16.43,16.61-16.36,28.31l-.16,280.6Zm45.72-98.57l108.27-62.54,108.27,62.49v125.03l-108.27,62.49-108.27-62.49v-124.98Z"/>
                        </svg>
                    </Link>
                    <Link to={"https://www.latex-project.org/"} target={"_blank"}>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 1200 500"
                             fill={"white"}><title>LaTeX</title>
                            <path
                                d="M263.13,239.88h-12.05c-4.82,49.16-11.57,108.92-96.39,108.92h-39.04c-22.65,0-23.61-3.37-23.61-19.28V73.61c0-16.39,0-23.13,45.3-23.13h15.9v-14.46c-17.35,1.45-60.72,1.45-80.48,1.45S16.39,37.47,0,36.02v14.46H11.08c37.11,0,38.07,5.3,38.07,22.65v253.01c0,17.35-.96,22.65-38.07,22.65H0v14.94H250.12l13.01-123.86Z"/>
                            <path
                                d="M254.94,35.54c-1.93-5.78-2.89-7.71-9.16-7.71s-7.71,1.93-9.64,7.71l-77.59,196.63c-3.37,8.19-9.16,23.13-39.04,23.13v12.05h74.7v-12.05c-14.94,0-24.1-6.75-24.1-16.39,0-2.41,.48-3.37,1.45-6.75l16.39-41.45h95.42l19.28,49.16c.96,1.93,1.93,4.34,1.93,5.78,0,9.64-18.31,9.64-27.47,9.64v12.05h94.94v-12.05h-6.75c-22.65,0-25.06-3.37-28.43-13.01L254.94,35.54h0Zm-19.28,34.22l42.89,108.92h-85.78l42.89-108.92Z"/>
                            <path
                                d="M640.96,38.92H347.47l-8.67,107.95h11.57c6.75-77.59,13.98-93.49,86.75-93.49,8.67,0,21.2,0,26.02,.96,10.12,1.93,10.12,7.23,10.12,18.31v253.01c0,16.39,0,23.13-50.6,23.13h-19.28v14.94c19.76-1.45,68.43-1.45,90.6-1.45s71.81,0,91.57,1.45v-14.94h-19.28c-50.6,0-50.6-6.75-50.6-23.13V72.65c0-9.64,0-16.39,8.67-18.31,5.3-.96,18.31-.96,27.47-.96,72.29,0,79.52,15.9,86.27,93.49h12.05l-9.16-107.95h0Z"/>
                            <path
                                d="M899.28,348.31h-12.05c-12.05,73.73-23.13,108.92-105.54,108.92h-63.61c-22.65,0-23.61-3.37-23.61-19.28v-128.19h42.89c46.75,0,52.05,15.42,52.05,56.39h12.05v-127.23h-12.05c0,40.96-5.3,55.9-52.05,55.9h-42.89v-115.18c0-15.9,.96-19.28,23.61-19.28h61.69c73.73,0,86.27,26.51,93.98,93.49h12.05l-13.49-107.95h-269.88v14.46h11.08c37.11,0,38.07,5.3,38.07,22.65v251.57c0,17.35-.96,22.65-38.07,22.65h-11.08v14.94h276.63l20.24-123.86Z"/>
                            <path
                                d="M1044.34,178.19l66.02-96.39c10.12-15.42,26.51-30.84,69.4-31.33v-14.46h-114.7v14.46c19.28,.48,29.88,11.08,29.88,22.17,0,4.82-.96,5.78-4.34,11.08l-54.94,80.96-61.69-92.53c-.96-1.45-3.37-5.3-3.37-7.23,0-5.78,10.6-13.98,30.84-14.46v-14.46c-16.39,1.45-51.57,1.45-69.88,1.45-14.94,0-44.82-.48-62.65-1.45v14.46h9.16c26.51,0,35.66,3.37,44.82,16.87l88.19,133.49-78.55,116.14c-6.75,9.64-21.2,31.81-69.4,31.81v14.94h114.7v-14.94c-22.17-.48-30.36-13.49-30.36-22.17,0-4.34,1.45-6.27,4.82-11.57l67.95-100.72,76.14,114.7c.96,1.93,2.41,3.86,2.41,5.3,0,5.78-10.6,13.98-31.33,14.46v14.94c16.87-1.45,52.05-1.45,69.88-1.45,20.24,0,42.41,.48,62.65,1.45v-14.94h-9.16c-25.06,0-35.18-2.41-45.3-17.35l-101.2-153.25h0Z"/>
                        </svg>
                    </Link>
                </div>
            </div>
            <div>
                <Link to={"/disclaimer"}
                      className={"footerupdates"}
                      title={"Vyhlásenie o vylúčení zodpovednosti"}
                >Vyhlásenie</Link>
            </div>
            <div>
                <Link to={"/updates"}
                      className={"footerupdates"}
                      title={"Aktualizácie stránky"}
                >Updates</Link>
            </div>
            <div className={"footerphonekontakty"}>
                {
                    kontakt.map((e, key) => {
                        return (
                            <Link
                                to={e.link}
                                target={"_blank"}
                                onMouseEnter={() => {
                                    handleFooterMouseEnter(e.nazov)
                                }}
                                onMouseLeave={() => {
                                    handleFooterMouseLeave()
                                }}
                                key={key}
                            >
                                <img src={
                                    footerHovered === e.nazov
                                        ? e.ikonka.farebna
                                        : e.ikonka.bezfarebna
                                } alt=""/>
                            </Link>
                        )
                    })
                }
            </div>


        </footer>
    );
};

export default Footer;
