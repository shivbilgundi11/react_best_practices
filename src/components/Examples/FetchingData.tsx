import { useEffect, useRef, useState } from 'react';

interface Post {
  id: number;
  title: string;
}

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default function FetchingData() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState();
  const [page, setPage] = useState(0);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
          signal: abortControllerRef.current?.signal,
        });
        const postsData = (await response.json()) as Post[];
        setPosts(postsData);
      } catch (error: any) {
        if (error.name === 'AbortError') {
          console.log('Aborted Fetch Request...');
          return;
        }

        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  if (isLoading) {
    return (
      <p className='text-3xl font-semibold text-yellow-500 m-6'>Loading....</p>
    );
  }
  if (error) {
    return (
      <p className='text-3xl font-semibold text-red-500 m-6'>
        Something went wrong pls try again....
      </p>
    );
  }

  return (
    <>
      <div>
        <h1 className='mb-5 text-2xl font-semibold'>Data Fetching in React</h1>
        <button onClick={() => setPage(page + 1)}>Page+ {page}</button>
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
