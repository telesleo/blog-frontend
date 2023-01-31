export default async function request(endpoint, config) {
  const url = process.env.REACT_APP_API_URL + endpoint;
  const response = await fetch(url, config);
  const data = await response.json();
  return data;
}
