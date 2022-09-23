/* import { useState } from "react"; */
import React from "react";
import "./CSS/style.css";
import palavras from "./palavras";

import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

/* const word = randonWord();  */

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() {
    return Math.random() - 0.5;
}

function clickKey(letter, word, show_word) {
    console.log(letter);
    console.log(`meu word: ${word}`);
    console.log(`meu show_word: ${show_word}`);

    show_word = word.map((n, i) => (n == letter || show_word[i] === n )? n :"-");
    console.log("new world: "+ show_word);
    
    return show_word;

}

function randonWord() {
    const palavrasEmbaralhadas = palavras.sort(comparador);
    let randomNumber = Math.floor(Math.random() * 100);
    let wordPlay = palavrasEmbaralhadas[randomNumber];
    /* return wordPlay.split(""); */

    console.log(typeof (wordPlay));//string
    console.log(typeof (wordPlay.split("")));//objeto

    return wordPlay.split("");//return string
}

export default function App() {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const [word, setWord] = React.useState(randonWord());
    const [show_word, setShowWord] = React.useState(word.map((n)=>"-"));
    

    return (
        <React.Fragment>
            {/*     <div> */}
            <div className="up">
                <img src={forca0} alt="forca0" />
                <div className="right">
                    <button>Escolher Palavra</button>
                    <span className="word">{word}  {show_word}</span>
                </div>
            </div>

            <div>
                <div className="keyboard">
                    <div>
                        {alphabet.map((letter, index) => <div key={index} onClick={() => setShowWord(clickKey(letter, word, show_word))}
                            className="key">{letter.toLocaleUpperCase()}</div>
                        )}

                        {/* {alphabet.map((letter, index) => console.log(letter + " e " + index , wordPlay))} */}
                    </div>
                </div>
                <div className="input_class">
                    <p>Já sei a palavra!</p>
                    <input type="text" />
                    <button>CHUTAR</button>
                </div>
            </div>

            {/*     </div> */}
        </React.Fragment>
    );
}