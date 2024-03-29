import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BestBlogPost from '../components/BestBlogPost'
import FullWidthImage from '../components/FullWidthImage'

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  intro,
}) => {
  return (
    <div>
      <FullWidthImage img={image} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div>
                  <div>
                    <div>
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div>
                      <p className="subtitle text">{mainpitch.description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/about">
                        More about me
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="title">
                      Best posts in blog
                    </h3>
                    <BestBlogPost />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image
        subheading
        mainpitch {
          title
          description
        }
        intro {
          blurbs {
            image
            name
          }
        }
      }
    }
  }
`
