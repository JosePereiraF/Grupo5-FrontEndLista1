const btnInfoCel2 = document.querySelector("#btnCel2");
btnInfoCel2.addEventListener("click", () =>{
    infoCelular(btnInfoCel2)
});

const btnInfoCel1 = document.querySelector("#btnCel1");
btnInfoCel1.addEventListener("click", () => {
  infoCelular(btnInfoCel1);
});

const btnInfoCel3 = document.querySelector("#btnCel3");
btnInfoCel3.addEventListener("click", () => {
    infoCelular(btnInfoCel3);
  });

const carrinho1 = document.querySelector("#carrinho1");
carrinho1.addEventListener("click", ()=>{
    addCarrinho(carrinho1);
});
const carrinho2 = document.querySelector("#carrinho2");
carrinho2.addEventListener("click", ()=>{
    addCarrinho(carrinho2);
})
const carrinho3 = document.querySelector("#carrinho3");
carrinho3.addEventListener("click",()=>{
    addCarrinho(carrinho3)
}
)
//add produtos ao carrinho talvez redirecionar quando clicar mas por enquanto só add no carrinho
//tentar fazer o carrinho funcionar como uma lista e verificar se todos os produtos chegam
//quando adicionar um produto eu tenho que pegar a lista e depois adicionar pq senao vou excluir as outras coisas

//inforamções para o carrinho:
/*
1-H1 - Nome do smartphone
2- 1 card onde espera uma imagem
3- card onde eu vou colocar uma UL com as infos do cel resumidas
4- card onde espera 2 parametros o preço do cel avista e parcelado


    Câmera Principal 48MP
    Câmera Frontal 24MP
    Processador Octa-Core 3.4GHz

*/
function addCarrinho(key){
    if (key == carrinho1) {
        const nome = "Smartphone z";
        const cImagem = document.querySelector('.carousel-item.active img[src="../imagens/Galaxy-A05s.png"]')
        const img =  cImagem.getAttribute('src');
        const valor = 1000.00;
        const camera = "Traseira 50 mp, Frontal 13mp ";
        const chipset = "Snapdragon 680 4G Qualcomm SM6225 ";
        const ram = "6 GB";
        const produto ={
            nome,
            img,
            valor,
            camera,
            chipset,
            ram,
        };
        localStorage.setItem("carrinho",JSON.stringify(produto));
    }else if(key == carrinho2){
        const nome = "Smartphone y";
        const cImagem = document.querySelector('.carousel-item.active img[src="../imagens/Galaxy-A25.png"]')
        const img =  cImagem.getAttribute('src');
        const valor = 2000.00;
        const camera = "Traseira 50 mp, Frontal 13mp ";
        const chipset = "SAMSUNG Exynos 1280";
        const ram = "6 GB";
        const produto = {
            nome,
            img,
            valor,
            camera,
            chipset,
            ram,
        }
        localStorage.setItem("carrinho", JSON.stringify(produto));

    }else if(key == carrinho3){
        const nome = "Smartphone x"
        const cImagem = document.querySelector('.carousel-item.active img[src="../imagens/Galaxy_A55.png"]')
        const img =  cImagem.getAttribute('src');
        const valor = 3000.00;
        const camera = "Traseira 50 mp, Frontal 32mp ";
        const chipset = "SAMSUNG Exynos 1480";
        const ram = "8 GB";
        const produto = {
            nome,
            img,
            valor,
            camera,
            chipset,
            ram,
        }
        localStorage.setItem("carrinho", JSON.stringify(produto));
    }
}

function infoCelular(key) {

  if (key == btnInfoCel1) {
    
    const nome = "Smartphone z";
    const cImagem = document.querySelector('.carousel-item.active img[src="../imagens/Galaxy-A05s.png"]')
    const img =  cImagem.getAttribute('src');
    const valor = 1000.00;
    const processador = "4x 2.4 GHz Kryo 265 Gold + 4x 1.9 GHz Kryo 265 Silver";
    const chipset = "Snapdragon 680 4G Qualcomm SM6225 ";
    const armazenamento = "128 GB";
    const ram = "6 GB";
    const tamTela = "6.7 pol";
    const camera = "Traseira 50 mp, Frontal 13mp ";


    const produto= {
        nome,
        img,
        valor,
        processador,
        chipset,
        armazenamento,
        ram,
        tamTela,
        camera,
    }
    localStorage.setItem("Produto",JSON.stringify(produto));
  } else if(key == btnInfoCel2){
    const nome = "Smartphone y";
    const cImagem = document.querySelector('.carousel-item.active img[src="../imagens/Galaxy-A25.png"]')
    const img =  cImagem.getAttribute('src');
    const valor = 2000.00
    const processador = "2x 2.4 GHz Cortex-A78 + 6x 2.0 GHz Cortex-A55";
    const chipset = "SAMSUNG Exynos 1280";
    const armazenamento = "128 GB";
    const ram = "6 GB";
    const tamTela = "6.5 pol";
    const camera = "Traseira 50 mp, Frontal 13mp ";

    const produto= {
        nome,
        img,
        valor,
        processador,
        chipset,
        armazenamento,
        ram,
        tamTela,
        camera,
    }
    localStorage.setItem("Produto",JSON.stringify(produto));
    
  }else if(key == btnInfoCel3 ){
    const nome = "Smartphone x";
    const cImagem = document.querySelector('.carousel-item.active img[src="../imagens/Galaxy_A55.png"]')
    const img =  cImagem.getAttribute('src');
    const valor = 3000.00
    const processador = "4x 2.75 GHz Cortex-A78 + 4x 2.0 GHz Cortex-A55";
    const chipset = "SAMSUNG Exynos 1480";
    const armazenamento = "256 GB";
    const ram = "8 GB";
    const tamTela = "6.6 pol";
    const camera = "Traseira 50 mp, Frontal 32mp ";


    const produto= {
        nome,
        img,
        valor,
        processador,
        chipset,
        armazenamento,
        ram,
        tamTela,
        camera,
    }
    localStorage.setItem("Produto",JSON.stringify(produto));
  }
}
