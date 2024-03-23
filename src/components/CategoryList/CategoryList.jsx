import React from 'react';
import useDonationData from '../../Hooks/useDonationData';
import CardDefault from '../Card/CardDefault';

const CategoryList = () => {
  const {data, loading}= useDonationData();
  // console.log(data)
  return (
    <div className='grid grid-cols-4 gap-7 max-w-6xl py-3 mx-auto mt-12'>
      {
        data.map((item) => <CardDefault key={item.id} item={item}></CardDefault>)
      }
    </div>
  );
};

export default CategoryList;