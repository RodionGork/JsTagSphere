var main = {

params: {
        colorMin: "#0000FF",
        colorMax: "#FF0000",
        colorBgr: "#FFFFFF",
        interval: 50,
        fontSize: 12,
        fontShift: 4,
        opaque: 0.3
},

init: function() {
    this.setupBlocks();
    this.setupButtons(this.params);
    
    this.makeCloud();
    
    setInterval(function() {
        var t = main.clouder.getRenderingTime();
        document.getElementById("render-time").innerHTML = Math.floor(t);
    }, 1000);
    
    setTimeout("main.statistics();", 3000);
}, // init

makeCloud: function() {
    var clouder = document.getElementById("clouder");

    var attrs = {
        container: clouder,
        tags: this.createTags()
    };
    
    for (var i in this.params) {
        attrs[i] = this.params[i];
    } // for
    
    if (this.clouder) {
        this.clouder.kill();
    } // if
    
    this.clouder = new Clouder(attrs);
    
}, // makeCloud

createTags: function() {
    return [
            {text: "George<br/>Washington", id: "1789-1797", weight: 0.5},
            {text: "John<br/>Adams", id: "1797-1801", weight: 0.5},
            {text: "Thomas<br/>Jefferson", id: "1801-1809", weight: 0.5},
            {text: "James<br/>Madison", id: "1809-1817", weight: 0.5},
            {text: "James<br/>Monroe", id: "1817-1825", weight: 0.5},
            {text: "John<br/>Quincy<br/>Adams", id: "1825-1829", weight: 0.5},
            {text: "Andrew<br/>Jackson", id: "1829-1837", weight: 0},
            {text: "Martin<br/>Van Buren", id: "1837-1841", weight: 0},
            {text: "William<br/>Harrison", id: "1841-1841", weight: 0.5},
            {text: "John<br/>Tyler", id: "1841-1845", weight: 0.5},
            {text: "James<br/>Polk", id: "1845-1849", weight: 0},
            {text: "Zachary<br/>Taylor", id: "1849-1850", weight: 0.5},
            {text: "Millard<br/>Fillmore", id: "1850-1853", weight: 0.5},
            {text: "Franklin<br/>Pierce", id: "1853-1857", weight: 0},
            {text: "James<br/>Buchanan", id: "1857-1861", weight: 0},
            {text: "Abraham<br/>Lincoln", id: "1861-1865", weight: 1},
            {text: "Andrew<br/>Johnson", id: "1865-1869", weight: 0},
            {text: "Ulisses<br/>Grant", id: "1869-1877", weight: 1},
            {text: "Rutherford<br/>Hayes", id: "1877-1881", weight: 1},
            {text: "James<br/>Garfield", id: "1881-1881", weight: 1},
            {text: "Chester<br/>Arthur", id: "1881-1885", weight: 1},
            {text: "Grover<br/>Cleveland", id: "1885-1889, 1893-1897", weight: 0},
            {text: "Benjamin<br/>Harrison", id: "1889-1893", weight: 1},
            {text: "William<br/>McKinley", id: "1897-1901", weight: 1},
            {text: "Theodore<br/>Roosevelt", id: "1901-1909", weight: 1},
            {text: "William<br/>Taft", id: "1909-1913", weight: 1},
            {text: "Woodrow<br/>Wilson", id: "1913-1921", weight: 0},
            {text: "Warren<br/>Harding", id: "1921-1923", weight: 1},
            {text: "Calvin<br/>Coolidge", id: "1923-1929", weight: 1},
            {text: "Herbert<br/>Hoover", id: "1929-1933", weight: 1},
            {text: "Franklin<br/>Roosevelt", id: "1933-1945", weight: 0},
            {text: "Harry<br/>Truman", id: "1945-1953", weight: 0},
            {text: "Dwight<br/>Eisenhower", id: "1953-1961", weight: 1},
            {text: "John<br/>Kennedy", id: "1961-1963", weight: 0},
            {text: "Lyndon<br/>Johnson", id: "1963-1969", weight: 0},
            {text: "Richard<br/>Nixon", id: "1969-1974", weight: 1},
            {text: "Gerald<br/>Ford", id: "1974-1977", weight: 1},
            {text: "Jimmy<br/>Carter", id: "1977-1981", weight: 0},
            {text: "Ronald<br/>Reagan", id: "1981-1989", weight: 1},
            {text: "George<br/>Bush Sr.", id: "1989-1993", weight: 1},
            {text: "Bill<br/>Clinton", id: "1993-2001", weight: 0},
            {text: "George<br/>Bush Jr.", id: "2001-2009", weight: 1},
            {text: "Barack<br/>Obama", id: "2009-...", weight: 0}
    ];
}, // createTags

setupBlocks: function() {
    var w = Math.max(window.innerWidth, document.body.clientWidth), h = Math.max(window.innerHeight, document.body.clientHeight);
    var clouder = document.getElementById("clouder");
    var header = document.getElementById("header");
    var footer = document.getElementById("footer");
    var links = document.getElementById("links");
    var settings = document.getElementById("settings");
    
    //clouder.style.border = "1px solid black";
    clouder.style.position = "absolute";
    clouder.style.width = asPixels(w * 4 / 6);
    clouder.style.height = asPixels(h * 4 / 6);
    clouder.style.left = asPixels(w / 6);
    clouder.style.top = asPixels(h / 6);

    header.style.position = "absolute";
    header.style.width = asPixels(w);
    header.style.height = asPixels(h / 6);
    header.style.left = asPixels(0);
    header.style.top = asPixels(0);
    
    links.style.position = "absolute";
    links.style.width = asPixels(w / 6);
    links.style.height = asPixels(5 * h / 6);
    links.style.left = asPixels(0);
    links.style.top = asPixels(h / 6);
    
    settings.style.position = "absolute";
    settings.style.width = asPixels(w / 6);
    settings.style.height = asPixels(5 * h / 6);
    settings.style.left = asPixels(5 * w / 6);
    settings.style.top = asPixels(h / 6);
    
    footer.style.position = "absolute";
    footer.style.width = asPixels(4 * w / 6);
    footer.style.height = asPixels(h / 6);
    footer.style.left = asPixels(w / 6);
    footer.style.top = asPixels(5 * h / 6);
    
}, // setupBlocks

setupButtons: function(obj) {
    var div = document.getElementById("buttons");
    var text = "";
    
    for (var i in obj) {
        text += i + ":<br/>&nbsp;&nbsp;&nbsp;<input type=\"button\" id=\"btn-" + i + "\"value=\""
                + obj[i] + "\" onclick=\"main.button('" + i + "');\"/><br/>";
    } // for
    
    div.innerHTML = text;
}, // setupButtons

button: function(id) {
    var value = null;
    
    if (id == "colorMin" || id == "colorMax" || id == "colorBgr") {
        value = prompt("Color as #XXXXXX", this.params[id]);
        if (value == null) {
            return;
        } // if
        if (!/^\#[0-9A-Za-z]{6}$/.test(value)) {
            alert("Wrong color format!");
            return;
        } // if
    } else if (id == "interval" || id == "fontSize" || id == "fontShift") {
        var restr = {interval:[10, 500], fontSize:[5, 30], fontShift:[0, this.params.fontSize - 1]};
        value = prompt("Enter new value (" + restr[id][0] + " - " + restr[id][1] + "):", this.params[id]);
        if (value == null) {
            return;
        } // if
        value = parseInt(value);
        if (value < restr[id][0] || value > restr[id][1]) {
            alert("Wrong number!");
            return;
        } // if
    } else if (id == "opaque") {
        value = prompt("Enter new value (0.0 - 1.0):", this.params[id]);
        if (value == null) {
            return;
        } // if
        value = parseFloat(value);
        if (value < 0.0 || value > 1.0) {
            alert("Wrong value!");
            return;
        } // if
    } // if

    this.params[id] = value;
    document.getElementById("btn-" + id).value = value;
    this.makeCloud();
}, // button


statistics: function() {
    var time = new Date().getTime();
    var agent = navigator.userAgent.match(/firefox|msie|chrome|opera|safari/i);
    if (agent == null) {
        agent = "other";
    } else {
        agent = agent[0].toLowerCase();
    } // else
    
    if (/rodion$/.test(document.URL)) {
        alert("Hi, People!\n" + time + "\n" + agent);
        return;
    } // if
    
    $.ajax({
        url: "./cgi-bin/visitors.py?time=" + time + "&agent=" + agent,
        success: function(text) {window.main.info = text;}
    });
    
} // statistics

};
