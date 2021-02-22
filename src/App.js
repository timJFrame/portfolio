import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import ImageSlider from './components/ImageSlider'
import sunflower from './images/sunflower.gif'
import poppy from './images/poppy.gif'
import tulip from './images/tulip.gif'
import daisy from './images/daisy.gif'
import githubLogo from './images/github-logo.png'
import linkedinLogo from './images/linkedin-logo.png'
import emailLogo from './images/mail-logo.png'
import carrotButton from './images/button.png'
import beginnerSkills from './data/beginnerSkills'
import confidentSkills from './data/confidentSkills'
import visualSkills from './data/visualSkills'
import softSkills from './data/softSkills'
import Projects from './components/Projects'


class App extends React.Component {
    render(){

    return(
      
      
       <Parallax pages={5}   vertical ref={ref =>  this.parallax = ref} >

           
           <ParallaxLayer factor={1} offset={0} speed={0.5}>
             <div className="intro-container-div">
               <div className="mock-nav-bar">
               <ul >
                 <li onClick={() => this.parallax.scrollTo(1)}><button>Bio</button></li>
                 <li onClick={() => this.parallax.scrollTo(2)}><button>Skills</button></li>
                 <li onClick={() => this.parallax.scrollTo(3)}><button>Projects</button></li>
                 <li onClick={() => this.parallax.scrollTo(4)}><button>Contact</button></li>
               </ul>
               </div>


             <div className="intro-div">
             <h2>Timothy Frame</h2>
             <h3>Junior Full-stack Developer</h3>
             </div>

             <div className="button-div">
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
                 <ImageSlider/>
               </div>
               
               </div>
               
             </div>

             <div className="button-div">
              <img src={carrotButton} alt="carrot button"   onClick={() => this.parallax.scrollTo(2)}/>
             </div>

             </div>
           </ParallaxLayer>

           <ParallaxLayer factor={1}  offset={2} speed={0.5}>
            <div className="container-div">
             <div className="content-div">
               <div className="content-heading-div">
               <h2>Skills</h2>
               <div className="skills-key-div">
              
                 <div className="skill-type-div">
                 <p>Confident = </p>
                 <img src={sunflower} alt="sunflower" className="flower-image"/>
                 </div>
                 <div className="skill-type-div">
                 <p>Beginner = </p>
                 <img src={poppy} alt="poppy" className="flower-image"/>
                 </div>
                 <div className="skill-type-div">
                 <p>Visual = </p>
                 <img src={tulip} alt="tulip" className="flower-image"/>
                 </div>
                 <div className="skill-type-div">
                 <p>Soft = </p>
                 <img src={daisy} alt="daisy" className="flower-image"/>
                 </div>
               </div>
               </div>
               <div className="skills-container">
                 {confidentSkills.map(skill => (
                   <div className="skills-div">
                    <img src={skill.image} alt="sunflower" className="flower-image"/>
                    <p>{skill.skill}</p>
                    </div>
                 ))
                 }
                  {beginnerSkills.map(skill => (
                   <div className="skills-div">
                    <img src={skill.image} alt="poppy" className="flower-image"/>
                    <p>{skill.skill}</p>
                    </div>
                 ))
                 }
                  {visualSkills.map(skill => (
                   <div className="skills-div">
                    <img src={skill.image} alt="tulip" className="flower-image"/>
                    <p>{skill.skill}</p>
                    </div>
                 ))
                 }
                  {softSkills.map(skill => (
                   <div className="skills-div">
                    <img src={skill.image} alt="daisy" className="flower-image"/>
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
               <Projects/>
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
                
               <div className="contacts-container">

                 <div className="contact-div">
                  <a href="https://github.com/timJFrame" target="_blank" rel="noreferrer noopener">
                  <img src={githubLogo} alt="github logo" className="contact-logo" />
                  </a>
                 </div>

                 <div className="contact-div">
                  <a href="https://www.linkedin.com/in/timothyframe/" target="_blank" rel="noreferrer noopener">
                  <img src={linkedinLogo} alt="linkedin logo" className="contact-logo" />
                  </a>
                 </div>

                 <div className="contact-div">
                  <a href="mailto:timothy.jarred.frame@gmail.com">
                  <img src={emailLogo} alt="email logo" className="contact-logo" />
                  </a>
                 </div>

               
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
