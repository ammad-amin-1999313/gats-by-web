import React from "react";
import Layout from "../../components/Layout";
import "../../styles/projects.module.css";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

// --------------
export default function Projects({ data }) {
  const projects = data.project.nodes;
  const contact = data.contact.siteMetadata.contact;
  console.log(projects);
  return (
    <Layout>
      <div className="portfolio text-center">
        <h2 className="text-3xl mt-28">Portfolio</h2>
        <h3 className="text-2xl font-light">
          Projects & Websites I've Created
        </h3>
        <div
          className=" w-12/12 mx-auto flex flex-wrap justify-between"
          style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          {projects?.length > 0 &&
            projects.map((project) => (
              <Link
                to={"/projects" + project.frontmatter.slug}
                key={project.id}
                className="m-2"
              >
                <div>
                  <GatsbyImage
                    image={
                      project?.frontmatter?.thumb?.childImageSharp
                        ?.gatsbyImageData
                    }
                    alt="ok"
                    style={{ maxHeight: "250px", maxWidth: "370px" }}
                    className="rounded"
                  />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            ))}
        </div>
        <p>Like what you see Email me at {contact} for a Quote!</p>
      </div>
    </Layout>
  );
}
export const query = graphql`
  query ProjectsPage {
    project: allMarkdownRemark(sort: { id: DESC }) {
      nodes {
        frontmatter {
          stack
          title
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
