const carrinho = JSON.parse(localStorage.getItem("carrinho"));

// const divDescricao = document.querySelector(".descricao-smartphone");//ok
// const divImg = document.querySelector("#imagem-smartphone");//ok
// const title = document.querySelector("#titulo-smartphone");//ok
// const valorAvista = document.querySelector("#aVista");
// const valorAprazo = document.querySelector("#aPrazo");

// const img = document.createElement("img");
// img.src = carrinho.img;

// const h2 = document.createElement("h2");
// h2.textContent = carrinho.nome;

// const lista = document.createElement("ul");

// const info1 = document.createElement("li");
// info1.textContent = carrinho.camera;
// const info2 = document.createElement("li");
// info2.textContent = carrinho.chipset;
// const info3 = document.createElement("li");
// info3.textContent = carrinho.ram;

// const avista = document.createElement("p");
// const valorNumber =  Number(carrinho.valor);
// avista.textContent = "À vista: de R$"+ valorNumber+",00 por apenas R$"+(valorNumber*0.9)+",00";

// const parcelado = document.createElement("p");
// parcelado.textContent = "Apenas R$"+(valorNumber*1.2)+" em 12x. E você só começa a pagar em 60dias"

// lista.appendChild(info1);
// lista.appendChild(info2);
// lista.appendChild(info3);

// title.appendChild(h2);
// valorAprazo.appendChild(parcelado);
// valorAvista.appendChild(avista);
// divDescricao.appendChild(lista);
// divImg.appendChild(img);
//caixa onde esta o texto aumenta criar um div dentro dessa caixa e jogar as imagens dentro desssa div ai é some mexer no tam da imagem
const title = document.querySelector("#titulo-smartphone");
const h2 = document.createElement("h2");
const valorAvista = document.querySelector("#aVista");
const valorAprazo = document.querySelector("#aPrazo");
h2.textContent = "Carrinho";
title.appendChild(h2);
let total = 0;
carrinho.forEach((item)=>{
    const divDescricao = document.querySelector(".descricao-smartphone");//ok
    const divImg = document.querySelector("#imagem-smartphone");//ok
    const img = document.createElement("img");
    
    img.src = item.img;

    const valorNumber =  Number(item.valor);
    total += valorNumber;

    

   const lista = document.createElement("ul");

    const info1 = document.createElement("li");
    info1.textContent = item.camera;
    const info2 = document.createElement("li");
    info2.textContent = item.chipset;
    const info3 = document.createElement("li");
    info3.textContent = item.ram;
    lista.appendChild(info1);
    lista.appendChild(info2);
    lista.appendChild(info3);
    divDescricao.appendChild(lista);
    divImg.appendChild(img);

})
const parcelado = document.createElement("p");
parcelado.textContent = "Apenas R$"+(total*1.2)+" em 12x. E você só começa a pagar em 60dias"
const avista = document.createElement("p");
avista.textContent = "À vista: de R$"+ total+",00 por apenas R$"+(total*0.9)+",00";
valorAprazo.appendChild(parcelado);
valorAvista.appendChild(avista);

console.log(total);