import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  background: #f4f4f2;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 21.875rem;
  padding: 1rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #495464;
  padding-bottom: 0.25rem;

  > strong {
    font-size: 2.25rem;
    line-height: 2.75rem;
    color: #495464;
  }
  
  > p {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: #495464;
  }
`;

export const Options = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  height: 100%;
`;

export const OptionItem = styled.li`
  width: fit-content;
  :hover {
    > svg {
      color: #E65100;
    }
    > a {
      color: #E65100;
    }
  }

  > a {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    transition: all 0.2s;
    color: #495464;
  }
`;

export const Footer = styled.footer`
  > button {
    border: 1px solid transparent;
    background: transparent;
    transition: all 0.2s;

    :hover {
      color: #E65100;
      border-bottom-color: #E65100;
    }
  }
`;
