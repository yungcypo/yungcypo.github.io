import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Popup from "./Popup";
import "/src/main.css";
import "/src/numberle.css";

function Numberle() {
    function getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * max-min) + min;
    }

    var currentInput:number = 0  /* key of div that is currently ready to use */
    var lowestInput:number = 0

    function addNumber(n:any){
        const numberle = document.getElementById("numberle")

        if (n == -1){
            guessedNumber = guessedNumber.slice(0, -1)
            if (numberle){
                if(currentInput > lowestInput){
                    currentInput -= 1
                }
                console.log("Currentinput = " + currentInput)
                numberle.children[currentInput].innerHTML = ""
            }
            
        } else if (guessedNumber.length < 4 && guessedNumber.length >= 0){
            guessedNumber += String(n)
            if (numberle){
                numberle.children[currentInput].innerHTML = "<p>" + n + "</p>"
                currentInput += 1
            }
        }
        console.log("Guessed number: " + guessedNumber)


    }
    let guessedNumber:string = ""

    function enter(){
        if(guessedNumber.length == 4){
            console.log("ENTER")
        }
    }


    let divs1 = [];
    let divs1_rows = 6;
    let divs1_columns = 4;
    for (let i = 0; i < divs1_rows * divs1_columns; i++) {
        divs1.push(<div key={i}></div>); /* adds 40 divs in array */
    }

    let divs2 = [];
    for (let i = 1; i < 10; i++) {
        divs2.push(
            <div key={i} onClick={() => addNumber(i)}>
                <p>{i}</p>
            </div>
        );
    }

    let n: number = getRandomNumber(1000, 9999);

    console.log(n);

    return (
        <div id="main">
            <h1 className="outlinetext">NUMBERLE</h1>
            <div id="game">
                <div id="numberle" style={{
                    gridTemplateColumns: "repeat(" + {divs1_columns} + ", 4em)",
                    gridTemplateRows: "repeat(" + {divs1_rows} + ", 4em)",
                    }}>{divs1}</div>
                <div id="calc">
                    {divs2}
                    <div className="noborder backspace" onClick={() => addNumber(-1)}><img src="/assets/images/icons/backspace.svg" alt="" /></div>
                    <div key={0} onClick={() => addNumber(0)}><p>0</p></div>
                    <div className="noborder check" onClick={() => enter()}><img src="/assets/images/icons/check.svg" alt="" /></div>
                </div>
                <p>{n}</p>
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
