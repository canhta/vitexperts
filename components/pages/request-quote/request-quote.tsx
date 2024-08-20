'use client';

const RequestQuoteMain = () => {
  return (
    <div className='request-quote__area section-padding'>
      <div className='container'>
        <form action='#'>
          <div className='request-quote__area-inputs'>
            <div className='request-quote__area-input-field'>
              <label htmlFor='first-name'>First Name *</label>
              <input type='text' id='first-name' placeholder='First' />
            </div>
            <div className='request-quote__area-input-field'>
              <label htmlFor='last-name'>Last Name *</label>
              <input type='text' id='last-name' placeholder='Last' />
            </div>
            <div className='request-quote__area-input-field'>
              <label htmlFor='email'>Email Address *</label>
              <input type='email' id='email' placeholder='Email' />
            </div>
            <div className='request-quote__area-input-field'>
              <label htmlFor='number'>Number *</label>
              <input type='text' id='number' placeholder='+ 00 123 4567' />
            </div>
            <div className='request-quote__area-input-field'>
              <label htmlFor='company'>Company/Organization *</label>
              <input type='text' id='company' placeholder='Envato' />
            </div>
            <div className='request-quote__area-input-field'>
              <label htmlFor='website'>Website *</label>
              <input type='text' id='website' placeholder='http://envato.com' />
            </div>
          </div>
          <div className='request-quote__area-service-input'>
            <span>What services can we provide you? *</span>
            <div className='request-quote__area-service-input-single'>
              <input type='checkbox' id='seo' />
              <label htmlFor='seo'>Optimization (SEO)</label>
            </div>
            <div className='request-quote__area-service-input-single'>
              <input type='checkbox' id='web-design' />
              <label htmlFor='web-design'>Web Design</label>
            </div>
            <div className='request-quote__area-service-input-single'>
              <input type='checkbox' id='web-hosting' />
              <label htmlFor='web-hosting'>Web Hosting</label>
            </div>
            <div className='request-quote__area-service-input-single'>
              <input type='checkbox' id='maintenance' />
              <label htmlFor='maintenance'>Maintenance</label>
            </div>
          </div>
          <label htmlFor='message' className='mb-2'>
            Message *
          </label>
          <textarea id='message' placeholder='Type Here'></textarea>
          <input type='submit' value='Submit Now' className='btn-two mt-4' />
        </form>
      </div>
    </div>
  );
};

export default RequestQuoteMain;
