import { Link, routes } from '@redwoodjs/router'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <>
    <header>
      <h1>
        <Link to={routes.home()}>FinTech App</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
            <Link to={routes.posts()}>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
    {children}
  </>
}

export default DefaultLayout
