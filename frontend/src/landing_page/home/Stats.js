import React from 'react';

function Stats() {
    return ( 
        <div className="container">
          <div className='row p-4'>
               <div className='col-6 p-5'>
                    <h1 className='mt-5 mb-5 fs-1'>Our Ecosystem</h1>
                    <h2 className='mb-2 fs-2'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h2 className='mb-2 fs-2'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h2 className='mb-2 fs-2'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='mb-2 fs-2'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
               </div>
               <div className='col-6 mt-5 p-5'>
                  <img src='media/image/ecosystem.png' alt="no" className=' p-2 ' style={{width:"90%"}}/>
                  <div className='mt-2 mb-3 text-center'>
                    <a href='/#' className='p-3 ' style={{textDecoration:"none"}}>explore Our Product <i class="fa-solid fa-arrow-right" ></i></a>
                    <a href='/#' className='p-3 ' style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>

                  </div>
               </div>
            </div>
        </div>
            
     );
}

export default Stats;