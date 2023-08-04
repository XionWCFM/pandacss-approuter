'use client';
import React from 'react';
import AsyncItem from './AsyncItem';
import { css } from '@/styled-system/css';

interface ComponentProps {}

export const categoryList = ['햄랄', 'legend', 'agree', 'yes'] as const;

const Component = ({}: ComponentProps) => {
  const [category, setCategory] = React.useState(categoryList);
  const [currentView, setCurrentView] =
    React.useState<(typeof categoryList)[number]>('햄랄');
  return (
    <div>
      {category.map((item) => (
        <div
          className={css({
            _hover: {
              bg: 'red.300',
            },
          })}
          key={item}
        >
          <button
            onClick={() => {
              setCurrentView(item);
            }}
          >
            {item}
          </button>
        </div>
      ))}
      <React.Suspense fallback={<div>엄</div>}>
        <AsyncItem categoryItem={currentView} />
      </React.Suspense>
    </div>
  );
};

export default Component;
