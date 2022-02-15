import * as React from "react"
import { Link } from "gatsby"

export default function () {
  return (
    <header className="header">
      <Link className="header-link title" to="/">
        ozgunmustafa.com
      </Link>
      <nav style={{ marginTop: 5 }}>
        <Link className="header-link" to="/portfolyo">
          Çalışmalarım
        </Link>
        <Link className="header-link" to="/hakkimda">
          Hakkımda
        </Link>
        <Link className="header-link" to="/bookmarks">
          Bookmarks
        </Link>
      </nav>
    </header>
  )
}
