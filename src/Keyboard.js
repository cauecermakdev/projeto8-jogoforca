import { setShowWord } from "./App";

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const disable = true;

export default function Keyboard(props) {

    return (
        <div className="keyboard">
            <div>
                {alphabet.map((letter, index) =>
                    <div className={disable ? "disable" : ""} key={index} onClick={() => update_forca(letter, props.word, props.show_word)}>
                        {letter.toLocaleUpperCase()}
                    </div>
                )}
            </div>
        </div>
    );
}


