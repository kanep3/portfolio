import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'sustainable clothing website from university',
    explore: 'https://github.com/kanep3/trash-website',
    demo: 'https://kanep3.github.io/trash-website/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'book recommender system in figma',
    explore: 'https://www.figma.com/proto/vNThhmWgPzgbqlJtXXDUKb/cs2003-(new)?node-id=2%3A2&starting-point-node-id=2%3A2&scaling=scale-down',
    demo: 'https://dribbble.com/shots/18450463-Book-Recommender-System'
  },
  {
    id: 3,
    image: IMG3,
    title: 'personal website built during an event',
    explore: 'https://github.com/kanep3/portfolio',
    demo: 'https://personal-website-2020-kanepe.netlify.app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'cli battleship game in java',
    explore: 'https://github.com/kanep3/battleship-cli',
    demo: 'https://kanep3.github.io/battleship-cli/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>introducing my</h5>
      <h2>portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, explore, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={explore} className='btn' target='_blank' rel="noreferrer">explore</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio