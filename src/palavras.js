const palavras = [
    "abacate", "abacaxi", "abelha", "abanador", "antologia", "amor", "aba", "abraço", "ábaco", "abrigo", "abrir", 
    "banana", "boi", "batata", "bacalhau", "bexiga", "bowl", "batedeira", "bisturi", "barreira", "banco", 
    "caixa", "chantilly", "comércio", "cachorro", "cuidado", "caneta", "carinho", "cupuaçu", "cabra", "cesto", 
    "dados", "dizer", "danone", "dente", "diário", "diamante", "diafragma", "detonar", "dia", "dromedário", 
    "elefante", "esmeralda", "espátula", "estômago", "esfinge", "esfera", "encontro", "ema", "escola", "economia", 
    "formiga", "fama", "festa", "fiador", "ferver", "flauta", "fichário", "figo", "fiapo", "fotografia", 
    "goiaba", "gelo", "grito", "gamão", "guria", "goleiro", "golfinho", "golfe", "girar", "glúten", 
    "helicóptero", "harmonia", "haste", "hectare", "hábito", "hepatite", "hiena", "hemisfério", "hidrante",
    "igreja", "ícone", "importante", "ímpar", "idoso", "irado", "identidade", "idioma", "idade", "idiota", 
    "jantar", "jumento", "jambú", "jibóia", "jararaca", "janela", "jerimum", "jaula", "jabuti", "jaleco", 
    "laranja", "lua", "leão", "limão", "larápio", "luz", "lindo", "lacraia", "lactose", "laço", "lacrar", 
    "mamão", "manga", "morango", "mico", "matar", "mingau", "moqueca", "macacão", "mocassin", "maçaneta", 
    "nectarina", "nada", "navio", "namorado", "ninja", "natal", "narciso", "narina", "nádega", "nabo", 
    "ovo", "ostra", "obstetra", "oblíquo", "orangotango", "olhar", "óculos", "ortodoxo", "ouro", "ornamento", 
    "pato", "polvo", "povoar", "pólvora", "palhaço", "paróqia", "pano", "princesa", "pizza", "patroa", 
    "queijo", "quitanda", "quinta", "quantia", "quarentena", "quadrilha", "quaresma", "quartzo", "quebrar", "quarteirão", 
    "risada", "rio", "remar", "rato", "racional", "rainha", "radioatividade", "raiz", "raiva", "rachadura", 
    "salada", "salamandra", "sacola", "siri", "sábado", "safanão", "sabre", "sucarose", "sabedoria", "sacerdote", 
    "tatu", "tabacaria", "taberneiro", "tábua", "torrada", "três", "terço", "tamanho", "tatuagem", "trem", 
    "uva", "uísque", "união", "universo", "unanimidade", "ubuntu", "universidade", "urso", "uivar", "unir", 
    "vela", "valeta", "vacilo", "valor", "vagem", "vadiagem", "vaca", "valentia", "vidro", "valsa", 
    "xícara", "xadrez", "xilofone", "xarope", "xenofobia", "xereta", "xerife", "xaveco", "xixi", "xale", 
    "zebra", "zagueiro", "zero", "zoeira", "zodíaco", "zangão", "zepelim", "zinco", "zoológico", "zumbido"
]

let palavrasSemCarEsp = [];

function change_special_characters(palavras){
    let c;
    let string;
    palavrasSemCarEsp = palavras.map((n)=> {
        string = "";
        for(let i = 0; i< n.length; i++){
            c = n[i];
            if(c==="á"){
                /* console.log(n); */
                string =  n.replace("á","a");
                /* console.log(string); */
            }else if(c==="ã"){
                string = n.replace("ã","a");
            }else if(c==="ê"){
                string = n.replace("ê","e");
            }else if(c==="é"){
                string = n.replace("é","e");
            }else if(c==="í"){
                string = n.replace("í","i");
            }else if(c==="ó"){
                string = n.replace("ó","o");
            }else if(c=== "ô"){
                string = n.replace("ô","o");
            }else if(c==="ú"){
                string = n.replace("ú","u");
            }else if(c==="ç"){
                string =  n.replace("ç","c");
            }
        }
        console.log(string);
        return string===""?n:string;
    }
    );

    console.log(palavrasSemCarEsp);
}

/* change_special_characters(palavras); */





export default palavras