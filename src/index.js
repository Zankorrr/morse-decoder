const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = ""
    let x = 1
    for(let i = 0; i < (expr.length / 2); i++) {
        let charInBinary = expr.substr(10 * i, 10)
        if(charInBinary == "**********") {
            result += " "
            continue
        } else {
            let word = ""
            for(let n = 0; n < (charInBinary.length / 2); n++) {
                let char = ""
                let charInMorse = charInBinary.substr(2 * n, 2)
                switch(charInMorse){
                    case "10":
                        char += "."
                        break
                    case "11":
                        char += "-"
                        break
                }
                word += char
            }
            if(word) {
                result += MORSE_TABLE[word]
            }
        }
    }
    return result
}

module.exports = {
    decode
}