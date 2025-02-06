import { Button } from "../../../design/button/Button";
import { useCollectionContext } from "../context/CollectionContext";

export const LoadMoreButton = () => {
  const { isFetchingNextPage, fetchNextPage, isLoading } =
    useCollectionContext();
  if (isLoading) {
    return null;
  }
  return (
    <Button
      $loading={isFetchingNextPage}
      onClick={fetchNextPage}
      style={{ alignSelf: "center" }}
    >
      Load more
    </Button>
  );
};
