'use client';
import SEO from '@/components/data/seo';
import Header from '@/components/layout/headers/header';
import BreadCrumb from '../common/breadcrumb';
import Footer from '@/components/layout/footers/footer';
import ScrollToTop from '../common/scroll/scroll-to-top';
import FormArea from './form';
import Image from 'next/image';
import serviceImg1 from '../../../public/assets/img/icon/service-1.png';
import serviceImg2 from '../../../public/assets/img/icon/service-2.png';
import serviceImg3 from '../../../public/assets/img/icon/service-3.png';
import serviceImg4 from '../../../public/assets/img/icon/service-4.png';
import { contactConfig } from '@/configs/contact';

const ContactUs = () => {
  return (
    <>
      <SEO pageTitle='Contact Us' />
      <Header />
      <BreadCrumb title='Contact Us' innerTitle='Contact Us' />
      <div className='contact__two section-padding'>
        <div className='container'>
          <div className='row gy-4 align-items-center'>
            <div className='col-xl-6'>
              <div className='contact__two-content'>
                <div className='contact__two-title'>
                  <span className='subtitle-one'>Contact us</span>
                  <h2>Do you have any question? </h2>
                  <p>
                    For your car we will do everything advice, repairs and
                    maintenance. We are the some preferred choice by many car
                    owners because
                  </p>
                </div>
                <div className='contact__two-form'>
                  <FormArea />
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='contact__two-contact-info'>
                <div className='contact__two-single-info'>
                  <div className='contact__two-single-info-icon'>
                    <Image src={serviceImg1} alt='image' />
                  </div>
                  <div className='contact__two-single-info-content'>
                    <h4>Email</h4>
                    <span>{contactConfig.email}</span>
                  </div>
                </div>
                <div className='contact__two-single-info'>
                  <div className='contact__two-single-info-icon'>
                    <Image src={serviceImg2} alt='image' />
                  </div>
                  <div className='contact__two-single-info-content'>
                    <h4>Contacts</h4>
                    <span>{contactConfig.phone}</span>
                  </div>
                </div>
                <div className='contact__two-single-info'>
                  <div className='contact__two-single-info-icon'>
                    <Image src={serviceImg3} alt='image' />
                  </div>
                  <div className='contact__two-single-info-content'>
                    <h4>Date</h4>
                    <span>Everyday From 8.AM To 10.PM</span>
                  </div>
                </div>
                <div className='contact__two-single-info'>
                  <div className='contact__two-single-info-icon'>
                    <Image src={serviceImg4} alt='image' />
                  </div>
                  <div className='contact__two-single-info-content'>
                    <h4>Location</h4>
                    <span>{contactConfig.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ContactUs;
