import { useState } from "react";
import { signIn } from "../../services/api";

import "./styles.scss";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await signIn({ username, password });
      setError("");
      setIsSignedIn(true);
    } catch (error) {
      setError("Usuário os senha inválidos");
    }

    setIsLoading(false);
  };

  return (
    <main>
      {isSignedIn ? (
        <>
          <h1> Olá {username}</h1>
          <button
            onClick={() => {
              setIsSignedIn(false);
              setUsername("");
              setPassword("");
            }}
          >
            Sair
          </button>
        </>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <h1>Autenticação</h1>

          {error && <p className="error">{error}</p>}

          <label>
            <p> Nome de usuário</p>
            <input
              type="text"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </label>

          <label>
            <p>Senha</p>
            <input
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>

          <footer>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Autenticando..." : "Entrar"}
            </button>
          </footer>
        </form>
      )}
    </main>
  );
};

export default SignInForm;
