import React from 'react';

function Form() {
  return (
    <div className='s-padding'>
      <div className='container contact'>
        <div className='contact__heading'>
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <form className='contact__form'>
          <div className='contact__form--main'>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter your name"/>
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter your email"/>
            </div>
          </div>
          <div className='contact__form--main'>
            <div>
              <label>Context</label>
              <input type="text" placeholder="Provide context"/>
            </div>
            <div>
              <label>Subject</label>
              <input type="text" placeholder="Select subject"/>
            </div>
          </div>
          <div className='contact__form--message'>
            <label>Message</label>
            <textarea type="text" placeholder="Write your question here"/>
          </div>  
          <button className='contact__form--button' type='submit'>Send Messege</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
