/**
 * Obtains information from an endpoint provided as a parameter.
 * @param endpoint 
 * @returns {data}
 */

export const getData = async <T>(endpoint: string):Promise<T> => {
  const response = await fetch(endpoint);
  const data = response.json();

  return data
}