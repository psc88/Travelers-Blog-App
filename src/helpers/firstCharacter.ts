export const firstCharacter = (author: string) => {
  const firstCharacterAuthor = author?.charAt(0).toUpperCase();
  
  return firstCharacterAuthor;
};
