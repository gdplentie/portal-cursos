import { useState } from "react";

import { useNavigate } from "react-router-dom"

export default function Cadastro() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        senha: "",
        curso: "",
        confirmar: ""
    });
    const [erros, setErros] = useState({});
    const [sucesso, setSucesso] = useState("");

    const navigate = useNavigate();

    function alterar(evento) {
        const { name, value } = evento.target;
        setForm((anterior) => ({ ...anterior, [name]: value }));
        setErros((anterior) => ({ ...anterior, [name]: "" }));
        setSucesso("");
    }

    function validar() {
        const novosErros = {};

        if (form.nome.trim().length < 3) {
            novosErros.nome = "Informe pelo menos 3 caracteres.";
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
        if (!emailValido) {
            novosErros.email = "Digite um e-mail válido.";
        }

        if(!form.curso){
            novosErros.curso="Por favor selecione seu curso."
        }

        if (form.senha.length < 6) {
            novosErros.senha = "Use pelo menos 6 caracteres.";
        }

        if (form.confirmar !== form.senha || !form.confirmar) {
            novosErros.confirmar = "As senhas devem ser iguais.";
        }

        return novosErros;
    }

    function enviar(evento) {
        evento.preventDefault();
        const novosErros = validar();
        setErros(novosErros);

        if (Object.keys(novosErros).length === 0) {
            setSucesso(`Sua Conta Foi Criada Com Sucesso! Retornando...`);
            setTimeout(function(){navigate("/")},1000)
            setForm({ nome: "", email: "", senha: "", confirmar: "", curso: ""});
            document.getElementById("curso").value=undefined
        }
    }

    return (
        <section>
            <h1>Cadastro de usuário</h1>
            <p>Preencha todos os campos para continuar.</p>

            <form onSubmit={enviar} noValidate>
                <label htmlFor="nome">Nome completo</label>
                <input
                    id="nome"
                    name="nome"
                    value={form.nome}
                    onChange={alterar}
                    aria-invalid={!!erros.nome}
                    aria-describedby={erros.nome ? "erro-nome" : undefined}
                />
                {erros.nome && <small id="erro-nome" className="erro">{erros.nome}</small>}

                <label htmlFor="email">E-mail</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={alterar}
                    aria-invalid={!!erros.email}
                    aria-describedby={erros.email ? "erro-email" : undefined}
                />
                {erros.email && <small id="erro-email" className="erro">{erros.email}</small>}

                <label htmlFor="curso">Curso De Interesse?</label>
                <select
                    id="curso"
                    name="curso"
                    onChange={alterar}
                    aria-invalid={!!erros.curso}
                    aria-describedby={erros.curso ? "erro-curso" : undefined}
                >
                    <option selected disabled hidden>Selecione...</option>
                    <option value="0">Medicina</option>
                    <option value="1">Engenharia da Computação</option>
                    <option value="2">Pescaria</option>
                    <option value="3">Letras</option>
                </select>
                {erros.curso && <small id="erro-senha" className="erro">{erros.curso}</small>}

                <label htmlFor="senha">Senha</label>
                <input
                    id="senha"
                    name="senha"
                    type="password"
                    value={form.senha}
                    onChange={alterar}
                    aria-invalid={!!erros.senha}
                    aria-describedby={erros.senha ? "erro-senha" : undefined}
                />
                {erros.senha && <small id="erro-senha" className="erro">{erros.senha}</small>}

                <label htmlFor="confirmar">Confirmar senha</label>
                <input
                    id="confirmar"
                    name="confirmar"
                    type="password"
                    value={form.confirmar}
                    onChange={alterar}
                    aria-invalid={!!erros.confirmar}
                    aria-describedby={erros.confirmar ? "erro-confirmar" : undefined}
                />
                {erros.confirmar && <small id="erro-confirmar" className="erro">{erros.confirmar}</small>}

                <button type="submit">Cadastrar</button>
            </form>

            {sucesso && <p className="sucesso" role="status">{sucesso}</p>}
        </section>
    );
}