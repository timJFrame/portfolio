import React from 'react'

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

function Home(){
    
    return(
       <Parallax pages={5} scrolling={true} >

           <ParallaxLayer speed={0.5} style={{backgroundColor: 'lightBlue', opacity: 0.1}}>
            <h2>Timothy Frame</h2>
           </ParallaxLayer>

           <ParallaxLayer speed={0.5} style={{backgroundColor: 'lightRed', opacity: 0.1}}>
            <h2>Bio</h2>
           </ParallaxLayer>

           <ParallaxLayer speed={0.5} style={{backgroundColor: 'lightGreen', opacity: 0.1}}>
            <h2>Skills</h2>
           </ParallaxLayer>

           <ParallaxLayer speed={0.5} style={{backgroundColor: 'lightOrange', opacity: 0.1}}>
            <h2>Projects</h2>
           </ParallaxLayer>

           <ParallaxLayer speed={0.5} style={{backgroundColor: 'lightOrange', opacity: 0.1}}>
            <h2>Contact</h2>
           </ParallaxLayer>

       </Parallax>
    )

}

export default Home