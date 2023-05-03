import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Popup from "./Popup";
import "/src/landing.css";

function Landing() {
    return (
        <>
            <div id="domov">
                <img src="/assets/images/cypo.svg" alt="CYPO" id="logo" />
                <div></div>
            </div>
            <div id="omne">
                <h1 className="outlinetext">O MNE</h1>
            </div>
            <div id="projekty">
                <h1 className="outlinetext">PROJEKTY</h1>
                <a href="/numberle/">Numberle</a>
            </div>
            <div id="kontakt">
                <h1 className="outlinetext">KONTAKT</h1>
            </div>

        </>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Header />
        <Landing />
        <Popup />
		<Footer />
    </React.StrictMode>
);
