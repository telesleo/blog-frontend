import request from './request';

export default async function login(email, password) {
  const loginResponse = await request('/users/login', 'POST', {
    email, password,
  });
  if (loginResponse.token) {
    localStorage.setItem('access_token', loginResponse.token);
    return true;
  }
  return false;
}
