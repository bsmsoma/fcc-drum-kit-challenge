import React, {useEffect} from "react";

export default function App() {

    function handleClick (event) {
        console.log(event)
    }

    const data = [
        {
            text: "Q",
            audioUrl: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
            name: "Heater"
        },
        {
            text: "W",
            audioUrl: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
            name: "Heater 2"
        },
        {
            text: "E",
            audioUrl: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
            name: "Heater 3"
        },
        {
            text: "A",
            audioUrl: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
            name: "Heater 4"
        },
        {
            text: "S",
            audioUrl: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
            name: "Clap"
        },
        {
            text: "D",
            audioUrl: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
            name: "Open-HH"
        },
        {
            text: "Z",
            audioUrl: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
            name: "Kick-n'-Hat"
        },
        {
            text: "X",
            audioUrl: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
            name: "Kick"
        },
        {
            text: "C",
            audioUrl: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
            name: "Closed-HH"
        },

    ];
    
    const drumItems = data.map(item => {
        return (
            <div
                className="drum-pad"
                id={item.text}
                onClick={() => handleClick()}
                >
                {item.text} {/*The Div Text*/}
                <audio
                    className="clip"
                    src={item.audioUrl}
                    id={item.text}>
                </audio>
            </div>
        )
    })

    return (
        <body>
            <div id="drum-machine">
                <div className="padbank">
                    {drumItems}
                </div>
                <div className="controlscontainer"> 
                    <div id="display">Teste</div>
                </div>
            </div>
        </body>
    )
}