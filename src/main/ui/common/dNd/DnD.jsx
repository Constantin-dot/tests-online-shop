import classes from "./DnD.module.css"
import { useState } from "react"

export const DnD = () => {
    const [cardList, setCardList] = useState([
        {id: 1, order: 3, text: "карточка 3"},
        {id: 2, order: 1, text: "карточка 1"},
        {id: 3, order: 2, text: "карточка 2"},
        {id: 4, order: 4, text: "карточка 4"}
    ])
    const [currentCard, setCurrentCard] = useState(null)

    const dragStartHandler = (e, card) => {
        setCurrentCard(card)
    }

    const dragEndHandler = (e) => {
        e.target.style.background = 'white'
    }

    const dragOverHandler = (e) => {
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }

    const dropHandler = (e, card) => {
        e.preventDefault()
        setCardList(cardList.map(c => {
            if(c.id === card.id) {
                return {...c, order: currentCard.order}
            }
            if(c.id === currentCard.id) {
                return {...c, order: card.order}
            }
            return c
        }))
        e.target.style.background = 'white'
    }

    const sortCards = (a, b) => {
        if(a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }
        
    return <div className={classes.block}>
        {cardList.sort(sortCards).map((card) => 
            <div 
                onDragStart={(e) => dragStartHandler(e, card)}
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, card)}
                draggable={true}
                className={classes.card}
            >
                {card.text}
            </div>
        )}
    </div>
}
