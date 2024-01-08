import { Component } from 'react'

export default class Presentation extends Component {
  render() {
    return (
      <div className="intro">
        <div className="message">
          <p>
          " La vie par son essence nous offre des expériences différentes, face à certaines situations je me suis sentie impuissante. Je veux m'offrir les moyens d'agir à moi ainsi qu'à toutes les personnes engagées avec nous dans cette aventure, la pouvoir d'agir face aux différentes injustices de la vie. L'accès à l'éducation, la santé et l'emploi ne doit plus être un luxe même pour les démunis et désœuvrés."
          </p>
          <br />
          <span></span>
          <span>Fondatrice & Présidente</span>
          <svg className='svgcolor' preserveAspectRatio="xMidYMid meet" data-bbox="12.5 19.999 175 160.002" viewBox="12.5 19.999 175 160.002" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
            <g>
              <path d="M114.733 174.579c45.255-32.506 41.878-73.139 31.072-75.172-9.457-1.355-18.913-4.064-27.018-11.515-15.536-15.576-16.21-40.633-.676-56.208a39.47 39.47 0 0 1 56.064 0c23.641 24.379 12.157 71.787-6.08 101.585-8.105 13.546-19.588 31.154-48.632 46.732l-4.73-5.422z" fill="#FFFFFF" data-color="1"></path>
              <path d="M20.442 174.579c45.255-32.506 41.878-73.139 31.071-75.172-9.457-1.355-18.913-4.064-27.018-11.515-15.536-15.577-16.211-40.634-.676-56.209a39.47 39.47 0 0 1 56.064 0c23.641 24.379 12.157 71.787-6.08 101.585C65.697 146.814 54.215 164.422 25.17 180l-4.728-5.421z" fill="#FFFFFF" data-color="1"></path>
            </g>
          </svg>

        </div>

        <div className="images">

          <div className='imageflex'>
            <img src="src/assets/img1.jpg" alt="carl" />
          </div>

          <div className="imageflex2">
            <div className='textimage'>
              <h1>Qui était Carl ?</h1>
              <p>
                Né le 15 avril 2009, et décédé le 29 juin 2021, Carl était un petit garçon sensible, intelligent et attentionné. Il a grandi entouré de sa maman, et de ses frères et soeurs, Steffy, Peter et Tim. Lorsque leur père est sorti de prison, après une condamnation pour agressions sexuelles sur Steffy, le Juge aux Affaires Familiales (JAF) lui a accordé un droit de visite et d'hébergement pour le plus jeune de ses enfants et Carl a ainsi dû aller chez lui 1 week-end sur 2 et la moitié des vacances. Au fil du temps, sa santé psychologique s'est dégradée, et au suicide de leur maman en 2019, Carl a révélé avoir lui aussi subi des agressions sexuelles de la part de leur père. Sa grande soeur Steffy a obtenu sa garde, au prix d'une guerre judiciaire permanente avec leur père, mais malgré tous ses efforts pour lui redonner espoir, Carl a fini par renoncer en s'ôtant la vie à l'âge de 12 ans...
              </p>
            </div>
          </div>

        </div>

        <div className="chiffres">
          <h1>Quelques chiffres...</h1>

          <div className="stat">
            <div className="statCard card1">
              <div className="chiffre">
                <span>Nord-Ouest</span>
                <span>et</span>
                <span>Sud-Ouest</span>
              </div>

              <div>
                <p>2.245 écoles</p>
                <p>ne fonctionnent</p>
                <p>toujours pas</p>
                <a className='statCard card1' href="https://news.un.org/fr/story/2023/10/1140102">source: ONU Info</a>
              </div>
            </div>

            <div className="statCard card2">
              <div className="chiffre">
                <span>Région</span>
                <span>de</span>
                <span>Extrême-Nord</span>
              </div>

              <div >
                <p>482.000 enfants</p>
                <p>ont besoin d'aide</p>
                <p>humanitaire</p>
                <a className='statCard card2' href="https://news.un.org/fr/story/2023/10/1140102">source: ONU Info</a>
              </div>
            </div>
            <div className="statCard card3">
              <div className="chiffre">
                <span>+ DE</span>
                <span>1,4 million</span>
                <span>ENFANTS</span>
              </div>

              <div >
                <p>Ont besoin </p>
                <p>d’une assistance</p><br/>
             
                <a className='statCard card3' href="https://reliefweb.int/report/cameroon/14-million-denfants-dage-scolaire-au-cameroun-ont-besoin-dacceder-une-education-de-qualite">Source: reliefweb.int</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
