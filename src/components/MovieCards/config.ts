export interface CardsProps {
  query: string;
  genre: string;
  page: number;
  setPage: (page: number) => void;
  isLoadingNewPage: boolean;
  setIsLoadingNewPage: (elem: boolean) => void;
}
