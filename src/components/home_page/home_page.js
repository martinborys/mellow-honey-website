import React from 'react';
import './home_page.css'
import cafe210 from '../../assets/cafe210.jpg'

const HomePage = () => {
    return(
        <body>
            <div className='cafe210'>
                <img src={cafe210} alt='mellow honey cafe 210' />
            </div>
            <div className='iframe-container'>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Y6Cfx-G1QCY" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            </div>
        </body>
    );
}

export default HomePage