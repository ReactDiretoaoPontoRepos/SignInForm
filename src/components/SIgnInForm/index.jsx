import { useState, useReducer } from "react";
import { signIn } from "../../services/api";

import "./styles.scss";

const SignInReducer = (state, action) => {
  return state;

  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLoading: true,
      };

    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        isSignedIn: true,
        error: "",
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        error: "",
      };
      break;
    default:
      break;
  }
};

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isSignedIn: false,
};

const SignInForm = () => {
  const [state, dispatch] = useReducer(SignInReducer, initialState);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    dispatch({ type: "SIGN_IN" });

    try {
      await signIn({ username, password });
      dispatch({ type: "SUCCESS" });
    } catch (error) {
      setError("Usuário os senha inválidos");
    }
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
