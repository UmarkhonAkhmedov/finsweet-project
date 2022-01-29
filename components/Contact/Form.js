import { useForm } from "react-hook-form"
import axios from "axios";
import { useRouter } from "next/router"

function Form() {
  const {register, handleSubmit, formState: { errors }, reset } = useForm()
  const router = useRouter()
  async function onSubmitForm(values){
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content_Type': 'application/json',
      },
      data: values,
    }
    try {
      const response = await axios(config)
      if(response.status == 200){
        reset({name: "", email: "", text: "", context: "", select: "", text: ""})
        router.push("/contact")
      }

    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div className='s-padding'>
      <div className='container contact'>
        <div className='contact__heading'>
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmitForm)} className='contact__form'>
          <div className='contact__form--main'>
            <div>
              <label>Name</label>
              <input {...register('name', 
              {required:{value: true, message: 'You must enter your name'}})} 
                  name="name" 
                  type="text" 
                  placeholder="Enter your name"/>
              <span className="contact__form--main__span">{errors?.name?.message}</span> 
            </div>
            <div>
              <label>Email</label>
              <input {...register('email', {required:{value: true, message: 'You must enter email address'},
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email',
              },
              })}

              name="email" type="email" placeholder="Enter your email"/>
              <span className="contact__form--main__span">{errors?.email?.message}</span> 
            </div>
          </div>
          <div className='contact__form--main'>
            <div>
              <label>Context</label>
              <input {...register('context', {required:{value: true, message: 'You must enter context'}})} name="context" type="text" placeholder="Provide context"/>
              <span className="contact__form--main__span">{errors?.context?.message}</span> 
            </div>
            <div>
              <label>Subject</label>
              <input {...register('select', {required:{value: true, message: 'You must enter your selection'}})} name="select" type="text" placeholder="Select subject"/>
              <span className="contact__form--main__span">{errors?.select?.message}</span> 
            </div>
          </div>
          <div className='contact__form--message'>
            <label>Message</label>
            <textarea {...register('text', {required:{value: true, message: 'You must enter your message'}})} name="text" type="text" placeholder="Write your question here"/>
            <span className="contact__form--main__span">{errors?.text?.message}</span> 
          </div>  
          <button className='contact__form--button' type='submit'>Send Messege</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
