import { ResumeInfoContext } from '@/component/pages/context/ResumeContextInfo'
import React, { useContext } from 'react'
import PersonalDetails from './preview/PersonalDetails'
import { BorderColor } from '@mui/icons-material'
import Education from '../component/preview/Education.jsx';
import SummeryPreview from './preview/SummeryPreview'
import OtherSections from './preview/OtherSections';

function ResumePreview() {
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
  return (
    <div className='shadow-lg h-full w-full mr-5 md:mr-10 p-14 border-t-[20px] ' 
    style={{
        borderColor : resumeInfo?.themeColor
    }}>
        {/* Personal Data */}
            <PersonalDetails resumeInfo={resumeInfo}/>
        {/* Personal Detail ends here .....*/}

        {/* Summery Data */}
          <SummeryPreview resumeInfo={resumeInfo}/>
        {/* Summery Detail ends here .....*/}

        {/* Education Data */}
        <Education resumeInfo={resumeInfo}/>
        {/* Education Detail ends here .....*/}

        {/* Profession Experience Data */}
        <OtherSections resumeInfo={resumeInfo}/>
        {/* Profession Experience Detail ends here .....*/}
    </div>
  )
}

export default ResumePreview