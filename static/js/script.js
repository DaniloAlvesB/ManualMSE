function detectar_mobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }

let celular = detectar_mobile();

if(celular == true){
    text_content.innerHTML = "";
    mobile_content.innerHTML = `
        <h3 class="m-2">Olá!</h3>
        <hr>
        <p class="mx-2">
            Neste manual você irá aprender a como realizar diversas funções que o nosso
            SISTEMA ESCOLA e o PORTAL DO ALUNO oferecem.
            Aprenderá também como proceder no seu primeiro acesso, o que é cada local de acesso,
            suas principais funcionalidades e recursos.<br>
            Espero que a nossa parceria seja de muito sucesso!
        </p>
    `;
}

function render_text(id){

    for(var i = 0; i < textos.length; i++){
        if(i == id){
            if(celular == false){
                text_content.innerHTML = textos[i][0]
                text_content.innerHTML += textos[i][1]
            }else{
                list_content.innerHTML = textos[i][0]
                list_content.innerHTML += textos[i][1]
            }
            break;
        }
    }

}

function reload_pag(){
    document.location.reload(true);
}

function pesq_prep(){
 
    list_content.innerHTML = `
    <div class="input-group mb-3">
        <input id="pesquisa_text" type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="pesquisar()">Pesquisar</button>
    </div>
    `;
}

function pesquisar(){

    var text = document.getElementById("pesquisa_text").value;

    for(var i = 0; i < textos.length; i++){

        if(textos[i][0].includes(text)){
            list_content.innerHTML += `
                <button class="card container-fluid p-1 text-left subtitle-manual" onclick="render_text(${i})">
                    ${textos[i][0]}
                </button>
            `
        }
    }

}