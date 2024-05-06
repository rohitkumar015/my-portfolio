import React from 'react'

const Headerr = () => {
  return (
    <>
    <nav>
        <div className=' navbar_bg'>
            <div className=''>
                <ul className='list-unstyled d-flex gap-3 align-items-center m-0 '>
                    <li className='m-0 p-0'>
                        <span className=''><a href="#home">Home</a></span>
                    </li>
                    <li className='m-0 p-0'>
                        <span ><a href="#about">About</a></span>
                    </li>
                    <li className='m-0 p-0'>
                        <span><a href="#project">Projects</a></span>
                    </li>
                    <li className='m-0 p-0'>
                        <span><a href="#skills">Skills</a></span>
                    </li>
                    <li className='m-0 p-0'>
                        <span><a href="#experience">Experience</a></span>
                    </li>
                    <li className='m-0 p-0'>
                        <span><a href="#contact">Contact</a></span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Headerr