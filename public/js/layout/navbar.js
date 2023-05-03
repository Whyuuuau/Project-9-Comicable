fetch("/web/layout/navbar.html")
    .then(stream => stream.text())
    .then(text => define(text))

function define(html) {
    class MyNavbar extends HTMLElement {
        set value(value) {
            this._value = value;
            this.valueElement.innerText = this._value;
        }

        get value() {
            return this._value;
        }

        constructor() {
            super();
            this._value = 0;

            var shadow = this.attachShadow({mode: 'open'});
            shadow.innerHTML = html;
        }
    }
    var x = $("#bar");
    var y = $("#find");
    
    function bar() {
        if (x.css("display") == "none") {
            x.css("display","block");
            y.css("display","none");
        } else {
            x.css("display","none");
        }
    }
    
    function find() {
        if (y.css("display") === "none") {
            y.css("display","block");
            x.css("display","none");
        } else {
            y.css("display","none");
        }
    }

    customElements.define("my-navbar", MyNavbar);
}
