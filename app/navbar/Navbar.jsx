"use client";

import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function Navbar() {

    // Can't use any hook in server but can use hooks in client using "use client";
    let pathName = usePathname();

    let links = [
        {path: '/', link: 'Home'},
        {path: '/products', link: 'Products'},
        {path: '/categories', link: 'Categories'},
        {path: '/cart', link: 'Cart'},
    ];


    // console.log(pathName);

    return <>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">

                    {links.map((link, index) => <li key={index} className="nav-item">
                            <Link className={pathName === link.path? 'nav-link bg-info': 'nav-link'} href={link.path}>
                                {link.link}
                            </Link>
                        </li>)}

                        <li className="nav-item">
                            <Link className='nav-link' href='/products/#mysection'>
                                mySection
                            </Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link className="nav-link" href="/">
                                Home
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className={pathName === '/categories'? 'nav-link bg-info': 'nav-link'} href="/categories">
                                Categories
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={pathName === '/cart'? 'nav-link bg-info': 'nav-link'} href="/cart">
                                Cart
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav></>
}
