import { useEffect } from "react"
import newsbat from '../assets/images/newsbatou.png'
import newsfat from '../assets/images/newsfatalis.png'
import newscat from '../assets/images/newsfatcat.png'
import newscity from '../assets/images/newscity.png'
import line from '../assets/images/Line.svg'

const NewsAndGame = () => {

    useEffect(() => {
        document.body.classList.add('newgame-layout')
        return () => {
        document.body.classList.remove('newgame-layout')
        }
    }, [])

    return (
        <>
            <div className="newspagecontainer">
                <div className="news-container">
                    <h3 className="title-news">" News du moment ! "</h3>
                    <img className='line' src={line} alt='a line'></img>
                    <div className="cards-container">
                        <div className="card-body">
                            <img className="img-card" src={newsbat} alt=""></img>
                            <p>Gotham City,<br/><br/>une nouvelle fois libérer des griffes du Joker par notre cher Batou.<br/><br/>sa popularité grimpe en flèche.<br/><br/>les clefs de la ville lui seront remis la semaine prochaine.</p>
                        </div>
                        <div className="card-body">
                            <img className="img-card" src={newsfat} alt=""></img>
                            <p>Dr Fatalis,<br/><br/>aurait pu détruire Los Angeles ce week-end,<br/><br/>mais grâce à l'intervention de nos super-héros<br/><br/>le pire a pu être évité.</p>
                        </div>
                        <div className="card-body">
                            <img className="img-card" src={newscat} alt=""></img>
                            <p>Catwoman,<br/><br/> élues super-vilain de l'année 2022<br/><br/>en lutte contre la grossophobie des chats,<br/><br/> rappelons qu'elle a fondé l'association two cat one fat en 2019<br/><br/>qui permet l'adoption de centaine de chat obèse chaque année.</p>
                        </div>
                        <div className="card-body">
                            <img className="img-card" src={newscity} alt=""></img>
                            <p>New York,<br/><br/>en ruines après le combat opposant Phénix et Darkseid<br/><br/>contre Ironman et Flash.<br/><br/>A l'heure Actuel nous comptons quelques milliers de mort<br/><br/>et autant de blessé.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="game-container">
                    <h3 className="title-game">" Trouver votre nom de super-vilain avec vos initiales ! "</h3>
                    <div className="game">
                        <div className="game-body">
                            <div className="firstletterfirstname">
                                <label className="game-input">Première lettre de votre prénom
                                    <input className="firstname" type="text" name="first letter first" minlength ="1" maxlength="1"></input>
                                </label>
                            </div>
                            <div className="firstletterlastname">
                                <label className="game-input">Première lettre de votre nom
                                    <input className="lastname" type="text" name="first letter last" minlength ="1" maxlength="1"></input>
                                </label>
                            </div>
                            <button className="valide-name" type="submit">Valider !</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )

}

export default NewsAndGame