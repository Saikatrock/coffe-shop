import React from 'react'

import { Link, NavLink } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';

import Button from '../ui/Button';

import { useState } from 'react'



const Navbar = () => {
  const [open, setOpen] = useState(false)



  return (
    // <nav className="mx-4 absolute bg-red-500 flex items-center justify-between border-none px-6 py-4 rounded-full text-white text-sm max-md:w-full">
    <nav className="fixed     left-4 right-4 top-4 z-50 flex items-center justify-between rounded-full bg-gradient-to-r from-[#FEF7DC] via-[#8B4513] to-[#7A3306] px-6 py-4 text-sm text-white">

      <Link to="/" className=" text-xl font-bold text-amber-900" onClick={() => setOpen(false)}>
        ☕ {siteConfig.name}
      </Link>

      <div className="hidden md:flex items-center gap-6 ml-7">
        
          {/* // <a key={siteConfig.navLinks.indexOf(link)} href="#" className="relative overflow-hidden h-6 group">
          //   <span className="block group-hover:-translate-y-full transition-transform duration-300">{link.label}</span>
          //   <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">{link.label}</span>
          // </a> */}

         {siteConfig.navLinks.map((link) => (
          <NavLink to={link.to}  end={link.to === '/'}>
                {link.label}
              </NavLink>

          ))}
</div>

      <div className="hidden ml-14 md:flex items-center gap-4">
       
        <button type="button" className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
          <Link to="/contact" onClick={() => setOpen(false)}>
            Reserve a table
          </Link>
        </button>
      </div>
       



     

      <button
        type="button"
        className="md:hidden text-gray-600"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && (
      <ul className="absolute top-full right-0 mt-3 z-50
        w-52 list-none rounded-xl
        bg-[#803A0B] p-4 shadow-xl
        flex flex-col gap-4 md:hidden">

        {siteConfig.navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className="block text-white hover:text-amber-200"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    )}
    </nav>
  )
}

export default Navbar










// import { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { siteConfig } from '../../data/siteConfig';
// import Button from '../ui/Button';


// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const linkClass = ({ isActive }: { isActive: boolean }) =>
//     `text-sm font-medium transition-colors hover:text-amber-700 ${isActive ? 'text-amber-800' : 'text-stone-600'
//     }`;

//   return (
//     <header className="sticky top-0 z-40 border-b border-amber-100 bg-white/90 backdrop-blur">
//       <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
//         <Link to="/" className="font-serif text-xl font-bold text-amber-900" onClick={() => setOpen(false)}>
//           ☕ {siteConfig.name}
//         </Link>

//         {/* Desktop links */}
//         <ul className="hidden items-center gap-8 md:flex">
//           {siteConfig.navLinks.map((link) => (
//             <li key={link.to}>
//               <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
//                 {link.label}
//               </NavLink>
//             </li>
//           ))}
//           <li>
//             <Button to="/contact" className="!px-5 !py-2">
//               Reserve a table
//             </Button>
//           </li>
//         </ul>

//         {/* Mobile toggle */}
//         <button
//           type="button"
//           className="rounded-md p-2 text-stone-700 md:hidden"
//           aria-label="Toggle menu"
//           aria-expanded={open}
//           onClick={() => setOpen((v) => !v)}
//         >
//           <span className="block text-2xl leading-none">{open ? '✕' : '☰'}</span>
//         </button>
//       </nav>

//       {/* Mobile menu */}
//       {open && (
//         <ul className="space-y-1 border-t border-amber-100 bg-white px-4 py-4 md:hidden">
//           {siteConfig.navLinks.map((link) => (
//             <li key={link.to}>
//               <NavLink
//                 to={link.to}
//                 end={link.to === '/'}
//                 className={({ isActive }) =>
//                   `block rounded-lg px-3 py-2 text-base font-medium ${isActive ? 'bg-amber-100 text-amber-900' : 'text-stone-700'
//                   }`
//                 }
//                 onClick={() => setOpen(false)}
//               >
//                 {link.label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       )}
//     </header>
//   );
// }
