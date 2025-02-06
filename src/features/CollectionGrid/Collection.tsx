import { CollectionProvider } from "./context/CollectionContext";
import { CollectionGrid } from "./components/CollectionGrid";
import { CollectionSearch } from "./components/CollectionSearch";
import styled from "styled-components";
import { LoadMoreButton } from "./components/LoadMoreButton";

export const Collection = () => {
  return (
    <CollectionProvider>
      <CollectionContainer>
        <CollectionSearch />
        <CollectionGrid />
        <LoadMoreButton />
      </CollectionContainer>
    </CollectionProvider>
  );
};

const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
