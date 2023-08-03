export default interface Paginate<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  nextPage: boolean;
}
