function render_text(id){

    for(var i = 0; i < textos.length; i++){
        if(i == id){
            text_content.innerHTML = textos[i][0]
            text_content.innerHTML += textos[i][1]
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