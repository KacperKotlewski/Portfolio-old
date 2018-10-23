class Mobile {
    constructor() {
        this.menu;
        this.content;
    }

    SetMenu(element) {
        this.menu = element;
    }

    SetContent(element) {
        this.content = element;
    }

    GetMenu() {
        return this.menu;
    }

    GetContent() {
        return this.content;
    }
}