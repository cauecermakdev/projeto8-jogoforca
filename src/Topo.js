import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

const array_forca = [forca0,forca1,forca2, forca3, forca4, forca5,forca6];
let erro = 0;

export default function Topo(props) {

    return (
        <div className="up">
            <img src={array_forca[props.erro]} alt="forca0" />
            <div className="right">
                <button /* onClick={ choose_word_bt() ? setDisable(false) : setDisable(true) } */>Escolher Palavra</button>
                <span className="word">{props.word}  {props.show_word}</span>
            </div>
        </div>

    );
}