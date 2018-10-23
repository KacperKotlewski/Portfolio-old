class Onloader {
    constructor() {
        this.mobile;
    }

    mobile(mobile_object) {
        this.mobile = mobile_object;
        mobile.SetMenu(document.getElementById("menu"));
        mobile.SetContent(document.getElementById("content"));
    }
}