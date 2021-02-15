import React from 'react'
import introImage from './images/1.jpg'
import beeKeepr from './images/2.jpg'
import french from './images/3.jpg'
import sunflower from './images/sunflower.gif'
import carrotButton from './images/button.png'
import Carousel from 'react-bootstrap/Carousel'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'


const skills = [
  {
    skill: 'HTML',
    image: sunflower
  },
  {
    skill: 'CSS',
    image: sunflower
  },
  {
    skill: 'Sass',
    image: sunflower
  },
  {
    skill: 'Bulma',
    image: sunflower
  },
  {
    skill: 'Milligram',
    image: sunflower
  },  
  {
    skill: 'JavaScript',
    image: sunflower
  },
  {
    skill: 'React',
    image: sunflower
  },
  {
    skill: 'Node',
    image: sunflower
  },
  {
    skill: 'Express',
    image: sunflower
  },
  {
    skill: 'MongoDB',
    image: sunflower
  },
  {
    skill: 'Mongoose',
    image: sunflower
  },
  {
    skill: 'Python',
    image: sunflower
  },
  {
    skill: 'Django',
    image: sunflower
  },
  
  {
    skill: 'PostgresSQL',
    image: sunflower
  },
  {
    skill: 'Git',
    image: sunflower
  },
  {
    skill: 'GitHub',
    image: sunflower
  },
  {
    skill: 'Yarn',
    image: sunflower
  },
  {
    skill: 'NPM',
    image: sunflower
  },
  {
    skill: 'Insomina',
    image: sunflower
  },
  {
    skill: 'VS Code',
    image: sunflower
  },
  {
    skill: 'iTerm',
    image: sunflower
  },
  {
    skill: 'MapBox',
    image: sunflower
  },
  {
    skill: 'Django REST Framework',
    image: sunflower
  },
]

class App extends React.Component {
    render(){

    return(
      
      
       <Parallax pages={5}   vertical ref={ref =>  this.parallax = ref} >

           
           <ParallaxLayer factor={1} offset={0} speed={0.5}>
             <div className="intro-container-div">
             <div className="intro-div">
             <h2>Timothy Frame</h2>
             <h3>Junior full-stack developer</h3>
             </div>

             <div className="intro-button-div">
              <img src={carrotButton} alt="carrot button"   onClick={() => this.parallax.scrollTo(1)}/>
             </div>
             </div>
           </ParallaxLayer>

           <ParallaxLayer factor={1} offset={1} speed={0.5}>
            <div className="container-div">
             <div className="content-div">
               <div className="content-heading-div">
               <h2>Bio</h2>
               </div>
               
               <div className="text-and-carousel-conatiner">
               <div className="bio-text">
               <p>The process of creation and problem solving are two key concepts that have been prevalent to me while working as a photographer/retoucher. I began learning JavaScript to improve my Photoshop work-flow and discovered a passion for coding. Developing my technical skills and pair coding experiences with an Immersive Software Engineering program at General Assembly.</p>
                <p>I’m now looking to continue my coding journey as a junior full-stack developer within a workplace that prides itself on employee development and where I can make a valid contribution using my prior experience in visual aesthetics married with my strong technical skills in order to help develop a positive user experience. I'm also a....</p>
                </div>

               <div className="carousel-div">
               <Carousel>
                 <Carousel.Item  interval={2000}>
                   <img className="section-image"
                   src={introImage}
                   alt="intro"/>
                   
                <h3>Keen Gardner</h3>
              
                 </Carousel.Item>
                 <Carousel.Item  interval={2000}>
                   <img  className="section-image"
                   src={beeKeepr}
                   alt="intro"/>
                   <h3>Future Bee Keeper</h3>
                 </Carousel.Item>

                 <Carousel.Item  interval={2000}>
                   <img  className="section-image"
                   src={french}
                   alt="intro"/>
                   <h3>Avid Learner of the French Language</h3>
                 </Carousel.Item>
               </Carousel>
               </div>
               </div>
               
             </div>

             <div className="bio-button-div">
              <img src={carrotButton} alt="carrot button"   onClick={() => this.parallax.scrollTo(2)}/>
             </div>
             </div>
           </ParallaxLayer>

           <ParallaxLayer factor={1}  offset={2} speed={0.5}>
            <div className="container-div">
             <div className="content-div">
               <div className="content-heading-div">
               <h2>Skills</h2>
               </div>
               <div className="skills-container">
                 {skills.map(skill => (
                   <div className="skills-div">
                    <img src={skill.image} alt="sunflower" className="sunflower-image"/>
                    <p>{skill.skill}</p>
                    </div>
                 ))

                 }
               </div>
               
              
             </div>

             <div className="button-div">
              <img src={carrotButton} alt="carrot button"   onClick={() => this.parallax.scrollTo(3)}/>
             </div>
             </div>
           </ParallaxLayer>

           <ParallaxLayer factor={1}  offset={3} speed={0.5}>
                <div className="container-div">
             <div className="content-div">
               <div className="content-heading-div">
               <h2>Projects</h2>
               </div>
             </div>

             <div className="button-div">
              <img src={carrotButton} alt="carrot button"   onClick={() => this.parallax.scrollTo(5)}/>
             </div>
             </div>
           </ParallaxLayer>

           <ParallaxLayer factor={1}  offset={4}>
                 <div className="container-div">
             <div className="content-div">
               <div className="content-heading-div">
               <h2>Contact</h2>
               </div>
              
             </div>

             <div className="button-div">
              <img src={carrotButton} alt="carrot button"   onClick={() => this.parallax.scrollTo(0)}/>
             </div>
             </div>
           </ParallaxLayer>

       </Parallax>
       
    )
    }
}

export default App
