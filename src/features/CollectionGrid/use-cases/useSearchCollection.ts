import { useEffect, useState } from "react";
import { useCollectionContext } from "../context/CollectionContext";

export const useSearchCollection = () => {
  const { setSearchTerm, isLoading } = useCollectionContext();
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    if (searchInput === "") {
      setSearchTerm("");
      return;
    }
  }, [searchInput, setSearchTerm]);

  const searchTerm = () => {
    if (searchInput.trim().length === 0) {
      return;
    }
    setSearchTerm(searchInput);
  };

  return { searchInput, setSearchInput, isLoading, searchTerm };
};
