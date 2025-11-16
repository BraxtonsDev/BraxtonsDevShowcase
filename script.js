function isWinter(){
    const date = new Date();

    if(date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1){ //months is js are [0 - 11]. 11 = dec, 0 = jan, 1 = feb
        return true;
    }else{
        return false;
    }
}

function createLeaf(){
    let leaf = document.createElement("div");

    let x = Math.floor(Math.random() * window.innerWidth);
    let r = Math.random();

    leaf.classList.add('leaf');

    if(isWinter()){
        leaf.innerHTML = `<img src="crackflake.png" alt="">`;
    }else{
        leaf.innerHTML = `<img src="leafsite.png" alt="">`;
    }

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