import styles from 'styled-components'

const FooterSection = styled.div ` 
background: #000;
color: #fff;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
`

import React from 'react'

const Footer =() => {
    return (
        
            <FooterSection>
                <p>Ian Hancock 2021 All Rights Reserved</p>
            </FooterSection>
    
    )
}

export default Footer




