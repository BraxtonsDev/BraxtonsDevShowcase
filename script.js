function createLeaf(){
    let leaf = document.createElement("div");

    let x = Math.floor(Math.random() * window.innerWidth);
    let r = Math.random();

    leaf.classList.add('leaf');
    leaf.innerHTML = `<img src="leafsite.png" alt="">`;
    leaf.style.left = x + "px";

    document.body.appendChild(leaf);
    console.log("dropping leaf!");

    if (r < 0.5) {
        leaf.style.animation = "fall 10s linear forwards";
    } else {
        leaf.style.animation = "evilfall 10s linear forwards";
    }

    setTimeout(() => { leaf.remove(); }, 10000);
}

function destroyLeaf(leaf){
    leaf.remove();
}

setInterval(createLeaf, 2000);