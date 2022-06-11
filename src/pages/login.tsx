import React from "react";
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
      Faça login agora! <br />
      <button onClick={() => signIn("google")}>Entrar</button>
    </S.Container>
  );
}
