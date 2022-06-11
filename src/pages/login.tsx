import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

import * as S from "@styles/pages/login";

export default function Login() {
  const { data: session } = useSession();
  const route = useRouter();

  if (session) {
    route.push("/dashboard");
  }

  return (
    <S.Container>
      <S.Content>
        <h1>
          3C
          <br />
          <span>Controle Cartão de Créditos</span>
        </h1>
        <button onClick={() => signIn("google")}>
          <FcGoogle size={20} />
          Entrar com Google
        </button>
      </S.Content>
    </S.Container>
  );
}
