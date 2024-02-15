const threed = {
    historia: [
        {
            podnadpis: "3D Pero",
            datum: "December 2017",
            popis: [
                "Na vianoce roku 2017 som dostal 3D pero",
                "3D pero fungovalo na podobnom princípe ako 3D tlačiareň",
                "Veľkou nevýhodou však bola obtiažnosť tlače",
                "Pero nebolo zlé, ale nebolo to ono... Chcelo to tlačiareň"
            ],
            obrazky: [
                {
                    zdroj: require("../images/3dpero.jpg"),
                    popis: "3D pero"
                }
            ],
            align: "left",
        },
        {
            podnadpis: "Dlho nič",
            datum: "December 2017 - Október 2023",
            align: "left",
        },
        {
            podnadpis: "3D tlač v škole",
            datum: "Október 2023",
            popis: [
                "Na vysokej škole som si v prvom semestri prvého ročníka zapísal predmet 3D tlač",
                "Vďaka tomuto predmetu a FriDLab-u som sa prvý krát dostal do kontaktu s 3D tlačiarňou",
                "Taktiež som mal možnosť naučiť sa a pochopiť všetko potrebné ohľadom 3D tlače. Ďakujem!",
                "Tlačiarne, s ktorými sme pracovali boli Prusa Mini+ a Prusa i3 MK3",
            ],
            obrazky: [
                {
                    zdroj: require("../images/prusai3mk3s.jpg"),
                    popis: "Prusa i3 MK3S"
                },
                {
                    zdroj: require("../images/prusamini.jpg"),
                    popis: "Prusa Mini+"
                },
                {
                    zdroj: require("../images/fridlab.jpg"),
                    popis: "Logo FriDLab"
                },
                {
                    zdroj: require("../images/prvyvytlacok.jpg"),
                    popis: "Môj prvý výtlačok"
                },
            ],
            align: "left",
        },
        {
            podnadpis: "Prvá tlačiareň?",
            datum: "20. November 2023",
            popis: [
                "Pre ostatných bol tento deň len normálny pondelok, no pre mňa to bol deň, kedy som si objednal svoju prvú 3D tlačiareň",
                "Po dlhom uvažovaní, rozhodovaní a pozeraní recenzií som sa rozhodol kúpiť si tlačiareň Bambu Lab A1 mini v predpredaji",
                "Očakávaný dátum dodania bol vzhľadom na predpredaj až v januári roku 2024",
                "Neostávalo mi nič iné než pustiť sa do prudkého čakania, ktoré miestami sa zdalo byť nekonečné"
            ],
            obrazky: [
                {
                    zdroj: require("../images/bambulab.png"),
                    popis: "Logo Bambu Lab"
                },
            ],
            align: "left",
        },
        {
            podnadpis: "Prvá tlačiareň!",
            datum: "28. December 2024",
            popis: [
                "Po nekonečne dlhom čakaní o dĺžke 38 dní som konečne dostal oznámenie o doručení svojej nekonečne dlho očakávanej zásielky",
                "Hneď, ako bolo možné som tlačiareň rozbalil, spojazdnil a vytlačil svoj prvý výtlačok - 3D Benchy"
            ],
            obrazky: [
                {
                    zdroj: require("../images/a1mini.jpg"),
                    popis: "Bambu Lab A1 mini"
                },
                {
                    zdroj: require("../images/benchy.jpg"),
                    popis: "Prvý výtlačok mojej tlačiarne"
                },
            ],
            align: "left",
        },
    ],
    filamenty: [
        {
            id: 0,
            vyrobca: "Bambu Lab",
            material: "PLA",
            cena: 29.99,
            realnacena: 18.99,
            farba: {
                nazov: "Čierna",
                code: "#000000",
                invert: true
            },
            hmotnost: {
                soSpoolom: 640,
                spool: 250,
                povodna: 1000,
            },
            teplota: {
                min: 190,
                max: 230
            },
            obrazky: {
                preview: require("../images/filamenty/black.webp"),
                benchy: require("../images/filamenty/benchyblack.jpg"),
            }
        },
        {
            id: 1,
            vyrobca: "Bambu Lab",
            material: "PLA",
            cena: 29.99,
            realnacena: 18.99,
            farba: {
                nazov: "Červená",
                code: "#C12E1F",
                invert: true
            },
            hmotnost: {
                soSpoolom: 790,
                spool: 250,
                povodna: 1000,
            },
            teplota: {
                min: 190,
                max: 230
            },
            obrazky: {
                preview: require("../images/filamenty/red.webp"),
                benchy: require("../images/filamenty/benchyblack.jpg"),
            }
        },
        {
            id: 2,
            vyrobca: "Filament PM",
            material: "PLA+",
            cena: 23.90,
            farba: {
                nazov: "Biela",
                code: "#ecece7"
            },
            hmotnost: {
                soSpoolom: 750,
                spool: 216,
                povodna: 1000,
            },
            teplota: {
                min: 190,
                max: 210
            },
            obrazky: {
                preview: require("../images/filamenty/white.png"),
                benchy: require("../images/filamenty/benchyblack.jpg"),
            }
        },
        {
            id: 3,
            vyrobca: "Filament PM",
            material: "PLA+",
            cena: 23.90,
            farba: {
                nazov: "Sweet Mint",
                code: "#7ebab5"
            },
            hmotnost: {
                soSpoolom: 990,
                spool: 216,
                povodna: 1000,
            },
            teplota: {
                min: 190,
                max: 210
            },
            obrazky: {
                preview: require("../images/filamenty/sweetmint.png"),
                benchy: require("../images/filamenty/benchyblack.jpg"),
            }
        },
        {
            id: 4,
            vyrobca: "eSun",
            material: "PLA+",
            cena: 20.99,
            realnacena: 17.10,
            farba: {
                nazov: "Žltá",
                code: "#fbe625"
				//FBCF25
            },
            hmotnost: {
                soSpoolom: 1040,
                spool: 224,
                povodna: 1000,
            },
            teplota: {
                min: 205,
                max: 225
            },
            obrazky: {
                preview: require("../images/filamenty/yellow.webp"),
                benchy: require("../images/filamenty/benchyblack.jpg"),
            }
        },
        {
            id: 5,
            vyrobca: "eSun",
            material: "eSilk-PLA",
            cena: 20.99,
            realnacena: 17.29,
            farba: {
                nazov: "Modrá",
                code: "#123cea",
                invert: true
            },
            farba2: {
                code: "#61ccee",
            },
            hmotnost: {
                soSpoolom: 1140,
                spool: 224,
                povodna: 1000,
            },
            teplota: {
                min: 190,
                max: 220
            },
            obrazky: {
                preview: require("../images/filamenty/blue.webp"),
                benchy: require("../images/filamenty/benchyblack.jpg"),
            }
        },
        {
            id: 6,
            vyrobca: "eSun",
            material: "ePLA-Silk Magic",
            cena: 25.99,
            realnacena: 25.58,
            farba: {
                nazov: "Ružovo - Modrá",
                code: "#e41e95",
                invert: true
            },
            farba2: {
                code: "#123cea"
            },
            hmotnost: {
                soSpoolom: 980,
                spool: 220,
                povodna: 1000,
            },
            teplota: {
                min: 190,
                max: 230
            },
            obrazky: {
                preview: require("../images/filamenty/ruzovo-modra.webp"),
                benchy: require("../images/filamenty/benchyblack.jpg"),
            }
        },
        {
            id: 7,
            vyrobca: "PolyMaker",
            material: "PolyTerra PLA",
            cena: 19.99,
            farba: {
                nazov: "Ružová",
                code: "#E4BDD0"
            },
            hmotnost: {
                soSpoolom: 705,
                spool: 140,
                povodna: 1000,
            },
            teplota: {
                min: 190,
                max: 230
            },
            obrazky: {
                preview: require("../images/filamenty/pink.png"),
                benchy: require("../images/filamenty/benchyblack.jpg"),
            }
        },
        {
            id: 8,
            vyrobca: "Filament PM",
            material: "PLA",
            cena: 26.90,
            realnacena: 26.17,
            farba: {
                nazov: "Zelená",
                code: "#80bf1a"
            },
            hmotnost: {
                soSpoolom: 1055,
                spool: 216,
                povodna: 1000,
            },
            teplota: {
                min: 200,
                max: 220
            },
            obrazky: {
                preview: require("../images/filamenty/green.png"),
                benchy: require("../images/filamenty/benchyblack.jpg"),
            }
        },
    ],
    hmotnostiAktualizovane: {
        den: 9,
        mesiac: 2,
        rok: 2024
    },
    modely: [
        {
            id: 0,
            nazov: "Bring Me The Horizon kľúčenka",
            obrazok: require("../images/render/bmth-keychain.png"),
            linky: {
                printables: "https://www.printables.com/model/712060",
                makerworld: "https://makerworld.com/en/models/142980",
            },
            hmotnost: 3.6,
            cas: {
                hodiny: 0,
                minuty: 26,
            },
            klucenka: true,
        },
        {
            id: 1,
            nazov: "Sleep Token kľúčenka",
            obrazok: require("../images/render/sleeptoken-side.png"),
            linky: {
                printables: "https://www.printables.com/model/717559",
            },
            hmotnost: 4.6,
            cas: {
                hodiny: 0,
                minuty: 26,
            },
            klucenka: true,
        },
        {
            id: 2,
            nazov: "Trapstar kľúčenka",
            obrazok: require("../images/render/trapstar-keychain-horizontal-hollow.png"),
            linky: {
                printables: "https://www.printables.com/model/717923",
            },
            hmotnost: 2.6,
            cas: {
                hodiny: 0,
                minuty: 24,
            },
            klucenka: true,
        },
        {
            id: 3,
            nazov: "That's The Spirit kľúčenka",
            obrazok: require("../images/render/thatsthespirit-keychain-horizontal.png"),
            linky: {
                printables: "https://www.printables.com/model/720131",
            },
            hmotnost: 4,
            cas: {
                hodiny: 0,
                minuty: 20,
            },
            klucenka: true,
        },
        {
            id: 4,
            nazov: "Cradle of Filth kľúčenka",
            obrazok: require("../images/render/cradleoffilth-v2-2.png"),
            linky: {
                printables: "https://www.printables.com/model/723584",
                makerworld: "https://makerworld.com/en/models/143038"
            },
            hmotnost: 2.4,
            cas: {
                hodiny: 0,
                minuty: 19,
            },
            klucenka: true,
        },
        {
            id: 5,
            nazov: "Cradle of Filth kľúčenka - strong version",
            obrazok: require("../images/render/cradleoffilth-v2-1.png"),
            linky: {
                printables: "https://www.printables.com/model/748967",
            },
            hmotnost: 6.3,
            cas: {
                hodiny: 0,
                minuty: 38,
            },
            klucenka: true,
        },
        {
            id: 6,
            nazov: "Bambu Lab A1 mini Poop Bucket",
            obrazok: require("../images/render/poopbucket.png"),
            linky: {
                printables: "https://www.printables.com/model/702462",
            },
            hmotnost: 160,
            cas: {
                hodiny: 4,
                minuty: 40,
            },
        },
        {
            id: 7,
            nazov: "Nožička na Yenkee podložku",
            obrazok: require("../images/render/nozicka.png"),
            linky: {
                printables: "https://www.printables.com/model/737593",
            },
            hmotnost: 11,
            cas: {
                hodiny: 0,
                minuty: 57,
            },
        },
        {
            id: 8,
            nazov: "Tlačidlo do termostatu",
            obrazok: require("../images/render/tlacidlo.png"),
            linky: {
                printables: "https://www.printables.com/model/651508",
            },
            hmotnost: 1,
            cas: {
                hodiny: 0,
                minuty: 18,
            },
        },
    ]
}

export default threed;