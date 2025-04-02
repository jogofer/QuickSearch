
export const createAmazonSearchUrl = (authorName: string) => {
    const encodedName = encodeURIComponent(authorName);
    return `https://www.amazon.com/s?k=${encodedName}`;
  };