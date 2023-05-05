import { useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Popup from "./Popup";
import "/src/main.css";
import "/src/numberle.css";


function Numberle() {
    /* keyboard events */
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            event.preventDefault()
            if (event.key == "Backspace"){
                addNumber(-1)
            } else if (event.key == "Enter"){
                enter()
            } else if ("0123456789".includes(String(event.key))){
                addNumber(event.key)
            }
        };
        window.addEventListener("keydown", handleKeyPress);
    }, []);

    /* toggle visibility */
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    function getRandomNumber(): number {
        return Math.floor(Math.random() * 9999 - 1000) + 1000;
    }
    let n: number = getRandomNumber();


    var currentInput:number = 0  /* key of div that is currently ready to use */
    var lowestInput:number = 0
    var inputEnabled:boolean = true

    
    function addNumber(n:any){
        const numberle = document.getElementById("numberle")
        if (n == -1 && inputEnabled){
            guessedNumber = guessedNumber.slice(0, -1)
            if (numberle){
                if(currentInput > lowestInput){
                    currentInput -= 1
                }
                numberle.children[currentInput].innerHTML = ""
            }
            
        } else if (guessedNumber.length < 4 && guessedNumber.length >= 0 && inputEnabled){
            guessedNumber += String(n)
            if (numberle){
                numberle.children[currentInput].innerHTML = "<p>" + n + "</p>"
                currentInput += 1
            }
        }
    }
    let guessedNumber:string = ""

    function enter(){
        const numberle = document.getElementById("numberle")
        const calc = document.getElementById("calc")
        if(guessedNumber.length == 4 && numberle && calc && inputEnabled){
            if (guessedNumber == String(n)){getResult(true)}
            for (let i = 0; i < 4; i++){
                if (String(n)[i] == guessedNumber[i]){
                    numberle.children[currentInput - 4 + i].classList.add("green")
                } else if (String(n).includes(guessedNumber[i])){
                    numberle.children[currentInput - 4 + i].classList.add("yellow")
                } else {
                    numberle.children[currentInput - 4 + i].classList.add("none")
                }

                /* TODO show colors on calc */
            }
            lowestInput += 4;
            guessedNumber = "";
            if (lowestInput >= numberle.children.length){getResult(false)}
        }
    }

    let result:any;
    function getResult(bool:boolean){
        inputEnabled = false
        result = (
            <div style={{display: "block"}}>
                <h2 style={{color: bool ? "var(--c31)" : "var(--c21)"}}>
                    YOU {bool ? "WON" : "LOST"}!
                </h2>
                <p>The number was {n}</p>
            </div>
        )

        
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
                <div id="result">{result}</div>
                {/* TODO make win/lose popup */}
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    //<React.StrictMode>
    //</React.StrictMode>
    <>
        <Header />
        <Numberle />
        {/* <Popup /> */}
        <Footer />
    </>
);
