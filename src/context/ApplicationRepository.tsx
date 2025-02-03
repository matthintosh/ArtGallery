import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { CollectionRepository } from "../repositories/CollectionRepository";
import { CollectionRepositoryRiksMuseum } from "../repositories/CollectionRepositoryRiksMuseum";

interface ApplicationRepository {
  collectionRepository: CollectionRepository;
}

const ApplicationRepositoryContext = createContext<ApplicationRepository>(
  null!,
);

export const useApplicationRepository = () => {
  const context = useContext(ApplicationRepositoryContext);
  if (context === undefined) {
    throw new Error(
      "useApplicationRepository must be used within a ApplicationRepositoryProvider",
    );
  }
  return context;
};

export const ApplicationRepositoryProvider = ({
  children,
}: PropsWithChildren) => {
  const collectionRepository = useMemo(
    () => new CollectionRepositoryRiksMuseum(),
    [],
  );
  return (
    <ApplicationRepositoryContext.Provider value={{ collectionRepository }}>
      {children}
    </ApplicationRepositoryContext.Provider>
  );
};
