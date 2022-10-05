import React from "react"
import { quoteList } from "./Quote.js"

export default function App() {
    const [quote, setQuote] = React.useState(quoteList[Math.floor(Math.random() * quoteList.length)])
    const colorList = ["#C4A168","#0E5A9A","#8E368F","#8E368F","#0BDE85","#886A48","#B89594","#03CF19","#6D4E2C","#9E3C77","#9E3C77","#0A5250","#4EC883"];
    
    const [color, setColor] = React.useState(colorList[Math.floor(Math.random() * colorList.length)])
    function getRandomQuote() {
        setQuote(quoteList[Math.floor(Math.random() * quoteList.length)]);
        getRandomColor();
    }

    function getRandomColor() {
        setColor(colorList[Math.floor(Math.random() * colorList.length)])
    }
    
    document.body.style = `background: ${color}`; //Updates the body background-color
    
    return (
        <div className="main-content" style={{ color : color, backgroundColor: color }}>
            <div id="quote-box" className="quote-box">
                <blockquote id="text" className="text">"{quote.quote}"</blockquote>
                <p id="author" className="author">- {quote.author}</p>
                <div id="buttons" className="buttons-box">
                    <div className="left-buttons">
                        <a href={`https://twitter.com/intent/tweet?text="${quote.quote}" by ${quote.author}`} 
                            id="tweet-quote" 
                            style={{ backgroundColor: color }} 
                            target="_blank"
                        >Twitter
                        </a>
                        <button 
                            id="tumbler-quote" 
                            className="button" 
                            style={{ backgroundColor: color }}
                        >Tumblr
                        </button>
                    </div>
                    <button 
                        onClick={getRandomQuote} 
                        id="new-quote" className="button" 
                        style={{ backgroundColor: color }}
                    >New quote
                    </button>
                </div>
            </div>
        </div>
    )
}
