// Vetor global para simular o banco de dados
let lista_usuarios = [];

function cadastrar() {
    let nome = input_nome.value;
    let email = input_email.value;
    let senha = input_senha.value;
    let confirmacao = input_confirmar_senha.value;

    if (nome == "" || email == "" || senha == "") {
        div_mensagem.innerHTML = "Preencha todos os campos!";
        return;
    }

    if (senha != confirmacao) {
        div_mensagem.innerHTML = "As senhas não coincidem!";
        return;
    }

    // Criando um objeto usuário e guardando no VETOR
    let novoUsuario = {
        nomeServer: nome,
        emailServer: email,
        senhaServer: senha
    };

    lista_usuarios.push(novoUsuario);
    
    div_mensagem.innerHTML = "Cadastro realizado com sucesso!";
}

function entrar() {
    let email = input_login_email.value;
    let senha = input_login_senha.value;

    let acessoPermitido = false;
    
    // Usando FOR para percorrer o VETOR e validar o login
    for (let i = 0; i < lista_usuarios.length; i++) {
        let usuarioAtual = lista_usuarios[i];
        
        if (usuarioAtual.emailServer == email && usuarioAtual.senhaServer == senha) {
            acessoPermitido = true;
            break;
        }
    }

    if (acessoPermitido) {
        alert("Login realizado! Bem-vindo ao Performance Lab.");
    } else {
        div_mensagem_login.innerHTML = "E-mail ou senha incorretos.";
    }
}
