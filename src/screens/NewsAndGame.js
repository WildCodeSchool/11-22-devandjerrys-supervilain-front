const NewsAndGame = () => {


    return (
        <>
            <div className="newspagecontainer">
                <div className="news-container">
                    <h3 className="title-news">" News du moment ! "</h3>
                    <div className="cards-container">
                        <div className="card-body">
                            <h4 className="card-title">NEWS</h4>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">NEWS</h4>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">NEWS</h4>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">NEWS</h4>
                        </div>
                    </div>
                </div>
                <div className="game-container">
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
                </div>
            </div>
        </>
    )

}

export default NewsAndGame