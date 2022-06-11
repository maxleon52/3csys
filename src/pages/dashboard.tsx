import { signOut, useSession } from "next-auth/react";
import { ReactNode } from "react";

interface DashboardProps {
  children?: ReactNode;
}

function Dashboard({}:DashboardProps) {
  const { data: session } = useSession();
  return (
    <>
      <h1>Dashboard</h1>
      Você está logado como {session?.user?.email} <br />
      <button onClick={() => signOut()}>Sair do sistema</button>
    </>
  );
}

export default Dashboard;
