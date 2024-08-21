import { BlogData } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  currentBlogItems: BlogData[];
};

const BlogItem = ({ currentBlogItems }: Props) => {
  return (
    <>
      {currentBlogItems?.map((data, id) => (
        <div className='col-xl-4 col-lg-6' key={id}>
          <div className='blog__two-single-blog'>
            <div className='blog__two-single-blog-img'>
              <div className='blog__two-single-blog-date'>
                <span className='date'>{data.date}</span>
                <span className='month'>Mar</span>
              </div>
              <Link href={`/blog/${data.id}`}>
                <Image src={data.image} alt='blog' />
              </Link>
            </div>
            <div className='blog__two-single-blog-content'>
              <div className='blog__two-single-blog-content-top'>
                <span>
                  <i className='far fa-user'></i>by Admin
                </span>
                <span>
                  <i className='far fa-comment-dots'></i>Comments (
                  {data.comment})
                </span>
              </div>
              <Link
                href={`/blog/${data.id}`}
                className='blog__two-single-blog-content-title'
              >
                {data.title}
              </Link>
              <Link className='btn-three' href={`/blog/${data.id}`}>
                Read More<i className='fas fa-chevron-right'></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogItem;
