import React from 'react'
import { useTransition, animated, config } from 'react-spring'
import introImage from '../images/1.jpg'
import beeKeepr from '../images/2.jpg'
import runner from '../images/4.jpg'
import french from '../images/3.jpg'
import coder from '../images/5.jpg'

const slides = [
    {id: 1, image: introImage, text: 'Keen Gardner'},
    {id: 2, image: coder, text: 'Curious Coder'},
    {id: 3, image: french, text: 'Avid Learner of the French Language'},
    {id: 4, image: runner, text: 'Active Runner'},
    {id: 5, image: beeKeepr, text: 'Future Bee Keeper'},

]


function ImageSlider(){
    
    const [index, set] = React.useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { position: 'absolute', opacity: 0,  },
        enter: { opacity: 1 },
        leave: { opacity: 0},
        config: config.slow
    })
    React.useEffect(() => void setInterval(() => set(state => (state + 1) % 5), 3000), [])

    return transitions.map(({ item, props, key}) => (
        <animated.div
        key={key}
        style={{...props}}
        >
        <img src={item.image} alt="slider" className="section-image"/>
        <p className="slide-text">{item.text}</p>
        </animated.div>
    ))
    
}

export default ImageSlider