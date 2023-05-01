import { useState } from "react";
import "/src/main.css";
import "/src/popup.css";

document.body.style.overflow = "hidden";  /* disable scrolling*/

function Popup() {
    const [show, setShow] = useState(true)

    function buttonClick(){
        setShow(false);
        document.body.style.overflow = "visible";
    }

    return (
        show ? <>
            <div id="popup">
                <div>
                    <h3>Táto stránka je vo vývoji</h3>
                    <p>Niektoré funkcie nemusia pracovať správne</p>
                    <div>
                        <a href="https://www.cypo.repl.co">
                            <button className="dark">
                                Späť na starú stránku
                            </button>
                        </a>
                        <button className="bright" onClick={buttonClick}>
                            Pokračovať
                        </button>
                    </div>
                </div>
            </div>
        </> : null
    );
}

export default Popup;
