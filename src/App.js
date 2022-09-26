/* import { useState } from "react"; */
import React from "react";
import "./CSS/style.css";
import palavras from "./palavras";
/* import Topo from "./Topo"; */

/* const word = randonWord();   */

import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

const array_forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

let erro = 0;
let win_game = false;
let lost_game = false;

function isArraysEqual(word, show_word) {
    let isEqual = true;
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== show_word[i]) {
            isEqual = false;
        }
    }
    return isEqual;
}


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() {
    return Math.random() - 0.5;
}

function change_special_characters(n) {
    let c;
    let string = "";

    for (let i = 0; i < n.length; i++) {
        c = n[i];
        if (c === "á") {
            /* console.log(n); */
            string = n.replace("á", "a");
            /* console.log(string); */
        } else if (c === "ã") {
            string = n.replace("ã", "a");
        } else if (c === "ê") {
            string = n.replace("ê", "e");
        } else if (c === "é") {
            string = n.replace("é", "e");
        } else if (c === "í") {
            string = n.replace("í", "i");
        } else if (c === "ó") {
            string = n.replace("ó", "o");
        } else if (c === "ô") {
            string = n.replace("ô", "o");
        } else if (c === "ú") {
            string = n.replace("ú", "u");
        } else if (c === "ç") {
            string = n.replace("ç", "c");
        }
    }

    return string === "" ? n : string;
}


function clickKey(letter, word, show_word, setDisable,setErro, erro) {

    show_word = word.map((n, i) => (n == letter || show_word[i] === n) ? n : "-");
    show_word == word ? console.log("igual") : console.log("diferente")
    
    word.includes(letter) ? erro = erro : setErro(erro+1);
    erro > 6 ? lost_game = true : lost_game = false;


    if (isArraysEqual(word, show_word)) {
        alert("É igual");
        win_game = true;
    }

    if (erro >= 5) {
        setDisable(true);
        show_word = word;
    }
    

    return show_word;

}

function randonWord() {
    const palavrasEmbaralhadas = palavras.sort(comparador);
    let randomNumber = Math.floor(Math.random() * 100);
    let wordPlay = palavrasEmbaralhadas[randomNumber];
    /* return wordPlay.split(""); */

    console.log(typeof (wordPlay));//string
    console.log(typeof (wordPlay.split("")));//objeto
    return change_special_characters(wordPlay).split("");
    //return wordPlay.split("");//return string
}

function wordStyle(erro) {

    if (win_game) {
        return "word green";
    } else if (erro >= 6) {
        return "word red";
    } else {
        return "word";
    }
}


function choose_word_bt(disable, setDisable, setWord, setShowWord,setKeyClickedArray, setErro,setInputValue) {

    let wd;
    win_game = false;
    setErro(0);

    if (disable) {
        setDisable(false);
    }

    wd = randonWord();
    setWord(wd);
    setShowWord(wd.map((n) => "-"));
    
    setKeyClickedArray([]);
    setInputValue("");
}

function inputTry(inputValue,word,end,setErro){
    
    //console.log(inputValue);
    //console.log(word);

    if(isArraysEqual(word, inputValue.split("")) ){
        win_game = true;//green word
        end();
    }else{
        lost_game = true;
        setErro(6);
        end();
    }
}

export default function App() {
    const [erro, setErro] = React.useState(0);
    const [keyClickedArray, setKeyClickedArray] = React.useState([]);
    const [disable, setDisable] = React.useState(true);
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const [word, setWord] = React.useState("");
    const [show_word, setShowWord] = React.useState("");
    const [inputValue, setInputValue] = React.useState("");
    
    function end(){
        console.log("quantas vezes roda varios sets na mesma função?");
        setShowWord(word);
        setDisable(true);
        /* setErro(6); */
    }

    function update_forca(word, show_word, letter,erro) {
        console.log(erro);
        if (!keyClickedArray.includes(letter)) {
            setShowWord(clickKey(letter, word, show_word, setDisable,setErro,erro));
            setKeyClickedArray([...keyClickedArray, letter]);
            console.log(keyClickedArray);
        }
    }


    return (
        <React.Fragment>
            <div className="up">
                <img data-identifier="game-image" src={array_forca[erro]} alt="forca" />
                <div className="right">
                    <button data-identifier="choose-word" onClick={() => choose_word_bt(disable, setDisable, setWord, setShowWord,setKeyClickedArray,setErro,setInputValue)}>Escolher Palavra</button>
                    <span data-identifier="word" className={wordStyle(erro)} >{/* {word} */} {show_word}</span>
                </div>
            </div>
            
            <div>
                <div className="keyboard">
                    <div>
                        {alphabet.map((letter, index) =>
                            <div data-identifier="letter" className={`${disable ? "disable" : ""}  ${keyClickedArray.includes(letter) ? "clicked" : ""}`} key={index} onClick={() => !disable ? update_forca(word, show_word, letter,erro) : ""}>
                                {letter.toLocaleUpperCase()}
                            </div>
                        )}
                    </div>
                </div>
                <div className={`input_class ${disable ? "disable" : ""}`} >
                    <p >Já sei a palavra!</p>
                    <input data-identifier="type-guess" type="text" onChange = {e => setInputValue(e.target.value)} value={disable?"":inputValue}/>
                    <button  data-identifier="guess-button" onClick={()=> inputTry(inputValue,word,end,setErro)}>CHUTAR</button>
                </div>
            </div>
        </React.Fragment>
    );
}

