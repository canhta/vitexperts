import Image from 'next/image';
import Social from '@/components/data/social';
import servicesData from '@/components/data/services-data';
import Link from 'next/link';
import logo from '../../../public/assets/img/logo-2.png';
import ctaBg from '../../../public/assets/img/subscribe/subscribe-two-shape-2.png';
import footerBg from '../../../public/assets/img/shape/footer-bg.png';
import { contactConfig } from '@/configs/contact';
import { AppRoute } from '@/configs/app';

const aboutRoutes: AppRoute[] = [
  { title: 'About Us', href: '/about-us' },
  { title: 'Our Services', href: '/services' },
  { title: 'Case Studies', href: '/case-studies' },
  { title: 'Meet The Team', href: '/team' },
];

const Footer = () => {
  return (
    <>
      <div className='subscribe__one two'>
        <div className='container'>
          <div
            className='row justify-content-center text-center subscribe__one-content'
            style={{ backgroundImage: `url(${ctaBg.src})` }}
          >
            <div className='col-xl-7 col-lg-8'>
              <div className='subscribe__one-title'>
                <h3>Unlock Your Potential Today</h3>
              </div>
              <div className='subscribe-bottom'>
                <Link href='/request-quote' className='btn-two'>
                  request quote<i className='fas fa-arrow-right'></i>
                </Link>
                <div className='call-box'>
                  <div className='call-box-item'>
                    <div className='call-box-item-icon'>
                      <i className='flaticon-telephone-call'></i>
                    </div>
                    <div className='call-box-item-info'>
                      <span>Make a call</span>
                      <Link href={`tel:${contactConfig.phone}`}>
                        {contactConfig.phone}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__one'>
        <Image className='footer__one-shape' src={footerBg} alt='image' />
        <div className='container'>
          <div className='row gy-4 justify-content-between'>
            <div className='col-xl-3 col-md-6 col-sm-7 xl-mb-30'>
              <div className='footer__one-widget'>
                <div className='footer__one-widget-about'>
                  <Link href='/'>
                    <Image src={logo} alt='Logo-image' />
                  </Link>
                  <p>Financial planners help people to gain knowledge about</p>
                  <div className='footer__one-widget-about-social'>
                    <h4>Follow us</h4>
                    <Social />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6 col-sm-5 sm-mb-30'>
              <div className='footer__one-widget border-one'>
                <h4>Service</h4>
                <div className='footer__one-widget-solution'>
                  <ul>
                    {servicesData.slice(0, 4).map((data, id) => {
                      const words = data.title.split(' ');
                      const firstAndSecondWord = words.slice(0, 2).join(' ');
                      return (
                        <li key={id}>
                          <Link href={`/services/${data.id}`}>
                            <i className='far fa-chevron-double-right'></i>
                            {firstAndSecondWord}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-md-6 col-sm-5 sm-mb-30'>
              <div className='footer__one-widget border-one'>
                <h4>About Us</h4>
                <div className='footer__one-widget-solution'>
                  <ul>
                    {aboutRoutes.map((data, id) => {
                      return (
                        <li key={id}>
                          <Link href={data.href}>
                            <i className='far fa-link'></i>
                            {data.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-md-6 col-sm-6 sm-mb-30'>
              <div className='footer__one-widget border-one'>
                <h4>Contact</h4>
                <div className='footer__one-widget-location'>
                  <div className='footer__one-widget-location-item'>
                    <div className='footer__one-widget-location-item-icon'>
                      <i className='flaticon-mail'></i>
                    </div>
                    <div className='footer__one-widget-location-item-info email'>
                      <span>Email</span>
                      <Link href='mailto:canhta.w@gmail.com'>
                        canhta.w@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className='footer__one-widget-location-item'>
                    <div className='footer__one-widget-location-item-icon'>
                      <i className='flaticon-location'></i>
                    </div>
                    <div className='footer__one-widget-location-item-info'>
                      <span>Address</span>
                      <Link href='https://google.com/maps'>
                        {contactConfig.address}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='copyright__one'>
          <div className='container'>
            <div className='row justify-content-between copyright__one-container-area'>
              <div className='col-xl-5 col-lg-6'>
                <div className='copyright__one-left'>
                  <p>© VIT Experts 2024 | All Rights Reserved</p>
                </div>
              </div>
              <div className='col-xl-5 col-lg-6'>
                <div className='copyright__one-right'>
                  <Link href='/about'>Privacy Policy</Link>
                  <Link href='/contact'>Contact Us</Link>
                  <Link href='/faq'>FAQ</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
