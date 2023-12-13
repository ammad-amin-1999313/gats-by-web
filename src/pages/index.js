import * as React from "react";
import Layout from "../components/Layout";
import "../styles/home.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";

export default function Home({ data }) {
  console.log("test", data);
  return (
    <Layout>
      <section className="header flex justify-between items-center ">
        <div>
          <h2 className="text-4xl font-light">Design</h2>
          <h3 className="text-3xl mb-4 font-light">Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester</p>
          <Link
            className="inline-block bg-[#d42990] py-1 px-3 rounded font-normal mt-4"
            to="/projects"
          >
            My Portfolio projects
          </Link>
        </div>
        {/* <img src="/banner.png" alt="site banner" style={{ maxWidth: "50%" }} /> */}
        <StaticImage src="../images/banner.png" alt="mm" />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query MyImage {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
