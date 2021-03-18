import './Footer.scss'

const Footer = () => {
  return(
    <footer className="footer">
      <small className="footer__owner">
    Made with <i className="fas fa-cat"></i> by Lucia Mezquida
      </small>
      <nav role='navigation'>
        <ul className="footer__nav">
          <li className="list" >
            <a
              href="//www.linkedin.com/in/luciamezquidajuan/"
              className="footer__link"
              title="Linkedin"
              target="_blank"
              rel="noreferrer"
              ><i className="fab fa-linkedin-in"></i
            ></a>
          </li>
          <li className="list" >
            <a
              href="//github.com/LuciaMezquida"
              className="footer__link"
              title="Github"
              target="_blank"
              rel="noreferrer"
              ><i className="fab fa-github-alt"></i
            ></a>
          </li>
          <li className="list" >
            <a
              href="//twitter.com/LuciCodes"
              className="footer__link"
              title="Twitter"
              target="_blank"
              rel="noreferrer"
              ><i className="fab fa-twitter"></i
            ></a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
export default Footer