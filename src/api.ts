// eslint-disable-next-line max-len
const API_URL = 'https://mate-academy.github.io/react_people-table/api/people.json';

export const getPeopleFromServer = async (): Promise<People[]> => {
  const response = await fetch(API_URL);

  return response.json();
};