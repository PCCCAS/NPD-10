function qString() {
    if(window.location.search == "") {
        window.location.search = "?date=";
    }
}

window.onload = qString();