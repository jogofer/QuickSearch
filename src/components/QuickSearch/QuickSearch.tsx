import { useState } from "react";
import { useSearchAuthorsQuery } from "../../services/authors/api";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchResults } from "./SearchResults/SearchResults";
import { QuickSearchStyled } from './QuickSearch.styled';
import { useDebounce } from "../../hooks/useDebounce";

export const QuickSearch = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);
  const { data, isFetching } = useSearchAuthorsQuery(debouncedQuery, {
    skip: debouncedQuery.length < 2,
  });
  const results = data?.authors || [];

  return (
    <QuickSearchStyled>
      <SearchInput query={query} setQuery={setQuery} placeholder="Search for an author" />
      {debouncedQuery && (
        <SearchResults 
          results={results} 
          isLoading={isFetching}
          total={data?.total}
        />
      )}
    </QuickSearchStyled>
  );
}; 