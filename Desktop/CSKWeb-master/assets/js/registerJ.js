var groupN = "";
var seasonN = "";
var typeN = "";
var schoolN = "";
function groupClicked() {
    groupN = arguments[0];
    seasonN = arguments[1];
    typeN = arguments[2];
    schoolN = arguments[3];
    (function (global) {
        global.localStorage.setItem("group", groupN);
        global.localStorage.setItem("season", seasonN);
        global.localStorage.setItem("type", typeN);
        global.localStorage.setItem("school", schoolN);
    }(window));
}

