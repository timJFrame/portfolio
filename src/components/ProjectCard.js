import React from 'react'
import  Modal  from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



function ProjectCard({name, image, description }){

    const [show, setShow] = React.useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return(
        <>
        <div className="project-card" >
            <h4>{name}</h4>
            <img src={image} alt={name} className="project-image"/>
            <Button 
            variant="outline-secondary"
            size="sm" block
            onClick={handleShow}
            className="project-card-button"
            >
            Open</Button>
            </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>{description}</p>
        </Modal.Body>
        </Modal>
          </>
    )
}

export default ProjectCard