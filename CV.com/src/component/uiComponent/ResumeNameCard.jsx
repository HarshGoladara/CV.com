import { EllipsisVertical, Notebook} from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function ResumeNameCard(props) {
 const name = props.name.resumeName;
 const id = props.name.resumeId;
 const navigate = useNavigate();
  return (
    <div onClick={
        ()=>{
            navigate(`/dashboard/resume/${id}/edit`)
        }
    }>
        <div className='group bg-red-600 w-[200px] mr-4 mb-5 border shadow-md rounded-md hover:w-[210px] hover:shadow-lg transition-all cursor-pointer'>
            <div className=' mt-2 w-full h-[250px] rounded-sm bg-gradient-to-b from-blue-100 to-[#440CCC] flex justify-center items-center
                            transition-all group-hover:h-[260px]'>
                <Notebook />
            </div>
            <div className='py-1 px-1 text-white flex justify-between'>
                <div>
                    {name}
                </div>
                <div>
                    <EllipsisVertical/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ResumeNameCard