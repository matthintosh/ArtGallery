import styled from "styled-components";
import { HeaderSize } from "./Constants";

export const Header = styled.div`
  width: 100%;
  background-color: #d9d5c3;
  position: fixed;
  height: ${HeaderSize}px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
`;
