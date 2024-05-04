import React from 'react'
import logo from '../../../public/logo.jpg';
import Image from 'next/image';


export default function Cart() {
  return <>
  <h1>Cart</h1>
  <Image src={logo} width={300} height={400} alt="" />
  </>
}
