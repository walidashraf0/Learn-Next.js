'use client';
import React, { useEffect } from 'react';

export default function Error({ error }) {

    useEffect(()=> {
        console.error(error);
    }, [error])

  return <>
  <h2>Something went wrong!</h2>
  </>
}
