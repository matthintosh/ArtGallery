import styled from "styled-components";
import { BreakPoints } from "../Breakpoints";

export const LoadingCard = () => {
  return <LoadingCardSkeleton />;
};

const LoadingCardSkeleton = styled.div`
  border-radius: 0.75rem;
  background: linear-gradient(90deg, #f6f6f6 0%, #e6e6e6 50%, #f6f6f6 100%);
  background-size: 200% 100%;
  animation: pulse 1s ease-in-out infinite;
  height: 150px;
  @media ${BreakPoints.md} {
    height: 300px;
  }

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -200% 0%;
    }
  }
`;
