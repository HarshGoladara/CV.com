import React from 'react'
import { Button } from '@mui/material';
// import MenuCard from '../uiComponent/MenuCard'
import logo from 'D:/Coding Folders/Projects/CVBuilder/clients/src/free-resume-sample-first-screen-image.webp'
// import { useCookies } from 'react-cookie';
import '../styledComponent/home.css'

function Home() {
  


  return (
    <React.Fragment>
      
      <div className='main w-screen'>
        <div className='firstText'>
          <div className='innerText'>
            <div className='Heading'>Build a professional resume for free</div>
            <div className='Heading-2'>Create your resume easily with our free builder and professional templates with Artificial Intelligence</div>
            <div className='button-div'>
              <div className='button-1-div'>
              <Button variant="contained" className='button-1'  >Create My Resume</Button>
              </div>
              <div className='button-2-div'>
              <Button variant="outlined" className='button-2'>Sample Resume</Button>
              </div>
            </div>
          </div>   
        </div>
      <img
        className='firstImage'
        src={logo}
        alt="Example Image"
      />
    </div>
    
    </React.Fragment>
  )
}

export default Home
