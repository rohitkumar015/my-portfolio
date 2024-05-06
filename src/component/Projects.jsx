import React from 'react'
import Projectcards from './Projectcards'

const Projects = () => {
  return (
    <div>
        <section className='mt-5 d-flex  ' id='project'>
            <div className='max_width m-auto'>
            <h2 className='primary_text_clr text-center mb-4'>My Project</h2>
            <div className='d-block'>
              <Projectcards></Projectcards>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Projects