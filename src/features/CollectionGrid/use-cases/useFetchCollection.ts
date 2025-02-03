import { useApplicationRepository } from "../../../context/ApplicationRepository";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useFetchCollection = () => {
  const { collectionRepository } = useApplicationRepository();

  const { data, isLoading, isError, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["collection"],
    queryFn: async ({ pageParam }) =>
      collectionRepository.getCollection(pageParam, 20),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });

  return {
    artObjects: data?.pages.map((artObjects) => artObjects).flat(),
    isLoading,
    isError,
    error,
    fetchNextPage,
  };
};
