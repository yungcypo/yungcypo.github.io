import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Popup from "./Popup";
import "/src/main.css";
import "/src/numberle.css";

function Numberle() {
    let divs1 = []
    let divs1_rows = 8
    let divs1_columns = 4
    for (let i = 0; i < (divs1_rows * divs1_columns); i++){
        divs1.push(<div key={i}></div>)  /* adds 40 divs in array */
    }

    let divs2 = []
    for (let i = 1; i < 10; i++){
        divs2.push(<div key={i}><p>{i}</p></div>)
    }

    return (
        <div id="main">
            <h1 className="outlinetext">NUMBERLE</h1><img id="help" src="/assets/images/icons/help.svg" alt="?" />
            <div id="game">
                <div id="numberle">
                    {divs1}
                </div>
                <div id="calc">
                    {divs2}
                    <div className="noborder backspace"><img src="/assets/images/icons/backspace.svg" alt="" /></div>
                    <div><p>0</p></div>
                    <div className="noborder check"><img src="/assets/images/icons/check.svg" alt="" /></div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Header />
        <Numberle />
        {/* <Popup /> */}
        <Footer />
    </React.StrictMode>
);
