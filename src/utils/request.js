export default async function request(endpoint, method, body) {
  const url = process.env.REACT_APP_API_URL + endpoint;
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}
