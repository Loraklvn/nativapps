import { flightSortByColumns } from '../constants/columns';

export const validatePageParams = (
  page?: number,
  pageSize?: number,
): boolean => {
  return !!page && !!pageSize && page < 1 && pageSize < 1;
};

export const validateSortParams = (
  sortBy?: string,
  sortOrder?: string,
): boolean => {
  return (
    !!sortBy &&
    !!sortOrder &&
    !!flightSortByColumns.includes(sortBy as string) &&
    (sortOrder === 'ASC' || sortOrder === 'DESC')
  );
};
