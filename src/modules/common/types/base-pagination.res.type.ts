export type BasePaginationResType<T> = {
  data: T[];
  hasNextPage: boolean;
  currentPage: number;
  lastPage: number;
};
