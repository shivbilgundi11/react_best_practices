// src/components/NameList.tsx
import React, { useEffect, useState } from 'react';
import { usersData } from '../../utils/content';
import { useDebounce } from '../../hooks/useDebounce';

interface Name {
  id: number;
  name: string;
}

export const UsersListing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { debouncedValue, loading } = useDebounce(searchTerm);
  const [users, setUsers] = useState<Name[]>();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filteredNames = usersData.filter((item: Name) =>
      item.name.toLowerCase().includes(debouncedValue.toLowerCase()),
    );
    setUsers(filteredNames);
  }, [debouncedValue]);

  return (
    <div>
      <h1 className='text-lg text-gray-400 font-semibold mb-4'>
        Debounce Custom Hook Example
      </h1>
      <input
        type='text'
        placeholder='Search names...'
        value={searchTerm}
        onChange={handleSearch}
        className='text-lg font-semibold p-2 text-black'
      />
      {loading && (
        <p className=' animate-pulse text-2xl text-orange-500'>Loading...</p>
      )}
      <ul>{users?.map((item: Name) => <li key={item.id}>{item.name}</li>)}</ul>
    </div>
  );
};
