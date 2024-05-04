'use client';

import React from 'react'
import Link from "next/link";

export default function Navbar() {


    console.log("Navbar ......");

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
                        <li className="nav-item">
                            <Link className="nav-link" href="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/products">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/categories">
                                Categories
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/cart">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav></>
}
