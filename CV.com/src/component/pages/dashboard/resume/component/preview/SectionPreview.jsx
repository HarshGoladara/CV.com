import React from 'react'

function SectionPreview({object_key,resumeInfo}) {
  const section =resumeInfo.Sections[object_key];
  const available = section?.enable
  return (
    <React.Fragment>
      {available ? 
        <div className='mt-5'>
        <div className='title text-lg font-bold'>
              {section?.title}
        </div>
        <div dangerouslySetInnerHTML={{__html : section?.content}}>

        </div>
    </div> : null  
    }
    </React.Fragment>
    
  )
}

export default SectionPreview