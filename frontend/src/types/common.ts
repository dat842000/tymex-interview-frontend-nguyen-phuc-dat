export type NavItem = {
  label: string;
  path: string;
  icon?: string;
  isActive?: boolean;
};
export interface SearchOptions {
  filterTheme: string;
  filterCate: string;
  filterTier: string;
  sortPrice: string;
  sortTime: string;
  textSearch: string;
  pageNumber: number;
  from: number;
  to: number;
  maxResults: number;
}
