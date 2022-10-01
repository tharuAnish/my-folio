import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Layout from '../components/Layout'
import {
  FaRegPaperPlane,
  FaLinkedin,
  FaGithub,
  FaMailBulk,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa'

export const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ec2tnv8',
        'template_aqvddqf',
        form.current,
        'mBDYSntl9rCva_8Ca'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <Layout>
      <div>
        <div>
          <img
            className='mt-20 w-2/6  container mx-auto md:mt-24 sm:w-2/3'
            src='./contact-mail.svg'
            alt='contact img'
          />
        </div>

        <div className='text-center font-mont'>
          <h3 className='text-3xl font-extrabold text-theme m-3'>Contact Me</h3>
          <p className='text-opacity-70 text-gray-800 m-2'>
            Lets Keep In Touch
          </p>
          <hr className=' border border-theme w-40 border-2 m-3 mx-auto' />
        </div>

        <div
          className='bg-theme rounded-2xl flex flex-row md:flex-col w-2/3  justify-center mx-auto  text-white
                                p-5 m-8 md:w-4/5 '
        >
          <div className='basis-2/5'>
            <p className='font-black text-3xl font-mont text-center '>
              Get In Touch
            </p>
            <div className='flex text-white w-full justify-around mt-4 py-3'>
              <a
                className='hover:text-[#0077b5] hover:scale-125 ease-in duration-100'
                href='https://www.linkedin.com/in/tharuanish'
                target='_blank'
              >
                <FaLinkedin />
              </a>
              <a
                className='hover:text-white hover:scale-125 ease-in duration-100 '
                href='https://github.com/tharuAnish'
                target='_blank'
              >
                <FaGithub />
              </a>
              <a
                className='hover:text-[#EA4335] hover:scale-125 ease-in duration-100 '
                href='https://mail.google.com/mail/?view=cm&fs=1&to=namoanishtharu@gmail.com'
                target='_blank'
              >
                <FaMailBulk />
              </a>
              <a
                className='hover:text-[#1DA1F2] hover:scale-125 ease-in duration-100 '
                href='https://twitter.com/anish_namo'
                target='_blank'
              >
                <FaTwitter />
              </a>
              <a
                className='hover:text-[#e1306c] hover:scale-125 ease-in duration-100 '
                href='https://www.instagram.com/namo_anish'
                target='_blank'
              >
                <FaInstagram />
              </a>
              <a
                className='hover:text-[#4267B2] hover:scale-125 ease-in duration-100 '
                href='https://www.facebook.com/anish.nammochhiyatharu'
                target='_blank'
              >
                <FaFacebook />
              </a>
            </div>
            <img
              className='w-2/5 mx-auto my-10'
              src='./undraw_mailbox.svg'
              alt='mailbox'
            />
          </div>

          <div className='basis-3/5 bg-[#252a30] rounded-r-xl md:rounded-xl  text-black'>
            <form ref={form} onSubmit={sendEmail} className='p-4 pr-10 md:pr-8'>
              <input
                placeholder='Your Name'
                type='text'
                name='user_name'
                className='block form-input  rounded-md w-full px-3 py-2 ml-2 my-5 '
                required
              />
              <input
                placeholder='Your Email'
                type='email'
                name='user_email'
                className='block form-input w-full rounded-md px-3 py-2 m-2 my-5'
                required
              />
              <textarea
                placeholder='Your Message'
                maxLength='500'
                rows='4'
                name='message'
                className='block form-input w-full rounded-md text-theme px-3 py-2 m-2 my-5'
                required
              />
              <div className='flex text-gray-50 '>
                <div>
                  <input
                    className='hover:bg-blue-700  static bg-[#11296a] text-white font-bold py-2 pr-14 m-2 px-10  rounded-full focus:ring focus:ring-blue-500 shadow-lg '
                    type='submit'
                    value='Send'
                  />
                </div>
                <i className='absolute pl-7 ml-16 mt-5'>
                  <FaRegPaperPlane />
                </i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
