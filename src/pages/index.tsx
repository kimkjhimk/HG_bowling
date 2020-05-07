import * as React from 'react'
import Link from 'gatsby-link'
import styled from "@emotion/styled"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

interface IndexPageProps {
    data: {
        site: {
            siteMetadata: {
                title: string
            }
        }
    }
}

const Index: React.FC<IndexPageProps> = ({data}) => {
    return (
        <Container>
            <div>
                <h1>Hi people</h1>
                <p>
                    Welcome to your new{' '}
                    <strong>{data.site.siteMetadata.title}</strong> site.
                </p>
                <p>Now go build something great.</p>
                <Link to="/page-2/">Go to page 2</Link>
            </div>
        </Container>
    )
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

