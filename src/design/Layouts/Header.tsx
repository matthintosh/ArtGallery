import styled from "styled-components";
import { HeaderSize } from "../Constants";

export const Header = styled.div`
  width: 100%;
  position: fixed;
  background-color: #d9d5c3;
  height: ${HeaderSize}px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  backdrop-filter: blur(10px);
  z-index: 100;
`;
