import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

// Do Not Use The Images In Production

const portfoliodata = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial',
    github: 'https://github.com',
    demo: 'https://dribble.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Chart template & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribble.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashbaord UI kit for data design apps',
    github: 'https://github.com',
    demo: 'https://dribble.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribble.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Chart templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribble.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Chart templates & infographics in PSD',
    github: 'https://github.com',
    demo: 'https://dribble.com/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          portfoliodata.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
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