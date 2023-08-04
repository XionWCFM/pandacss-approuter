import React from 'react';
import { categoryList } from './Component';

interface AsyncItemProps {
  categoryItem: (typeof categoryList)[number];
}

interface JP {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const AsyncItem = ({ categoryItem }: AsyncItemProps) => {
  const [data, setData] = React.useState<JP>();
  React.useEffect(() => {
    const fetcher = async () => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((data) => data.json())
        .then((result) => setData(result));
    };

    fetcher();
  }, []);

  return (
    <div>
      {categoryItem}
      {data.title}
    </div>
  );
};

export default AsyncItem;
