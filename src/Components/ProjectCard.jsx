import React, { useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";


function ProjectCard() {
  const [centredModal, setCentredModal] = useState(false);

  const toggleOpen = () => setCentredModal(!centredModal);
  return (
    <div>
      <MDBCard onClick={toggleOpen}>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle className='text-center'>Project title</MDBCardTitle>
        <MDBCardText>
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBModal tabIndex='-1' open={centredModal} onClose={() => setCentredModal(false)}>
        <MDBModalDialog centered size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="row">
                <div className="col-6">
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                </div>
                <div className="col-6">
                <h4>Description</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <h3>Technologies</h3>
              <p>React,Node</p>

              <h3>View On</h3>
              <MDBBtn color='secondary' className='me-5'  >
              <FaGithub  className='fs-2' />
              </MDBBtn>
              <MDBBtn>
              <FaLink  className='fs-2'/>
              </MDBBtn>
              



                </div>
              </div>
              
            </MDBModalBody>
            <MDBModalFooter>
             
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

    </div>
  )
}

export default ProjectCard