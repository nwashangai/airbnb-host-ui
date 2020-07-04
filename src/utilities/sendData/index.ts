export default (url: string, method?: string, data?: any) => {
  return fetch(url, {
    method: method || 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    credentials: 'omit'
  })
    .then((obj: any) => {
      return obj.json();
    })
    .catch((error: any) => {
      throw new Error('Internal server error');
    });
};
