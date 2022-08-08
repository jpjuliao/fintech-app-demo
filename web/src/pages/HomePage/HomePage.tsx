import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'
import { useEffect, useState } from 'react'

const HomePage = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=Q5WZNTK4HUWLQ51T`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        let keys = Object.keys(actualData);
        console.log(keys);
        // console.log(array_slice(actualData, 1, 1, true));
        console.log(actualData['Meta Data']);
        setData([actualData['Meta Data']]);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>

      <ArticlesCell />

      <div className="App">
        <h1>API Posts</h1>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul>
          {data &&
            data.map(({ '1. Information': info }) => (
              <li>
                <p>{info}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default HomePage
