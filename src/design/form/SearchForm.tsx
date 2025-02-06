import styled from "styled-components";
import { BreakPoints } from "../Breakpoints";
import { ReactNode } from "react";

export interface SearchFormProps {
  onSubmit: (e: React.FormEvent) => void;
  inputProps: {
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  SubmitButton: ReactNode;
}

export const SearchForm = ({
  onSubmit,
  inputProps,
  SubmitButton,
}: SearchFormProps) => {
  return (
    <SearchFormContainer onSubmit={onSubmit}>
      <SearchInput {...inputProps} />
      {SubmitButton}
    </SearchFormContainer>
  );
};

const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid #ccc;
  outline: none;
  background-color: transparent;
  padding: 0.3rem;
  @media ${BreakPoints.md} {
    border: none;
    &:hover {
      outline: none !important;
    }
    gap: 12px;
  }
  &:hover {
    outline: 2px solid #d9d5c3;
  }
  flex-wrap: wrap;
  @media (prefers-color-scheme: dark) {
    border-color: #6a6a6a;
    outline-color: #6a6a6a;
    &:hover {
      outline-color: #6a6a6a;
    }
  }
`;

const SearchInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
  background-color: transparent;
  @media ${BreakPoints.md} {
    border-radius: 1rem;
    border: 1px solid #ccc;
    &:hover {
      outline: 1px solid #d9d5c3;
    }
    padding: 0.5rem;
  }
  @media (prefers-color-scheme: dark) {
    border-color: #6a6a6a;
    outline-color: #6a6a6a;
  }
`;
