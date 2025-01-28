const cartes = document.querySelectorAll(".card")

    cartes.forEach(carte => carte.addEventListener("mouseover", () => {
        carte.style.width = "25em"
        carte.addEventListener("mouseout", () => {
            carte.style.width = "18em"
        })
    })
    )

