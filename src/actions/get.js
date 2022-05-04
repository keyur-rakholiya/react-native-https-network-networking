import { apiInstance } from "../httpClient";

export const getDataUsingSimpleGetCall = async () => {
  const data =  apiInstance.get('/posts');
    return data;
  };

  export const postDataUsingSimplePostCall = async () => {
  const response =  await apiInstance.post('/posts', {
      title: 'foo',
      body: 'bar',
      userID: 1,
    });

  return response;

  }