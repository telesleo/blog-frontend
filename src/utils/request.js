export default async function request(endpoint, method, body) {
  const token = localStorage.getItem('access_token');

  const url = process.env.REACT_APP_API_URL + endpoint;
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  const data = await response.json();
  return data;
}
