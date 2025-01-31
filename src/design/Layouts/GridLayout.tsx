import styled from "styled-components";
import { BreakPoints } from "../Breakpoints";

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(50px, 1fr));
  grid-gap: 0.75rem;
  @media ${BreakPoints.md} {
    grid-template-columns: repeat(4, minmax(150px, 1fr));
  }
  @media ${BreakPoints.lg} {
    grid-template-columns: repeat(5, minmax(150px, 1fr));
  }
`;
