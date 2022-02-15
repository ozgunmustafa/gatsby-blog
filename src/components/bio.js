/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaBehance, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            instagram
            behance
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpg"
        width={95}
        height={95}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          <strong className="d-block">{author.name}</strong>{" "}
          {author?.summary || null}
        
          <div className="d-flex align-items-center social-icons">
           
            <a href={social?.linkedin} className="icon">
              <FaLinkedinIn />
            </a>
            <a href={social?.behance} className="icon">
              <FaBehance />
            </a>
            <a href={social?.instagram} className="icon">
              <FaInstagram />
            </a>
          </div>
        </p>
      )}
    </div>
  )
}

export default Bio
