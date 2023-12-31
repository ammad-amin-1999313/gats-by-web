import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;
  console.log(title);
  return (
    <nav>
      <h1>{title}</h1>
      <div className="links inline-block text-right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  );
}
