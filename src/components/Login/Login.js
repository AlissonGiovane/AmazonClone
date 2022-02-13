import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const logar = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, senha)
            .then((auth) => {
                if (auth) {
                    history.push("/");
                }
            })
            .catch((err) => alert(err.message));
    };

    const registrar = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, senha)
            .then((auth) => {
                if (auth) {
                    history.push("/");
                }
            })
            .catch((err) => alert(err.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon Logo"
                />
            </Link>

            <div className="login_container">
                <h1>Fazer Login</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5>Senha</h5>
                    <input type='password' value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <button type='submit' className="login_botao_logar"
                        onClick={logar}
                    >Fazer Login</button>

                    <p>
                        Ao continuar, você concorda com as Condições de Uso da Amazon. Por favor verifique a Notificação de Privacidade, Notificação de Cookies e a Notificação de Anúncios Baseados em Interesse.
                    </p>

                    <button className="login_botao_registrar"
                        onClick={registrar}
                    >Criar sua conta da Amazon</button>
                </form>

            </div>

        </div>

    );
}
export default Login;
