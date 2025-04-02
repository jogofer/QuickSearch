import styled from 'styled-components';

export const ResultsContainerStyled = styled.div<{ isLoading: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  width: 350px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-height: 350px;
  overflow-y: auto;
  opacity: ${props => props.isLoading ? 0.7 : 1};
  z-index: 1000;
`;

export const ItemStyled = styled.div`
  display: flex;
  padding: 14px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  background: #f9f9f9;

  &:hover {
    background: #f5f5f5;
  }

`;

export const ThumbnailStyled = styled.div`
  width: 45px;
  height: 45px;
  min-width: 45px;
  background: #e0e0e0;
  margin-right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 3px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleStyled = styled.div`
  color: #333;
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: 500;
  white-space: nowrap;
`;

export const AuthorStyled = styled.div`
  color: #666;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 4px;
  white-space: nowrap;
`;

export const DetailsStyled = styled.div`
  color: #888;
  font-size: 13px;
  margin-bottom: 8px;
`;

export const ActionLinkStyled = styled.a`
  display: inline-block;
  padding: 5px 10px;
  background: #f0c14b;
  border-radius: 3px;
  color: #111;
  font-size: 12px;
  transition: background 0.2s ease;
  font-weight: 500;
  max-width: 100px;
  text-align: center;

  &:hover {
    background: #e2b33b;
  }
`;

ResultsContainerStyled.displayName = 'ResultsContainerStyled';
ItemStyled.displayName = 'ItemStyled';
ThumbnailStyled.displayName = 'ThumbnailStyled';
InfoStyled.displayName = 'InfoStyled';
TitleStyled.displayName = 'TitleStyled';
AuthorStyled.displayName = 'AuthorStyled';
DetailsStyled.displayName = 'DetailsStyled';
ActionLinkStyled.displayName = 'ActionLinkStyled';