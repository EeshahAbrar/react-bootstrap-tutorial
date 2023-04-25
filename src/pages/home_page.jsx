import React from 'react'
import { PrimaryButton, TestButton } from '../Components/Buttons'
import '../../src/App.css'
import { height } from '@mui/system'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myImage1 from '../../src/aboutpic.jpg';

function home_page() {
  return (
    <div>
    <div style = {{backgroundImage: 'url("https://www.lincolnsinn.org.uk/wp-content/uploads/2018/11/2.-LI148-design-for-new-hall-991x591-c-center.jpg")', width : 1263, height : 755, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingTop: 170}}>
    <center><heading style = {{fontSize :"96px"}}>JUSTICE LEAGUE</heading></center>
    <p><headingText style = {{fontSize :"40px"}}>Revolutionizing the legal world,<br/><nextline>one byte at a time</nextline></headingText></p>
    <br/>
    <center style={{paddingLeft : 80}}><TestButton ButtonName = {""}> </TestButton></center>
    </div>

    <Container fluid style={{backgroundColor: 'rgb(12, 20, 44)', height: 730, width: 1263}}>
      <Row>
        <Col xs={12} md={6}>
        <div style={{ paddingTop: 103 }}>
            <headingText style={{color: 'rgb(193, 200, 235)', fontSize: '40px', paddingLeft: 25, paddingTop: 103}}>About Us</headingText>
            <p style={{ paddingTop: 50, color: 'rgb(193, 200, 235)', fontSize :"20px", paddingLeft: 25, lineHeight: '1.75', fontFamily: 'Lora'}}>Justice league is a digital platform that effectively organizes and streamlines legal information and processes, making them more accessible and efficient for legal professionals, businesses, and individuals. The platform includes features such as advanced search capabilities, document management, and automated legal workflows, with the goal of improving the speed, accuracy, and overall effectiveness of legal work and decision-making. Deadlines are kept to a greater extent, costs are kept down and many elaborate procedures may be handled with more or less automatized processes. Additionally, the platform is secure and compliant with relevant laws and regulations to protect sensitive information.</p>
        </div>
        </Col>
        <Col xs={12} md={6}>
          <img src={myImage1} style={{height: 730, width: 619}} />
        </Col>
      </Row>
    </Container>
  
    <div style={{backgroundImage:'url("https://i.pinimg.com/750x/c0/a1/f1/c0a1f1fe813b8083fab90878bca83dc9.jpg")',backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width : 1263, height : 755}}>
      <h1 style={{ color: 'rgb(12, 20, 44)', paddingTop: 200, fontFamily: 'Lora', paddingLeft: 500, fontSize :"40px" }}>Our Mission</h1>
      <p style={{ textAlign: 'justify', color: 'rgb(12, 20, 44)', paddingTop: 60, fontFamily:'Lora', paddingLeft: 30, paddingRight: 30, fontSize :"20px" }}>The digital revolution in 21st century has transformed the way we conduct our everyday business. Yet, courtrooms remain untapped potential for digitization. In a traditional legal system, legal information and documents are primarily stored in physical form, such as in paper files or on microfiche. Legal professionals, such as lawyers and judges, rely on physical documents and books to research and make decisions. The process of finding, retrieving, and reviewing legal information and documents can be time-consuming and labor-intensive. Legal processes, such as document generation and compliance checks, are often manual and can be prone to errors. In traditional legal system, communication and collaboration between legal professionals, clients, and other parties can be limited and slow, as it often relies on mail, fax, or in-person meetings. Overall, the traditional legal system is considered to be less efficient and less accessible.</p>
    </div>

  <Container fluid style={{backgroundColor: 'rgb(12, 20, 44)', height: 113, paddingTop: 45}}>
  <h5 style={{fontFamily:'Lora', color: 'rgb(193, 200, 235)'}}> &copy; 2023 Justice League, Inc. All Rights Reserved.</h5>
  </Container>

</div>

  ) 
}

export default home_page


