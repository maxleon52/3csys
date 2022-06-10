import { useSession, signIn, signOut } from "next-auth/react";

import * as S from "@styles/pages/home";

const Home = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <S.Container>
        Você está logado como {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sair do sistema</button>
      </S.Container>
    );
  }
  return (
    <S.Container>
      Faça login agora! <br />
      <button onClick={() => signIn('google')}>Entrar</button>
    </S.Container>
  );
};

export default Home;
