var tabs = []

var active = 0

function getElements(){
    tabs = document.getElementsByClassName("scrolly")
    for(i = 0; i < tabs.length; i++){
        tabs[i].addEventListener("click", function(e){
            // console.log(this)
            if (this.innerHTML == "About"){
                active = 0
            }else if (this.innerHTML == "The Kids"){
                active = 1
            }else if (this.innerHTML == "Register"){
                active = 2
            }else if (this.innerHTML == "Meet the team!"){
                active = 3
            }
        })
    }

    setInterval(function(){
        // console.log(active)
        for(i = 0; i < tabs.length; i++){
            if (i == active){
                tabs[i].style.backgroundColor = "#ffffff"
                tabs[i].style.color = "#0c4196"
            }else{
                tabs[i].style.backgroundColor = "#0c4196"
                tabs[i].style.color = "white"
            }
        }
    }, 0.1)
}