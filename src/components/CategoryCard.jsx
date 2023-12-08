import React, { memo } from 'react';
import {Link} from 'react-router-dom';
import Replacement from '../assets/imgs/replacement.jpg';

const CategoryCard = memo(({ data }) => {
  return (
    <figure className='category-card'>
      <img src={Replacement} alt="Натуральный корм" />
      <figcaption>
        <h4><Link to={'/catalog/category/'+data?.id} className="stretched-link">{data?.title ?? 'нет заголовка'}</Link></h4>
      </figcaption>
    </figure>
  );
});

export default CategoryCard;