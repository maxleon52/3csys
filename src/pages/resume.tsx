import { signOut, useSession } from "next-auth/react";
import { ReactNode } from "react";

interface ResumeProps {
  children?: ReactNode;
}

function Resume({}:ResumeProps) {
  const { data: session } = useSession();
  return (
    <>
      <h1>Resume</h1>
      Você está logado como {session?.user?.email} <br />
      <button onClick={() => signOut()}>Sair do sistema</button>
    </>
  );
}

export default Resume;
