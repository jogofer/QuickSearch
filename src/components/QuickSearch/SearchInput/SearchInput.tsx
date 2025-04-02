import { SearchInputStyled } from './SearchInput.styled';
import { DEFAULT_PLACEHOLDER } from "./SearchInput.constants"

interface SearchInputProps {
  query: string;
  setQuery: (value: string) => void;
  placeholder?: string;
}

export const SearchInput = ({ query, setQuery, placeholder = DEFAULT_PLACEHOLDER }: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  return (
      <SearchInputStyled
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
      />
  );
};