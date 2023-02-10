// Import React
import React from 'react'
// Import css for rightNavbar
import './rightNavbar.css'

// our function
function RightNavbar() {
  return (
    // created a navBar for the right side, this area is open to having different content. Some ideas: creating a meet the dev team, creating links to different groups a user can join etc.
    <section className='r-navbar'>
      <div className="r-items">
        <p className='suggestion'>Suggestions for you: </p>
        <div className="r-item">
          <p>
            <a href="www.google.com">Anna</a>
          </p>
          <p>Expedita, quod.
          </p>
          <button className="btn">follow</button>
        </div>
        <div className="r-item">
          <p>
            <a href="www.google.com">Ryan</a>
          </p>
          <p>Expedita, quod.
          </p>
          <button className="btn">follow</button>
        </div>
        <div className="r-item">
          <p>
            <a href="www.google.com">Jose</a>
          </p>
          <p>Expedita, quod.
          </p>
          <button className="btn">follow</button>
        </div>
        <div className="r-item">
          <p>
            <a href="www.google.com">Nick</a>
          </p>
          <p>Expedita, quod.
          </p>
          <button className="btn">follow</button>
        </div>
        <div className="r-item">
          <p>
            <a href="www.google.com">Vasilis</a>
          </p>
          <p>Expedita, quod.
          </p>
          <button className="btn">follow</button>
        </div>
        <div className="r-item">
          <p>
            <a href="www.google.com">Jimy</a>
          </p>
          <p>Expedita, quod.
          </p>
          <button className="btn">follow</button>
        </div>
        <div className="r-item">
          <p>
            <a href="www.google.com">Ron</a>
          </p>
          <p>Expedita, quod.
          </p>
          <button className="btn">follow</button>
        </div>
        <div className="r-item">
          <p>
            <a href="www.google.com">Ari</a>
          </p>
          <p>Expedita, quod.
          </p>
          <button className="btn">follow</button>
        </div>
      </div>
    </section>

  )
}

export default RightNavbar