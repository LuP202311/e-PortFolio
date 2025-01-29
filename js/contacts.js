const textes = document.querySelectorAll(".contact > p")

textes.forEach(texte => texte.addEventListener("click", (evt) => {
    evt.preventDefault()
    navigator.clipboard.writeText(texte.innerText).then(()=>{
        alert("Texte copié")
    })
}))

textes.forEach(texte => texte.addEventListener("mouseover",()=>{
    texte.style.cursor="copy"
    texte.addEventListener("mouseout", () =>{
        texte.style.cursor="default"
    })
}))