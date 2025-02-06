import { useEffect } from "react";
import { useApplicationRepository } from "../../../context/ApplicationRepository";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useFetchCollection = (searchTerm?: string) => {
  const { collectionRepository } = useApplicationRepository();

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    refetch,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery({
    queryKey: ["collection", searchTerm ?? ""],
    queryFn: async ({ pageParam }) =>
      collectionRepository.getCollection(pageParam, undefined, searchTerm),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });

  useEffect(() => {
    refetch();
  }, [searchTerm, refetch]);

  return {
    artObjects: data?.pages.map((artObjects) => artObjects).flat(),
    isLoading: isLoading || isRefetching,
    isError,
    error,
    fetchNextPage,
    isFetchingNextPage,
  };
};
