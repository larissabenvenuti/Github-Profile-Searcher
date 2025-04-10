'use client';

import React from 'react';
import { Card, Avatar, Info, Name, Bio, ProfileLink } from '@/styles/UserCardStyles';

export default function UserCard({ user }) {
  return (
    <Card>
      <Avatar src={user.avatar_url} alt="Avatar" />
      <Info>
        <Name>{user.name || user.login}</Name>
        {user.bio && <Bio>{user.bio}</Bio>}
      </Info>
    </Card>
  );
}
