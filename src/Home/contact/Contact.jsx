import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import myLogo from '../../assets/image/logo.png';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef(); // Ref to access form fields

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Sending email using EmailJS
    emailjs
      .sendForm(
        'service_m31zkyc', // Replace with your EmailJS Service ID
        'template_4ffj1oo', // Replace with your EmailJS Template ID
        form.current,
        'fH0G6O_vAU8na_GbV' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: 'Thank You!',
            text: 'Your message has been successfully sent.',
            icon: 'success',
          });
          form.current.reset(); // Reset the form after submission
        },
        (error) => {
          console.error(error.text);
          Swal.fire({
            title: 'Oops!',
            text: 'Something went wrong. Please try again later.',
            icon: 'error',
          });
        }
      );
  };

  return (
    <div className="py-10" id='contact'>
  <h1 className="text-5xl text-blue-600 font-bold text-center mb-10">
    Contact Me
  </h1>

  <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-8 justify-center items-stretch">
    
    {/* Contact Details Section */}
    <div className="flex-1 bg-blue-200 shadow-lg rounded-lg p-8">
      <h2 className="text-3xl text-blue-500 font-semibold mb-6">
        Contact Details
      </h2>
      <ul className="space-y-4 text-lg text-gray-700">
        <li><strong>Location:</strong> Mirpur 1 in Dhaka, Bangladesh</li>
        <li><strong>Post code:</strong> 1216</li>
        <li><strong>Email:</strong> syed.muhimin.anam@gmail.com</li>
        <li><strong>Phone:</strong> +880-1759648297</li>
        <li><strong>WhatsApp:</strong> +880-1738485944</li>
        <li><strong>Office:</strong> Mirpur 10 in Dhaka, Bangladesh</li>
      </ul>
    </div>

    {/* Image Section with same width */}
    <div className="flex-1  flex justify-center items-center  0">
      <img src={myLogo} alt="Logo" className="w-full h-full object-contain" />
    </div>

    {/* Form Section */}
    <div className="flex-1 bg-blue-200 shadow-lg rounded-lg p-8">
      <h2 className="text-3xl text-blue-500 font-semibold mb-6">
        Let's Talk
      </h2>
      <form ref={form} onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            className="w-full mt-2 p-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 mt-6 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>

  </div>
</div>

  );
};

export default Contact;
