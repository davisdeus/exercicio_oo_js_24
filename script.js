class Functionary {
    constructor(name ) {
        this._name = this._capitalize(name);
    }

    set name(string) {
        this._name = this._capitalize(string);
    }

    get name() {
        return this._name;
    }

    _capitalize(string) {
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    }

}

class Developer extends Functionary {
    constructor(name, codeLanguage) {
        super(name);
        this.codeLanguage = codeLanguage;
    }

    code() {
        return `${this._name} Esta codando em ${this.codeLanguage}`

    }
}

class Designer extends Functionary {
    constructor(name, editores) {
        super(name);
        this.editores = editores;
    }
    code() {
        return `${this._name} Esta trabanhando com a ferramenta ${this.editores}`

    }
}


let davi = new Developer('davi', 'javaScript')
console.log(davi.code())

let david = new Developer('david', 'html css')
console.log(david.code())

let elena = new Designer('elena', 'Photoshop')
console.log(elena.code())

let carou = new Designer('davi', 'Sketch')
console.log(carou.code())
