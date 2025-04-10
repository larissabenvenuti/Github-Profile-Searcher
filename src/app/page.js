"use client";

import React, { useState } from "react";
import {
  Container,
  Title,
  GitHubLogo,
  SearchBox,
  Input,
  Button,
  ErrorBox,
} from "@/styles/HomeStyles";
import UserCard from "@/components/UserCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const buscarUsuario = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("Usuário não encontrado");
      const data = await response.json();
      setUser(data);
      setError(false);
    } catch {
      setUser(null);
      setError(true);
    }
  };

  return (
    <Container>
      <Title>
        <GitHubLogo src="/assets/images/logo-github.png" alt="GitHub" />
        Perfil <strong>GitHub</strong>
      </Title>

      <SearchBox>
        <Input
          type="text"
          placeholder="Digite um usuário do Github"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button onClick={buscarUsuario}>
          <FontAwesomeIcon icon={faSearch} color="white" />
        </Button>
      </SearchBox>
      {error && (
        <ErrorBox>
          Nenhum perfil foi encontrado com esse nome de usuário.
          <br />
          Tente novamente.
        </ErrorBox>
      )}

      {user && !error && <UserCard user={user} />}
    </Container>
  );
}
