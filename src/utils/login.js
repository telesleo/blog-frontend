import request from './request';

export default async function login(email, password) {
  const loginResponse = await request('/users/login', 'POST', {
    email, password,
  });
  if (loginResponse.data.token) {
    localStorage.setItem('access_token', loginResponse.data.token);
    return true;
  }
  return false;
}

export async function validate() {
  const response = await request('/users/validate', 'POST');

  if (response.status === 200) {
    return response.data;
  }
  return null;
}
