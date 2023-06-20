

import React from 'react'

const FreeCourseCard = (props) => {


    const {imgUrl,title,students,rating,} = props.item
  return (
    <div>
      
            <div className='single_free_course'>
              <div className='free_course_image'>
                <img src={imgUrl} alt="" className='w-100' />
                <button type="button" className='btn free_btn'> free </button>
              </div>
              <div className='free_course_detail'>
                <h6>{title} </h6>

                <div className="d-flex align-items-center gap-5">
                  <span className="d-flex align-items-center gap-2">
                    <i class="ri-user-line"></i>
                   {students}K</span>
                  <span className="d-flex align-items-center gap-2">
                    <i class="ri-star-fill"></i> {rating}k
                  </span>
                </div>
              </div>
            </div>
         
    </div>
  )
}

export default FreeCourseCard
