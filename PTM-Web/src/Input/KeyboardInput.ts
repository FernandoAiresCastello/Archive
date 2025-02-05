import { PTM } from "../PTM";

export class KeyboardInput {

    private ptm: PTM;
    private buffer: string[];
    private lastKey: string;

    constructor(ptm: PTM) {
        this.ptm = ptm;
        this.buffer = [];
        this.lastKey = "NONE";

        window.addEventListener("keydown", (e) => {
            this.onKeyDown(e);
        });
    }

    clearBuffer() {
        this.buffer = [];
    }

    clearLastKey() {
        this.lastKey = "NONE";
    }

    hasKey(key: string): boolean {
        return this.buffer.includes(key.toUpperCase());
    }

    hasAnyKey(): boolean {
        return this.buffer.length > 0;
    }

    getKey(): string {
        let key = this.buffer.pop();
        if (key === undefined) key = "NONE";
        return key;
    }

    getLastKeyPressed(): string {
        const key = this.lastKey;
        this.clearLastKey();
        return key;
    }

    private onKeyDown(e: KeyboardEvent) {
        
        let key = "";

        if (e.ctrlKey)          key += "CTRL+";
        if (e.shiftKey)         key += "SHIFT+";
        if (e.altKey)           key += "ALT+";

        switch (e.key) {

            case " ":           key += "SPACE"; break;
            case "ArrowRight":  key += "RIGHT"; break;
            case "ArrowLeft":   key += "LEFT"; break;
            case "ArrowUp":     key += "UP"; break;
            case "ArrowDown":   key += "DOWN"; break;
            case "End":         key += "END"; break;
            case "Home":        key += "HOME"; break;
            case "PageDown":    key += "PGDN"; break;
            case "PageUp":      key += "PGUP"; break;
            case "Enter":       key += "ENTER"; break;
            case "Insert":      key += "INS"; break;
            case "Delete":      key += "DEL"; break;
            case "Backspace":   key += "BS"; break;
            case "Escape":      key += "ESC"; break;
            case "Tab":         key += "TAB"; break;

            case "A": case "a": key += "A"; break;
            case "B": case "b": key += "B"; break;
            case "C": case "c": key += "C"; break;
            case "D": case "d": key += "D"; break;
            case "E": case "e": key += "E"; break;
            case "F": case "f": key += "F"; break;
            case "G": case "g": key += "G"; break;
            case "H": case "h": key += "H"; break;
            case "I": case "i": key += "I"; break;
            case "J": case "j": key += "J"; break;
            case "K": case "k": key += "K"; break;
            case "L": case "l": key += "L"; break;
            case "M": case "m": key += "M"; break;
            case "N": case "n": key += "N"; break;
            case "O": case "o": key += "O"; break;
            case "P": case "p": key += "P"; break;
            case "Q": case "q": key += "Q"; break;
            case "R": case "r": key += "R"; break;
            case "S": case "s": key += "S"; break;
            case "T": case "t": key += "T"; break;
            case "U": case "u": key += "U"; break;
            case "V": case "v": key += "V"; break;
            case "W": case "w": key += "W"; break;
            case "X": case "x": key += "X"; break;
            case "Y": case "y": key += "Y"; break;
            case "Z": case "z": key += "Z"; break;
            case "Ç": case "ç": key += "Ç"; break;
        
            case "0":           key += "0"; break;
            case "1":           key += "1"; break;
            case "2":           key += "2"; break;
            case "3":           key += "3"; break;
            case "4":           key += "4"; break;
            case "5":           key += "5"; break;
            case "6":           key += "6"; break;
            case "7":           key += "7"; break;
            case "8":           key += "8"; break;
            case "9":           key += "9"; break;

            case "+":           key += "+"; break;
            case "-":           key += "-"; break;
            case "*":           key += "*"; break;
            case "/":           key += "/"; break;
            case "=":           key += "="; break;
            case ".":           key += "."; break;
            case ",":           key += ","; break;
            case ";":           key += ";"; break;
            case "'":           key += "'"; break;
            case "[":           key += "["; break;
            case "]":           key += "]"; break;

            default:            return;
        }

        this.lastKey = key;
        this.buffer.push(key);
    }
}
