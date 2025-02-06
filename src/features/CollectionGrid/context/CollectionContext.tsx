import { createContext, PropsWithChildren, useContext, useState } from "react";
import { ArtObject } from "../../../entities/ArtObject";
import { useFetchCollection } from "../use-cases/useFetchCollection";

interface CollectionContextType {
  artObjects: ArtObject[];
  isLoading: boolean;
  isError: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  setSearchTerm: (searchTerm: string) => void;
}

const CollectionContext = createContext<CollectionContextType>(null!);

export const useCollectionContext = () => {
  const context = useContext(CollectionContext);
  if (context === undefined) {
    throw new Error(
      "useCollectionContext must be used within a CollectionProvider",
    );
  }
  return context;
};

export const CollectionProvider = ({ children }: PropsWithChildren) => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);
  const { artObjects, isError, isLoading, fetchNextPage, isFetchingNextPage } =
    useFetchCollection(searchTerm);

  return (
    <CollectionContext.Provider
      value={{
        artObjects: artObjects ?? [],
        isError,
        isLoading,
        fetchNextPage,
        setSearchTerm,
        isFetchingNextPage,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};
