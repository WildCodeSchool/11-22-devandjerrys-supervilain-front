const NewsAndGame = (props) => {

    props.setTitle('THE DEAD AGENCY -')
    props.setTitleColorRed('NEWS / ')
    props.setTitleColorBlue('JEUX')

    return (
        <>
            <div className="news-container">
                <h3 className="title-news">"News du moment !"</h3>
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
                <h3 className="title-game">Trouver votre nom de super-vilain avec vos initiales !</h3>
                <div className="the-game">
                <div className="game-body">
                    <h4 className="game-title">NEWS</h4>
                </div>
                </div>
            </div>
        </>
    )

}

export default NewsAndGame