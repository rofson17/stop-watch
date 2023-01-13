import { deleteCookie, getCookie } from 'cookies-next';
import Head from 'next/head'
import { useEffect, useReducer, useState } from 'react';

import Navbar from '../components/Navbar';
import Watch from '../components/Watch';


export default function Home() {

  const [level, setLevel] = useState(1);

  useEffect(() => {
    if (getCookie('level')) {
      if (parseInt(getCookie('level')) >= 7) {
        deleteCookie('level');
        setLevel(0);
      }
      else
        setLevel(parseInt(getCookie('level')));
    }
  }, []);
  (level)

  return (
    <>
      <Head>
        <title>Stop Watch</title>
      </Head>
      <Navbar position={level} />
      <Watch setLevel={setLevel} level={level} />
    </>

  )
}
