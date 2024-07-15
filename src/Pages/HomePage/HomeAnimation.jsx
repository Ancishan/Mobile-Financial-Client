// import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import bgImage from '../../assets/mobile.jpg'; 
import { Link } from 'react-router-dom';

const HomeAnimation = () => {
   

    return (
        <div
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            
        >
            <div
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
                    height: '100vh',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="text-white text-center font-bold text-3xl p-4 rounded">
                    <TypeAnimation
                        sequence={[
                            'Welcome To Our Bijoy',
                            1000
                        ]}
                        wrapper="p"
                        speed={30}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                        className="text-light fs-3 fw-bold"
                        cursor={false}
                    />
                    <h2 className='pt-12 pb-2 text-green-400 text-4xl font-bold'>Join Us</h2>
                    <h2 className=' text-xl font-bold'><Link to='/login'>Login</Link ><br /> or <br /><Link to='/reg'> Registration</Link></h2>
                </div>
               
            </div>
                        
        </div>
    );
};

export default HomeAnimation;
