import React from 'react'
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBCard, MDBCardImage, MDBCardBody, strong, MDBCardText, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

//map
import Country from '../map.js';

const Profile = (props) => {
  const twitter = `https://twitter.com/${props.details.SocialMedia.Twitter}`;
  const github = `https://github.com/${props.details.SocialMedia.Github}`;
  const linkedin = `https://www.linkedin.com/in/${props.details.SocialMedia.LinkedIn}`;
  //console.log(country);
  return (
    <>
      <div
        className='text-center bg-image mb-5'
        style={{ backgroundImage: `url(${props.details.Image})`, height: 400 }}
      >
      </div>
      <MDBContainer>
        <MDBRow className='row-cols-1 row-cols-md-2 g-4 mb-5'>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src={props.image}
                alt={props.details.Name}
                position='top'
              />

            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>

              <MDBCardBody>
                <MDBCardText>Name: <strong>{props.details.Name}</strong></MDBCardText>
                <MDBCardText>Current Status: <strong>{props.details.CurrentStatus}</strong></MDBCardText>
                <MDBCardText>Location: <strong>{props.details.Location}</strong></MDBCardText>
                <MDBCardText>Company: <strong>{props.details.Company}</strong></MDBCardText>
                <MDBCardText>SocialMedia: </MDBCardText>

                <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href={github} target='_blank'>
                  <MDBIcon fab icon='github' />
                </MDBBtn>
                <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href={twitter} target='_blank'>
                  <MDBIcon fab icon='twitter' />
                </MDBBtn>
                <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href={linkedin} target='_blank'>
                  <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>
              </MDBCardBody>

              <MDBCardBody>
              <h5>My Favourite Places</h5>
                {Country.map((item, index) => (

                  <MDBListGroup style={{ minWidth: '22rem' }} className='mb-4' key={index}>
                    <MDBListGroupItem color='primary'><MDBCardText>Country: <strong>{item.Country}</strong></MDBCardText></MDBListGroupItem>
                    <MDBListGroupItem color='info'><MDBCardText>Capital: <strong>{item.Capital}</strong></MDBCardText></MDBListGroupItem>
                  </MDBListGroup>
                ))}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </>


  )
}

export default Profile