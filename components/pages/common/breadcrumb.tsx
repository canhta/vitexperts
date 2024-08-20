import Link from 'next/link';
import image from '../../../public/assets/img/banner/page-banner-img.png';
import shape from '../../../public/assets/img/shape/page-banner-shape.png';
import Image from 'next/image';

type Props = {
  title: string;
  innerTitle: string;
};

const BreadCrumb = ({ title, innerTitle }: Props) => {
  return (
    <div className='page__banner'>
      <div className='page__banner-shape'>
        <Image src={shape} alt='image' />
      </div>
      <div className='container'>
        <div className='row justify-content-between align-items-center'>
          <div className='col-xl-7 col-lg-7'>
            <div className='page__banner-content'>
              <h2>{title}</h2>
              <span>
                <Link href='/'>Home</Link>
                <span>|</span>
                {innerTitle}
              </span>
            </div>
          </div>
          <div className='col-xl-4 col-lg-5'>
            <div className='page__banner-img'>
              <Image src={image} alt='image' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
