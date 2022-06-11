import * as S from "@styles/pages/home";
import { signOut, useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <S.Container>
      <h1>Home do site</h1>
      Você está logado como {session?.user?.email} <br />
      <button onClick={() => signOut()}>Sair do sistema</button>
    </S.Container>
  );
};

export default Home;
