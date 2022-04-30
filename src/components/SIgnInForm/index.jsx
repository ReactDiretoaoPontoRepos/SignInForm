import React from "react";
import "./styles.scss";

const SignInForm = () => {
  return (
    <main>
      <form>
        <h1>Autenticação</h1>
        <p className="error">Usuário os senha inválido</p>

        <label>
          <p> Nome de usuário</p>
          <input type="" />
        </label>

        <label>
          <p>Senha</p>
          <input password="" />
        </label>

        <footer>
          <button type="submit">Entrar</button>
        </footer>
      </form>
    </main>
  );
};

export default SignInForm;
