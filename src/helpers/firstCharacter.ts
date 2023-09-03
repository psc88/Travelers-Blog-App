/**
 * Gets the first letter of text sent as a parameter.
 * @param author 
 * @returns {string}
 */

export const firstCharacter = (author: string) => {
  const firstCharacterAuthor = author?.charAt(0).toUpperCase();
  
  return firstCharacterAuthor;
};
