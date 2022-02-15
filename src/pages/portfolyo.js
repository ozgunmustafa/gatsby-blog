import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GrReactjs } from "react-icons/gr"
import Bio from "../components/bio"

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaVuejs,
  FaBootstrap,
} from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
import projects from "../data/projects.json"

const Portfolyo = ({ data, location }) => {
  return (
    <Layout location={location} title="Portfolyo">
      <Seo title="Bu zamana kadar Frontend alanında yaptığım çalışmalar." />
      <Bio />

      <h1 className="page-title">
        Aşağıda frontend alanında yaptığım çalışmaları sergiledim. Bunları
        inceleyebilir, yorumlarınızı iletebilirsiniz.
      </h1>

      <div className="portfolyo-grid">
        {projects.map(project => {
          return (
            <div className="portfolyo-card">
              <div className="portfolyo-card_header aspect-ratio-container">
                <img
                  className="portfolyo-card_img aspect-ratio-item"
                  src={project.logo}
                />
              </div>
              <div className="portfolyo-card_body">
                <div className="d-flex justify-content-center tool-list flex-wrap">
                  {project.tools.map(tool => {
                    return (
                      <span className="item" title={tool}>
                        {tool === "html" ? (
                          <FaHtml5 />
                        ) : tool === "css" ? (
                          <FaCss3Alt />
                        ) : tool === "react" ? (
                          <GrReactjs />
                        ) : tool === "scss" || tool === "sass" ? (
                          <FaSass />
                        ) : tool === "vue" ? (
                          <FaVuejs />
                        ) : tool === "bootstrap" ? (
                          <FaBootstrap />
                        ) : tool === "javascript" ? (
                          <SiJavascript />
                        ) : (
                          ""
                        )}
                      </span>
                    )
                  })}
                  {/* <span className="item" title="HTML">
                    <FaHtml5 title="HTML" />
                  </span>
                  <span className="item" title="CSS">
                    <FaCss3Alt />
                  </span>
                  <span className="item" title="ReactJS">
                    <GrReactjs />
                  </span>
                  <span className="item">
                    <SiJquery title="JQuery" />
                  </span> */}
                </div>
                <a href={project.url}>
                  <h2 className="portfolyo-card_title text-center">
                    {project.title}
                  </h2>
                </a>

                {/* 
                <p className="portfolyo-card_desc text-center">
                  {project.description}
                </p>*/}
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Portfolyo
