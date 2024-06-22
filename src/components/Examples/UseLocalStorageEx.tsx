import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function LocalStorage() {
  const [value, setValue] = useState('');

  const { setItem, getItem, removeItem } = useLocalStorage(value);

  return (
    <>
      <div className=''>
        <h1 className='mb-2 text-3xl font-bold'>useLocalStorage</h1>

        <input
          type='text'
          className='mb-4 text-black p-2 text-lg'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <div className='flex flex-col gap-3'>
          <button onClick={() => setItem(value)}>Set</button>
          <button onClick={() => console.log(getItem())}>Get</button>
          <button onClick={() => removeItem()}>Remove</button>
        </div>
      </div>
    </>
  );
}
