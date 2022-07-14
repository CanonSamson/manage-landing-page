import logo from '../asset/images/logo.svg'
import hamburger from '../asset/images/icon-hamburger.svg'
import close from '../asset/images/icon-close.svg'
import illustration from '../asset/images/illustration-intro.svg'
import { Link } from 'react-router-dom';
import css from './css.css'
import { useState } from 'react';



const Landingpage = () => {
    const [toggle, setToggle] = useState(false)
    const Show = () => {
        setToggle(true)
        setHind(false)
    }
    const [hind, setHind] = useState(true)
    const Hind = () => {
        setToggle(false)
        setHind(true)
    }
    return (
        <div className=' relative'>
            <nav className=' flex items-center justify-between px-5 pt-10  fixed w-full bg-gray-50  pb-2 top-0 h-[70px]'>
                 <img src={logo} alt="logo"  />
                {
                    hind &&
                    <img onClick={Show} src={hamburger} alt="logo"  />

                }
               {
                toggle &&
                <img className=' z-20' onClick={Hind} src={close} alt="logo"  />
               }
            </nav>
           {
            toggle && 
            <NavBar onClick={Hind} />
           }
            <div className=' mt-[70px]'>
                <div className=' my-10 flex  justify-center '>
                        <img src={illustration} alt="logo"  />
                </div>
                <div className='px-5 flex flex-col justify-center'>
                        <h1 className='text-5xl  text-center font-semibold pcolor'>Bring everyone together to build better products.</h1>
                        <p className=' text-lg py-5 text-center text-gray-400'>Manage makes it simple for software teams to plan day-to-day 
                        tasks while keeping the larger team goals in view.</p>
                        <Link className="get-started p-4 px-10 rounded-full text-center w-[50%] m-auto mt-10" to="" >Get Started</Link>
                </div>
           </div> 
           <div className='px-5 flex flex-col justify-center mt-32 mb-20'>
                        <h1 className='text-3xl  text-center font-semibold pcolor'>What’s different about Manage?</h1>
                        <p className=' text-lg py-5 text-center  text-gray-400'>  Manage provides all the functionality your team needs, without 
                        the complexity. Our software is tailor-made for modern digital 
                        product teams. </p>
                </div>
           <Main />
            
        </div>
      );
}

const Main = () => {
    const source =[
        {
            id:"01",
            header: 'Track company-wide progress',
            describtion: " See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
        },
        {
            id:"02",
            header: 'Advanced built-in reports',
            describtion: " Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed",
        },
        {
            id:"03",
            header: 'Everything you need in one place',
            describtion: "   Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
        },
    ]
    return ( 
     <div>
         {
        source.map((items) => (
            <div key={items.id} className='mt-10 ml-5'>
            <div className=' flex items-center  my-5'>
                <span className=' text-xl text-white font-semibold p-3 px-8 rounded-full bbcolor h-[40px] mr-[-20px] z-10'>{items.id}</span>
                <p className='color pcolor w-full h-[40px]  items-center flex z-o text-xl pl-10'>{items.header}</p>
            </div>
            <p className=' text-gray-400'>{items.describtion}</p>
        </div>
        ))
      }
     </div>
     );
}

const NavBar = ({onClick}) => {
    return ( 
       <div>
         <div className=' bg-gray-50 shadow text-2xl h-s fixed  mx-[5%] top-40 items-center justify-center flex rounded flex-col w-[90%] z-20 p-10'>
            <Link className='my-3' to="">Pricing</Link>
            <Link className='my-3' to="">Product</Link>
            <Link className='my-3' to="">About Us</Link>
            <Link className='my-3' to="">Careers</Link>
            <Link className='my-3' to="">Community</Link>
        </div> 
        <div onClick={onClick} className=' bg-black/30 shadow h-screen w-full fixed z-10 top-0'>

        </div>
       </div>
     );
}


 
export default Landingpage;