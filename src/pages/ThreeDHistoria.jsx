import React, {useEffect} from 'react';
import CasovaOs from "../components/CasovaOs";
import threed from "../constants/threed";
import SpatNa from "../components/SpatNa";

const ThreeDHistoria = () => {
    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className={"threedhistoria"}>
                <h2 className={"casovaOsNadpis"}>Ako som sa dostal ku 3D tlači</h2>
                <div>
                    <CasovaOs file={threed.historia}/>
                    <div style={{height: "4em"}}></div>
                </div>
            </div>
            <SpatNa text={"3D tlač"} link={"/3D"}/>
        </>
    );
};

export default ThreeDHistoria;
