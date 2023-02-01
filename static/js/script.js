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

    `;
}

function render_text(id){

    for(var i = 0; i < textos.length; i++){
        if(i == id){
            if(celular == false){
                text_content.innerHTML = `<h4 class="m-2">${textos[i][0]}</h4><hr>`
                if(textos[i][3] != ""){
                    text_content.innerHTML += `
                    <a href="${textos[i][3]}" type="button" class="btn btn-primary mb-3" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                            <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                        </svg>
                        Vídeo explicativo
                    </a>
                    `
                }
                text_content.innerHTML += textos[i][1]
            }else{
                list_content.innerHTML = `<h4 class="m-2">${textos[i][0]}</h4><hr>`
                if(textos[i][3] != ""){
                    list_content.innerHTML += `
                    <a href="${textos[i][3]}" type="button" class="btn btn-primary mb-3" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                            <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                        </svg>
                        Vídeo explicativo
                    </a>
                    `
                }
                list_content.innerHTML += textos[i][1]
            }
            break;
        }
    }

}

function render_text_txt(txt){

    for(var i = 0; i < textos.length; i++){
        if(textos[i][0] == txt){
            if(celular == false){
                text_content.innerHTML = `<h4 class="m-2">${textos[i][0]}</h4><hr>`
                if(textos[i][3] != ""){
                    text_content.innerHTML += `
                    <a href="${textos[i][3]}" type="button" class="btn btn-primary mb-3" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                            <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                        </svg>
                        Vídeo explicativo
                    </a>
                    `
                }
                text_content.innerHTML += textos[i][1]
            }else{
                list_content.innerHTML = `<h4 class="m-2">${textos[i][0]}</h4><hr>`
                if(textos[i][3] != ""){
                    list_content.innerHTML += `
                    <a href="${textos[i][3]}" type="button" class="btn btn-primary mb-3" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                            <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                        </svg>
                        Vídeo explicativo
                    </a>
                    `
                }
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

    list_content.innerHTML = "";
    pesq_prep();

    for(var i = 0; i < textos.length; i++){

        if(textos[i][0].toLowerCase().includes(text.toLowerCase()) || textos[i][2].toLowerCase().includes(text.toLowerCase())){
            list_content.innerHTML += `
                <button class="card container-fluid p-1 text-left subtitle-manual" onclick="render_text(${i})">
                    ${textos[i][0]}
                </button>
            `
        }
    }

}