import {useEffect, useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "../css/styles.css"
import "../css/home.css"

import CasovaOs from "../components/CasovaOs";
import Carousel from "../components/Carousel";
import Kontakt from "../components/Kontakt";

import vzdelanie from "../constants/vzdelanie";
import mudrosti from "../constants/mudrosti"

import background from "../images/background.webp"
import {ReactComponent as HumanIcon} from "../images/icons/human.svg";
import {ReactComponent as HomeIcon} from "../images/icons/home.svg";
import {ReactComponent as SchoolIcon} from "../images/icons/school.svg";
import {ReactComponent as SchoolDoneIcon} from "../images/icons/schooldone.svg";

const Home = () => {
    const [nahodnaMudrost, setNahodnaMudrost] = useState(Math.floor(Math.random() * mudrosti?.length));

    // zobrazit ✨toto✨ v O Mne sekcii
    const [zobrazitToto, setZobrazitToto] = useState(true);

    const navigate = useNavigate()
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const omneref = useRef(null);
    const vzdelanieref = useRef(null);
    const projektyref = useRef(null);
    const kontaktref = useRef(null);

    /* scroll to top */
    useEffect(() => {
        if (params.get("scroll") === "omne" && projektyref.current) {
            omneref.current.scrollIntoView()
        } else if (params.get("scroll") === "projekty" && projektyref.current) {
            projektyref.current.scrollIntoView()
        } else if (params.get("scroll") === "vzdelanie" && projektyref.current) {
            vzdelanieref.current.scrollIntoView()
        } else if (params.get("scroll") === "kontakt" && kontaktref.current) {
            kontaktref.current.scrollIntoView()
        } else {
            window.scrollTo(0, 0)
        }

        document.title = "Cypo | Domov"
        console.log(localStorage)
    }, [location]);

    return (
        <main>
            <div className={"landing"} style={{
                width: '100vw',
                backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0.8), rgba(0,0,0, 0.7), rgba(0,0,0, 0.1)), url(${background})`,
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <h1>Peter</h1>
                <h1>Cyprich</h1>
                <p>{mudrosti[nahodnaMudrost]}</p>
                <div className="sipka" onClick={() => {
                    navigate("/?scroll=omne")
                }}></div>
            </div>
            <div id="omne" className={"homeComponent"} ref={omneref}>
                <h2>O mne</h2>
                <hr/>
                <div className={"omneContainer"}>
                    <div className="omneNapisy">
                        <div className={"omneContent"}>
                            <HumanIcon class={"omneIcon"}/>
                            <div>
                                <h3>
                                    Peter
                                    <span>Cypo</span>
                                    Cyprich
                                </h3>
                                <h5 style={{fontWeight: 300}}>Since 2003</h5>
                            </div>
                        </div>
                        <div className={"omneContent"}>
                            <HomeIcon class={"omneIcon"}/>
                            <h3>
                                <span style={{paddingLeft: '0'}}>Prievidza,</span>
                                Slovensko
                            </h3>
                        </div>
                        <div className={"omneContent"}>
                            <SchoolIcon class={"omneIcon"} onClick={() => {navigate("/?scroll=vzdelanie")}}/>
                            <h3 onClick={() => {navigate("/?scroll=vzdelanie")}}>
                                <span style={{paddingLeft: '0'}}>Fakulta riadenia a informatiky,</span>
                                UNIZA
                                <p>Informačné a sieťové technológie</p>
                            </h3>
                        </div>
                        <div className={"omneContent"}>
                            <SchoolDoneIcon class={"omneIcon"} onClick={() => {navigate("/?scroll=vzdelanie")}}/>
                            <h3 onClick={() => {navigate("/?scroll=vzdelanie")}}>
                                <span>SOŠ T. Vansovej</span>, Prievidza
                                <p>Technické a Informatické služby v stavebníctve</p>
                            </h3>
                        </div>
                    </div>
                    {
                        zobrazitToto
                            ? <div className={"animacia"}>
                                {/*TODO: nieco s Three.JS*/}
                                <h3><i>✨toto✨</i></h3>
                                <img src={require("../images/toto.jpg")} alt=""/>
                            </div>
                            : null
                    }
                </div>
                <hr style={{margin: '0 1em'}}/>
                <div ref={vzdelanieref}>
                    <h3 className={"casovaOsNadpis"}>Moje vzdelanie</h3>
                    <CasovaOs file={vzdelanie}/>
                </div>
            </div>
            <div id="projekty" className={"homeComponent"} ref={projektyref}>
                <Carousel/>
            </div>
            <div id="kontakt" className={"kontaktHome"} ref={kontaktref}>
                <Kontakt style={{textAlign: "center", marginTop: "0"}}/>
            </div>
        </main>
    );
};

export default Home;