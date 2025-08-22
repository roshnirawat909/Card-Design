let main = document.querySelector("main");
let form = document.querySelector("form");
let inp = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");


    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inp[0].value);
    profile.appendChild(img);

    card.appendChild(profile);

    let h1 = document.createElement("h1");
    h1.textContent = inp[1].value;
    card.appendChild(h1);

    let h3 = document.createElement("h3");
    h3.textContent = inp[2].value;
    card.appendChild(h3);

    let p = document.createElement("p");
    p.textContent = inp[3].value;
    card.appendChild(p);

     main.appendChild(card);

    inp.forEach((val) => {
        if (val.type !== "submit") {
            val.value = "";
        }
    })
});



