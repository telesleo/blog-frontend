import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Description from '../../components/Description';
import PostList from '../../components/PostList';
import request from '../../utils/request';

export default function User() {
  const { username } = useParams();
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const response = await request(`/users/${username}`, 'GET');
    setUser(response);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <img src="/images/profile_picture.png" alt="profile" />
      <h2>{user.name}</h2>
      <h2>{user.username}</h2>
      {(user.description) && <Description description={user.about} />}
      {(user) && <PostList posts={user.posts} />}
    </div>
  );
}
