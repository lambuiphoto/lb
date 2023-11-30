import React from 'react';
import WomanImage from '../assets/images/more/woman1.png'
import bomContactImg from '../assets/images/more/bomContact.jpg'
import Heading from '../common/Heading';
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section 
    className='section contact-section' id='contact'>
        <div
            className="section-bg">
        </div>
      <div className="container contact-container">
        <div className="contact-form" data-aos="fade-left">
            <Heading className='' title='Contact Me' desc='Wanna work with me? Easy. Send me a message :)'></Heading>

            {/* FORM & IMAGE */}
            <form action="https://formsubmit.co/4c0287724e34f6891878a9becfb14081 " method="POST" onSubmit={onSubmit}>
                <div className='form-info-1'>
                  <div>
                    <input className='name' 
                    type="text" 
                    placeholder='Your name'
                    {...register("name", {
                      required: true,
                      maxLength: 100,
                    })}
                    />
                    {errors.name && (
                      <p className="text-red mt-1">
                        {errors.name.type === "required" && "This field is required."}
                        {errors.name.type === "maxLength" && "Max length is 100 char."}
                      </p>
                    )}
                  </div>
                  <div>
                    <input className='email' 
                    type="text" 
                    placeholder='Your email address'
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    />
                    {errors.email && (
                      <p className="text-red mt-1">
                        {errors.email.type === "required" && "This field is required."}
                        {errors.email.type === "pattern" && "Invalid email address."}
                      </p>
                    )}
                  </div>
                </div>
                <input className='phone' 
                type="text" 
                placeholder='Your phone number'/>

                {errors.message && (
                  <p className="text-red mt-1">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 10 char."}
                  </p>
                )}

                <input className='message' 
                type="text" 
                placeholder='Your message'
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}/>
                {errors.message && (
                  <p className="text-red mt-1">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}

                <button className=''type="submit">Send</button>
            </form>
        </div>
        <div className="contact-image" data-aos="fade-right">
            <img src={WomanImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
