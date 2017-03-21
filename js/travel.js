var app = {
    counter: 0,
    //images taken from http://travel.nationalgeographic.com/travel/travel-photos/
    images: ['0', 'lighthouse', 'fishermen', 'color park', 'wind turbines', 'white', 'cloudland', 'stream'],
    change: false,
    updateImage: function() {
        if (this.change) {
            var image = document.getElementById("image");
            var text = document.getElementById("changeText");
            this.counter = this.counter + 1;
            if (this.counter > 7) {
                this.counter = 1;
            }
            image.src = "images/" + this.counter + ".jpg";

            console.log('changed to image#' + this.counter);
            this.updateText(text, this.counter);
        } else {
            console.log('not allowed for now!');
        }
    },
    updateText: function(el, num) {
        //just to show the correct approach from security side,
        //direct pushing to element innerHTML is not advisable!
        var txt = document.createTextNode(this.images[num]);
        el.innerText = txt.textContent;
    },
    toggleChange: function() {
        this.change = !this.change;
    }

};
