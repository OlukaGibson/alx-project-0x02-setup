import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <>
      <Header />
      <div className="p-4">
        {users.map(user => <UserCard key={user.email} {...user} />)}
      </div>
    </>
  );
}
