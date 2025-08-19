class GrimpanMenuElementBuilder {
    btn;
    constructor() { }
    build() {
        return this.btn;
    }
}
export class GrimpanMenuElement {
    menu;
    name;
    constructor(menu, name) {
        this.menu = menu;
        this.name = name;
    }
}
export class GrimpanMenuInput extends GrimpanMenuElement {
    onChange;
    value;
    constructor(menu, name, onChange, value) {
        super(menu, name);
        this.onChange = onChange;
        this.value = value;
    }
    draw() {
        const input = document.createElement("input");
        input.title = this.name;
        input.type = "color";
        if (this.onChange) {
            input.addEventListener("change", this.onChange.bind(this));
        }
        this.menu.dom.append(input);
    }
    static Builder = class GrimpanMenuInputBuilder extends GrimpanMenuElementBuilder {
        btn;
        constructor(menu, name) {
            super();
            this.btn = new GrimpanMenuInput(menu, name);
        }
        setOnChange(onChange) {
            this.btn.onChange = onChange;
            return this;
        }
        setValue(value) {
            this.btn.value = value;
            return this;
        }
    };
}
export class GrimpanMenuBtn extends GrimpanMenuElement {
    onClick;
    active;
    constructor(menu, name, onClick, active) {
        super(menu, name);
        this.onClick = onClick;
        this.active = active;
    }
    draw() {
        const btn = document.createElement("button");
        btn.textContent = this.name;
        if (this.onClick) {
            btn.addEventListener("click", this.onClick.bind(this));
        }
        this.menu.dom.append(btn);
    }
    static Builder = class GrimpanMenuBtnBuilder extends GrimpanMenuElementBuilder {
        btn;
        constructor(menu, name) {
            super();
            this.btn = new GrimpanMenuBtn(menu, name);
        }
        setOnClick(onClick) {
            this.btn.onClick = onClick;
            return this;
        }
        setActive(active) {
            this.btn.active = active;
            return this;
        }
    };
}
