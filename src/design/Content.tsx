import styled from "styled-components";
import { HeaderSize } from "./Constants";
import { device } from "./Breakpoints";

export const Content = styled.div`
  flex: 1;
  padding: 6px;
  padding-top: ${HeaderSize}px;
  @media ${device.laptop} {
    padding: 12px;
    padding-top: ${HeaderSize}px;
  }
  @media ${device.laptopL} {
    padding: 18px;
    padding-top: ${HeaderSize}px;
  }
`;
