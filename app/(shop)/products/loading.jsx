import React from 'react'

export default function Loading() {
  return <>
  <section id='loading' className='top-0 bottom-0 start-0 end-0 position-fixed d-flex justify-content-center align-items-center text-white z-3 bg-opacity-25 bg-black'>
    <i className='fas fa-spinner fa-spin'></i>
  </section>
  </>
}
