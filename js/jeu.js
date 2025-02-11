const perso = document.querySelector("#personnage > img")
const div = document.querySelector("#jeu")
const obstacle = document.querySelector("#obstacle")

div.addEventListener("click",saut)

function saut(){
    if(!perso.classList.contains("animation")) {
        perso.classList.add("animation")

        setTimeout(()=>{
                perso.classList.remove("animation")
        }, 500)
    }

}

function score() {

}

function perdu() {

}