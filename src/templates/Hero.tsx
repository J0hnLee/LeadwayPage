import { useEffect, useState } from 'react';

import { Collapse } from '@mui/material';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const NavBar = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <Background color="bg-gradient-to-r from-sky-500  via-lime-300 to-sky-500 ">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link scroll href="/products">
              <a className='w-10 sm:w-20'>各項產品</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className='w-10 sm:w-20'>各項服務</a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/J0hnLee/pharmX">
              <a>GitHub</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>
      <Collapse in={checked} {...(checked ? { timeout: 2500 } : {})}>
        <Section yPadding="pt-20 pb-32">
          <HeroOneButton
            title={
              <>
                <span className="text-yellow-500">{'理維'}</span>
                {'藥局'}
              </>
            }
            description="還不知道要寫啥"
            button={
              <Link href="https://creativedesignsguru.com/category/nextjs/">
                <a>
                  <Button xl>Download Your Free Theme</Button>
                </a>
              </Link>
            }
          />
        </Section>
      </Collapse>
    </Background>
  );
};

export default NavBar;
