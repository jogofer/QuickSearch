import { Author } from '../../../domain/author';
import { 
  ResultsContainerStyled, 
  ItemStyled, 
  ThumbnailStyled,
  InfoStyled,
  TitleStyled,
  AuthorStyled,
  DetailsStyled,
  ActionLinkStyled
} from './SearchResults.styled.tsx';
import { 
  LOADING, 
  NO_RESULTS, 
  FIND_ON_AMAZON,
  MORE_RESULTS_AVAILABLE,
  BORN,
  TOP_WORK,
  WORKS,
  WORK
} from './SearchResults.literals.ts';
import { createAmazonSearchUrl } from './SearchResults.utils.ts';
import { MAX_SEARCH_RESULTS } from './SearchResults.constants.ts';

interface SearchResultsProps {
  results: Author[];
  isLoading: boolean;
  total?: number;
  maxSearchResults?: number;
}

export const SearchResults = ({ results, isLoading, maxSearchResults = MAX_SEARCH_RESULTS }: SearchResultsProps) => {
  const limitedResults = results.slice(0, maxSearchResults);
  const remainingCount = (results.length) - limitedResults.length;

  if (isLoading) {
    return (
      <ResultsContainerStyled isLoading={isLoading}>
          <ItemStyled>
            <InfoStyled>
              <TitleStyled>{LOADING}</TitleStyled>
            </InfoStyled>
          </ItemStyled>
      </ResultsContainerStyled>
    );
  }

  if (results.length === 0) {
    return (
      <ResultsContainerStyled isLoading={isLoading}>
        <div>{NO_RESULTS}</div>
      </ResultsContainerStyled>
    );
  }

  return (
    <ResultsContainerStyled isLoading={isLoading}>
      {limitedResults.map((author) => (
        <ItemStyled key={author.id}>
          <ThumbnailStyled>
            {author.imageUrl && <img src={author.imageUrl} alt={author.name} />}
          </ThumbnailStyled>
          <InfoStyled>
            <TitleStyled>{author.name}</TitleStyled>
            {author.topWork && (
              <AuthorStyled>{TOP_WORK}: {author.topWork}</AuthorStyled>
            )}
            <DetailsStyled>
              {author.birthDate && `${BORN}: ${author.birthDate} • `}
              {author.workCount} {author.workCount !== 1 ? WORKS : WORK}
            </DetailsStyled>
            <ActionLinkStyled 
              href={createAmazonSearchUrl(author.name)} 
              target="_blank" 
            >
              {FIND_ON_AMAZON}
            </ActionLinkStyled>
          </InfoStyled>
        </ItemStyled>
      ))}
      {remainingCount > 0 && (
        <ItemStyled>
          {remainingCount} {MORE_RESULTS_AVAILABLE}
        </ItemStyled>
      )}
    </ResultsContainerStyled>
  );
}; 