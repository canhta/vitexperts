import Link from 'next/link';
import ResponsiveMenu from './responsive-menu';
import Image from 'next/image';

type Props = {
  isOpen: boolean;
  setIsOpen: any;
  popupLogo: any;
};

const MobileMenuPopup = ({ isOpen, setIsOpen, popupLogo }: Props) => {
  return (
    <div className={`menu__bar-popup ${isOpen ? 'show' : ''}`}>
      <div className='menu__bar-popup-top'>
        <div className='logo'>
          <Link href='/'>
            <Image src={popupLogo} alt='logo' />
          </Link>
        </div>
        <div className='close' onClick={() => setIsOpen(false)}>
          <i className='fal fa-times'></i>
        </div>
      </div>
      <div className='responsive-menu mean-container'>
        <div className='mean-bar'>
          <div className='mean-nav'>
            <ResponsiveMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuPopup;
