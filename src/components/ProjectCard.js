/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import  Modal  from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



function ProjectCard({name, image, description, project, projectType, technologies, projectLink, githubLink }){

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

        <Modal show={show} onHide={handleClose} centered={true} size="lg" className="modal-card">
        <Modal.Header closeButton>
            <Modal.Title>{`${project}: ${name}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className="modal-content-text"><span className="modal-subheading">Time frame:</span>{` ${projectType}`}</p>
            <p className="modal-content-text"><span className="modal-subheading">Description:</span>{` ${description}`}</p>
            <p className="modal-content-text"><span className="modal-subheading">Technologies:</span>{` ${technologies}`}</p>
        </Modal.Body>
        <Modal.Footer>
            <a href={projectLink} target="_blank" rel="noreferrer noopener" className="modal-link">Website</a>
            <a href={githubLink} target="_blank" rel="noreferrer noopener" className="modal-link">GitHub</a>
        </Modal.Footer>
        </Modal>
          </>
    )
}

export default ProjectCard