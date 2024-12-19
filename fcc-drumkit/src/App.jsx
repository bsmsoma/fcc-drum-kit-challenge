import React from "react";

export default function App() {

    const [displayInfo, setDisplayInfo] = React.useState("")

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
                id={item.audioUrl}
                onClick={() => handleClick(item)}
                key={item.text}
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

    React.useEffect(() => {
        function handleKeyPress(event) {
            const key = event.key.toUpperCase();
            const item = data.find(d => d.text === key);
            if (item) {
                handleClick(item);
            }
        }

        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    // function handleClick(item) {
    //     setDisplayInfo(() => item.name)
    //     const audio = new Audio(item.audioUrl)
    //     if (item.audioUrl) {
    //         audio.currentTime = 0;
    //         audio.play();
    //     }
    // }
    function handleClick(item) {
        setDisplayInfo(item.name);
        
        const audioElement = document.getElementById(item.text);  // Get the audio element by its ID
        if (audioElement) {
            audioElement.currentTime = 0;  // Reset the audio to start from the beginning
            audioElement.play();  // Play the audio
        }
    }

    return (
        <section>
            <div id="drum-machine">
                <div className="padbank">
                    <div className="frame">{drumItems.slice(0, 3)}</div>
                    <div className="frame">{drumItems.slice(3, 6)}</div>
                    <div className="frame">{drumItems.slice(6, 9)}</div>
                </div>
                <div className="controlscontainer">
                    <div id="display">{displayInfo}</div>
                </div>
            </div>
        </section>
    )
}