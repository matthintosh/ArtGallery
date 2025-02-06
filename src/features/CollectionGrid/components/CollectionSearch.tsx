import { Button } from "../../../design/button/Button";
import { useSearchCollection } from "../use-cases/useSearchCollection";
import { SearchForm } from "../../../design/form/SearchForm";

export const CollectionSearch = () => {
  const { isLoading, setSearchInput, searchTerm } = useSearchCollection();

  const startSearching = (e: React.FormEvent) => {
    e.preventDefault();
    searchTerm();
  };

  const updateSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <SearchForm
      onSubmit={startSearching}
      inputProps={{
        placeholder: "Search for artist, object, etc.",
        onChange: updateSearchInput,
      }}
      SubmitButton={
        <Button $loading={isLoading} onClick={searchTerm}>
          Search
        </Button>
      }
    />
  );
};
