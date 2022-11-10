function add(){
    var addInput = document.querySelector('#addLista input');
    var blocoTarefas = document.querySelector('.blocoTarefas');

    if(addInput.value.length === 0){
        window.alert("[ERROR] TENTE NOVAMENTE!")
    }else{
        blocoTarefas.innerHTML += `
        <div class="tarefas">
            <span id="nomeDaTarefa">
            <input type="checkbox" id="ok">
            ${addInput.value}
            </span>
            
            <button class="deletar" onclick="del()"><strong>X</strong>
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        </div>
        `;
    }



}

function del(){
    var deletar = document.querySelector('.deletar');
    
}

