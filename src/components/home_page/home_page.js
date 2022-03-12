import React from 'react';
import './home_page.css'
import cafe210 from '../../assets/cafe210.jpg'

const HomePage = () => {
    return(
        <body>
            <div className='cafe210'>
                <img src={cafe210} alt="cafe210"/>
            </div>
        </body>
    );
}

export default HomePage