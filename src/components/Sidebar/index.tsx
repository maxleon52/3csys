import React from "react";
import { signOut } from "next-auth/react";

import { menuOptions } from "@constants/menu";

import * as S from "./styles";

export default function Sidebar() {
  return (
    <S.Container>
      <S.Header>
        <strong>3C</strong>
        <p>Controle Cartão de Crédito</p>
      </S.Header>

      <S.Options>
        {menuOptions.map(({ id, icon: Icon, name, pathname }) => (
          <S.OptionItem key={id}>
            <a href={pathname}>
              <Icon size={25} />
              {name}
            </a>
          </S.OptionItem>
        ))}
      </S.Options>

      <S.Footer>
        <button onClick={() => signOut()}>Sair</button>
      </S.Footer>
    </S.Container>
  );
}
