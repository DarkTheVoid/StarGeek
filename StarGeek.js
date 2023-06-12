var Perfil = []
Perfil = JSON.parse(localStorage.getItem('StarGeekBC'))

if (Perfil == null) {
    Perfil = []
}

var ListaMidias = []
ListaMidias = JSON.parse(localStorage.getItem('LIstaMIdias'))

if (ListaMidias == null) {
    ListaMidias = []
}

function BotaoCadastrar() {
    var Nome = document.getElementById('Nome').value
    var Usuario = document.getElementById('email').value
    var Senha = document.getElementById('Senha').value
    var Senha2 = document.getElementById('senhaConfirm').value

    if (Nome == "" || Usuario == "" || Senha == "" || Senha2 == "") {
        alert('Preencha todos os campos')
        exit
    }
    if (Senha != Senha2) {
        alert('Senha incorreta')
        exit
    }
    var objetUsuario = {
        nome: Nome,
        usuario: Usuario,
        senha: Senha
    }

    Perfil.push(objetUsuario)
    localStorage.setItem('StarGeekBC', JSON.stringify(Perfil))

    alert('Usuário cadastrado com sucesso!')
    location.href = "login.html"
}


function botaoLogin() {
    var LoginUsuario = document.getElementById('NomeLogin').value
    var LoginSenha = document.getElementById('SenhaLogin').value
    var encontrado = false

    Perfil.forEach(item => {
        if (LoginUsuario == item.usuario && LoginSenha == item.senha) {
            encontrado = true

        }else {
            encontrado = false
        }
    })

    if (encontrado) {
        location.href = 'pag-principal.html'
    } else {
        alert("Usuário ou senha inválidos")

    }
}

function excluirusuario(pos) {
    if (confirm('Deseja realmente excluir este usuário?')) {
        Perfil.splice(pos, 1)
        localStorage.setItem('BDcadastros', JSON.stringify(Perfil))
        ExibirCadastros()
    }
}
// ! vernelho
// ? azul
// * verde
// todo laranja

var ListaMidias = []
ListaMidias = JSON.parse(localStorage.getItem('LIstaMIdias'))
if (ListaMidias == null) {
    ListaMidias = []
}

function validarCadastro(Nome, Imagem) {
    if (Nome == '' || Imagem == '') {
        alert('Verifique os dados cadastrados. Não pode ter campos vazio.')
        return false
    }
    return true
}




/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
function botaoCadasMidia() {
    var Nome = document.getElementById('nome').value
    var Imagem = document.getElementById('img').value
    var Categoria = document.getElementById('Categoria').value


    if (validarCadastro(Nome,Imagem) == false) {
        return
    }

    var objMidia = {
        Titulo: Nome,
        Foto: Imagem,
        Categoriamid: Categoria
    }

    ListaMidias.push(objMidia)
    localStorage.setItem('LIstaMIdias', JSON.stringify(ListaMidias))

    alert('mídia cadastrada!')
    location.href = 'pag-principal.html'
}

function carregarImagem() {
    document.getElementById('imgage').src = document.getElementById('img').value
}

function exibirFilmesVetor(){
    document.getElementById('midiaCadastradas').innerHTML = ``

    for (var i in ListaMidias){
        document.getElementById('midiaCadastradas').innerHTML = 
        `
        <img src=" ${ListaMidias[i].Foto} " class='img'>
        <p> ${ListaMidias[i].Titulo} </p>
        `
    }
}

