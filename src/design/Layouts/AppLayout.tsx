import { ReactNode } from "react";
import styled from "styled-components";
import { Header as HeaderStyled } from "./Header";
import { Content as ContentStyled } from "./Content";

export const AppLayout = ({
  Header,
  Content,
}: {
  Header: ReactNode;
  Content: ReactNode;
}) => {
  return (
    <Layout>
      <HeaderStyled>{Header}</HeaderStyled>
      <ContentStyled>{Content}</ContentStyled>
    </Layout>
  );
};

const Layout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
