import styled from "styled-components";

export const Button = styled.button<{ $loading?: boolean }>`
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #d9d5c3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: black;
    color: white;
  }
  @media (prefers-color-scheme: dark) {
    color: black;
  }
  ${(props) =>
    props.$loading &&
    `
    background-color: #EFEFEF;
    &::before {
    pointer-events: none;
    content: "";
    display: inline-block;
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid currentColor;
    border-top-color: transparent;
    animation: spinner 1s linear infinite;
  }
    
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  `}
`;
