import React from "react";
import "../globals.css";
import Link from "next/link";

export default function LayOut({ children }) {
  
  
  return <>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <ul>
              <li>
                <Link href={"/categories/fashion"}>Fashion</Link>
              </li>
              <li>
                <Link href={"/categories/electronics"}>Electronics</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-10">{children}</div>
        </div>
      </div>
    </>
}
