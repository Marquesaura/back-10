let db = {
    celebrantes: [],
    participantes: [],
    celebracoes:[]
};

function salvarDados(){
    localStorage.setItem('db', JSON.stringify(db))
}
function carregarDados(){
    const dados = localStorage.getItem('db');

    if (dados){
        db = JSON.parse(dados);
    }
}
function adicionarCelebrantes(){
    const nome = document.getElementById("celebranteNome").value;
    const nascimento = document.getElementById("celebranteNascimento").value
    const id = db.celebrantes.length + 1
    db.celebrantes.push((id, nome, nascimento));
    salvarDados();
    listarCelebrantes();
    listarParticipantes();
}
function adicionarParticipantes(){
    const nome = document.getElementById("participanteNome").value;
    const nascimento = document.getElementById("participanteNascimento").value
    const id = db.celebrantes.length + 1
    db.celebrantes.push((id, nome, nascimento));
    salvarDados();
    listarCelebrantes();
    listarParticipantes();
}
function adicionarCelebracao(){
    const data = document.getElementById("dataCelebracao").value
    const horario = document.getElementById("horarioCelebracao").value
    const id_celebrante = document.getElementById("celebranteCelebracao").value
    db.participantes.push({id, data, horario, id_celebrante})
    salvarDados()
    listarCelebracoes()
}
function listarCelebracoes(){
    let lista = "";
    db.celebracoes.forEach(c => {const celebrante = db.celebrantes.find(x => x.id == c.id_celebrante)?.nome || 'Desconhecido'; lista +=`<li>${c.data} - ${c.horario}- ${c.celebrante} <button onclick = 'excluirCelebracao(${c.id})'>Excluir</button><li>`;});
    document.getElementById("listaCelebracao").innerHTML = lista;
}