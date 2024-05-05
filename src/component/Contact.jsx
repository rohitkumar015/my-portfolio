import React from 'react'
import { BiLogoTelegram } from "react-icons/bi";

const Contact = () => {
  return (
    <section className="mt-5 d-flex ">
    <div className="max_width m-auto">
      <h2 className="primary_text_clr text-center mb-4">Contact</h2>
      <p className='text-center fw-semibold secondary_text_clr'>Please contact me directly at <a href="" className='links'  ><i>prajapatirohit015@gmail.com</i></a> or through this form.</p>
      <div className='w-inherit'>
        <form action="" className='w-100'>
       <div className='row'>
        <div className="col-12">
        <input
          name="senderEmail"
          type="email"
          required
          autoComplete="off"
          maxLength={50}
          placeholder="Your email"
          className=""
        />
        </div>
        <div className="col-12 mt-3">
       <textarea name="" rows={50} cols={56} id="textarea" maxLength={500} placeholder='Your message'></textarea>
        </div>
        <div className="col-12 mt-3 d-block">
            <button className='my_secondary_btn  submit'>Submit <BiLogoTelegram></BiLogoTelegram> </button>
        </div>

       </div>
        </form>

      </div>
     
    </div>
  </section>
  )
}

export default Contact