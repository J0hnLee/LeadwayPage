import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

//NOTE: : 
//FIXME:
// TODO: add RWD
const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center flex-col sm:flex-row">
    <div className='flex flex-col w-24 '>
      <Link href='/'>
          <img  className='justify-content-center' src='/android-chrome-192x192.png'></img>
      </Link>
      <Link href="/">
        <a className='text-center'>{props.logo}</a>
      </Link>
    </div>

    <nav>
      <ul className="navbar flex justify-between items-center font-medium text-xl text-gray-800">
        {props.children}
      </ul>
    </nav>
   
    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0 flex justify-center text-center;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-10 text-center  flex justify-center;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
