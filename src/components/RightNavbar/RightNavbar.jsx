import { useEffect, useState, React } from 'react'
import axios from 'axios'
import './rightNavbar.css'

function RightNavbar() {
  const [newsData, setNewsData] = useState([])

  async function getNews() {
    try {
      const response = await axios.get('https://kontests.net/api/v1/all')
      setNewsData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  function getImage(title) {
    let url = {
      HackerRank: '/image/HackerRank.png',
      CodeChef: '/image/codeChef.jpg',
      TopCoder: '/image/topCoder.png',
      LeetCode: '/image/leetCode.png',
      Toph: '/image/Toph.png',
      HackerEarth: '/image/hackerEarth.png',
      CodeForces: '/image/codeForces.png',
      AtCoder: '/image/atCoder.png',
      CSAcademy: '/image/csAcademy.png'
    }

    return <img src={url[title]} alt={title}></img>
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <div className='newNavR'>
      <h3>Hackathons</h3>
      <div className='newNavR--scroll'>
        <div className='newNavR--list'>
          {newsData ? (
            newsData
              .filter(item => {
                if (
                  item.site === 'HackerRank' ||
                  item.site === 'LeetCode' ||
                  item.site === 'CodeChef' ||
                  item.site === 'AtCoder' ||
                  item.site === 'TopCoder' ||
                  item.site === 'HackerEarth' ||
                  item.site === 'Toph' ||
                  item.site === 'CSAcademy' ||
                  item.site === 'CodeForces'
                ) {
                  return true
                }
                return false
              })
              .map((item, index) => (
                <a href={item.url} key={index} target='_blank' rel='noreferrer'>
                  <div className='NavR--article'>
                    <div className='imgBackground'>{getImage(item.site)}</div>
                    <p>{item.name}</p>
                  </div>
                </a>
              ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default RightNavbar
