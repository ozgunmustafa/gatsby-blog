import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import metaFetcher from "meta-fetcher"
import { graphql } from "gatsby"

const Bookmarks = ({ data, location }) => {
  const [bookmarks, setBookmarks] = React.useState(data.allBookmarkedJson.edges)
  const [bookmarkMeta, setBookmarkMeta] = React.useState([])
  const [filteredBookmarks, setFilteredBookmarks] = React.useState([])

  const [categories, setCategories] = React.useState([])
  const [filter, setFilter] = React.useState("")

  React.useEffect(() => {
    const renderBookmarks = () => {
      const tempArray = []
      const tempMetaArr = []

      for (let bookmark of bookmarks) {
        //const metaBookmark = await metaFetcher(bookmark.node.url)
        tempMetaArr.push({ ...bookmark.node })
        for (let category of bookmark.node.categories) {
          tempArray.push(category)
        }
      }
      const uniqueSet = new Set(tempArray)
      const backToArray = [...uniqueSet]
      setCategories(backToArray)
      setBookmarkMeta(tempMetaArr)
      setFilteredBookmarks(tempMetaArr)
    }
    renderBookmarks()
  }, [bookmarks])

  React.useEffect(() => {
    setFilteredBookmarks(
      filter
        ? bookmarkMeta.filter(mark => mark.categories.includes(filter))
        : bookmarkMeta
    )
  }, [filter, bookmarkMeta])

  return (
    <Layout location={location} title="Portfolyo">
      <Seo title="Beğendiğim ve kategorize ettiğim yer işaretlerim" />
      <h1 className="page-title">
        Frontend ve tasarım alanında kullandığım veya günün birinde lazım olur
        diye listeye attığım yer işaretlerim. Şunu da listeye koy dediğiniz
        şeyleri iletirseniz listeye alayım.
      </h1>

      <p className="mb-10">İhtiyacına göre filtrele:</p>

      <div className="category-wrapper">
        <ul className="category-list">
          <button
            onClick={() => setFilter("")}
            className={filter === "" ? "active" : ""}
          >
            Hepsi
          </button>
          {categories.map((elm, index) => {
            return (
              <button
                onClick={() => setFilter(elm)}
                className={filter === elm ? "active" : ""}
                key={index + 90}
              >
                {elm}
              </button>
            )
          })}
        </ul>
      </div>

      <div className="">
        {filteredBookmarks.map((item, index) => {
          return (
            <div className="link-card mb-15" key={index}>
              <div>
                <a href={item.url} target="_blank" className="link-card_title">
                  {item.baseUrl}
                </a>
                <span className="link-card_desc d-block ">
                  {item.description}
                </span>
                <div className="bookmark-categories d-flex">
                  {item.categories.map((ct, index) => {
                    return (
                      <small
                        className="highlighted"
                        key={index}
                        onClick={() => setFilter(ct)}
                      >
                        #{ct}
                      </small>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allBookmarkedJson {
      edges {
        node {
          baseUrl
          url
          categories
          description
        }
      }
    }
  }
`

export default Bookmarks
