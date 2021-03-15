import React from "react";

function Character() {

    const [mess,newAge]=React.useState("hello");

    const Array = [{
        name: 'Cinder', power: 'fire', color: 'orange', age: 28,
        moves: ["Trailblazer", "Inferno", "Fire Flash"]
    },
        {
            name: 'Aganos', power: 'rock', color: '#009999', age: 900000,
            moves: ["Payload Assault", "Pulverize", "Ruin"]
        },
        {
            name: 'Jago', power: 'Tiger Spirit', color: '#336699', age: 25,
            moves: ["Edokuken", "Tiger Fury", "Wind Kick"]
        }];

    const myArray = [{
        name: 'mike', power: 'accelerate', color: '#235444', age: 19,
        moves: ["walk", "run", "jump"]
    },
        {
            name: 'Jake', power: 'laylow', color: '#007777', age: 35,
            moves: ["crawl", "climb", "laydown"]
        },
        {
            name: 'Pete', power: 'stare', color: '#554466', age: 50,
            moves: ["look", "gaze", "search"]
        }];

    const style={
        Box:{
            minHeight:"100px",
            maxWidth:"200px",
            listStyleType:"none"
        },

        Ul:{
            listStyleType: "none",
        }

    };

    let list = Array.map((ch, idx) =>
            <div key={idx} style={{backgroundColor: ch.color}}>
                <ul style={style.Ul}>
                    <li> Name: {ch.name}</li>
                    <li>Superpower: {ch.power}</li>
                    <li>Age: {ch.age}</li>
                    <li>Special Moves: {ch.moves[0]}</li>
                    <li>{ch.moves[1]}</li>
                    <li>{ch.moves[2]}</li>
                </ul>
            </div>
        // <div key={idx}>{dt.name}</div>
    );

    let myList = myArray.map((ch, idx) =>
            <div key={idx} style={{backgroundColor: ch.color}}>
                <ul style={style.Ul}>
                    <li> Name: {ch.name}</li>
                    <li>Superpower: {ch.power}</li>
                    <li>Age: {ch.age}</li>
                    <li>Special Moves:</li>
                    <li> {ch.moves[0]}</li>
                    <li>{ch.moves[1]}</li>
                    <li>{ch.moves[2]}</li>
                </ul>
            </div>
        // <div key={idx}>{dt.name}</div>
    );



    return (
        <div style={style.Box}>
            {list}
            {myList}
        </div>
    )
}

export default Character;