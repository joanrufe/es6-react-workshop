// Constants can be exported 
export const NEWLINE = "\n\n";

export class LoggerComponent {
    constructor({elemId} = {elemId: "root"}){
        this.$el = document.getElementById(elemId);
        this.$el.appendChild(document.createElement("pre"));
    }
    log(string){
        this.$el.firstElementChild.innerHTML += string + NEWLINE;
    }
    logOnClick(string, elem) {
        elem.addEventListener(
            "click",
            event => { // Using arrow functions this = LoggerComponent 
                       // using normal function this = HTMLButtonElement
                this.$el.firstElementChild.innerHTML += string;
            }
        );
    }
}
