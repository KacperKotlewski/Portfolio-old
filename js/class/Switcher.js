function VisibilityElement(mobile_object) {
    this.mobile = mobile_object;

    this.SwitchBetweenMenuAndContent = function() {        
        this.SwitchVisibilityOfMenu();
        this.SwitchVisibilityOfContent();
    }

    this.SwitchVisibilityOfMenu = function() {
        this.SwitchVisibility(this.mobile.GetMenu());
    }

    this.SwitchVisibilityOfContent = function() {
        this.SwitchVisibility(this.mobile.GetContent());
    }

    this.MakeMenuVisable = function() {
        this.MakeVisable(this.mobile.GetMenu());
    }
    this.MakeMenuInvisable = function() {
        this.MakeInvisable(this.mobile.GetMenu());
    }

    this.MakeContentVisable = function() {
        this.MakeVisable(this.mobile.GetContent());
    }
    this.MakeContentInvisable = function() {
        this.MakeInvisable(this.mobile.GetContent());
    }

    this.CheckVisibilityOfMenu = function() {
        return this.CheckVisibility(this.mobile.GetMenu());
    }

    this.CheckVisibilityOfContent = function() {
        return this.CheckVisibility(this.mobile.GetContent());
    }

    this.CheckVisibility = function(element) {
        if(element.style.display === "none") {
            return false;
        } else return true;
    }
    
    this.SwitchVisibility = function(element) {
        if(this.CheckVisibility(element)){
            this.MakeInvisable(element);
        } else {
            this.MakeVisable(element);
        }
    }

    this.MakeVisable = function(element) {
        element.style.display = "block";
    }

    this.MakeInvisable = function(element) {
        element.style.display = "none";
    }
}