import { IconBaseProps } from "react-icons";
import { FiCreditCard, FiGift, FiSmile, FiTrello, FiUsers } from "react-icons/fi";

interface NavigationProps {
  id: number;
  name: string;
  icon: string | React.ComponentType<IconBaseProps>;
  pathname: string;
}

export const menuOptions: NavigationProps[] = [
  {
    id: 1,
    name: "Resumo",
    icon: FiTrello,
    pathname: "/resume",
  },
  {
    id: 3,
    name: "Cartões",
    icon: FiCreditCard,
    pathname: "/cartoes",
  },
  {
    id: 4,
    name: "Devedores",
    icon: FiUsers,
    pathname: "/devedores",
  },
  {
    id: 5,
    name: "Compras",
    icon: FiGift,
    pathname: "/compras",
  },
  {
    id: 6,
    name: "Perfil",
    icon: FiSmile,
    pathname: "/perfil",
  },
];
