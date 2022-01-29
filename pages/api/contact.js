import nodemailer from 'nodemailer'

export default async (req, res) => {
  const {name, email, context, select, text} = req.body
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,  
    },
    synchronize: false
  })

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'muhammad.umar.testing@gmail.com',
      subject: `Context form submission from ${name}`,
      html: `
      <p>You have a new contact form submission</p>
      <br>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Context:</strong> ${context}</p>
      <p><strong>Select:</strong> ${select}</p>
      <p><strong>Text:</strong> ${text}</p>
      `
    })

    console.log("Message Sent", emailRes.messageId)
  } catch (error) {
    console.log(error)
  }

  res.status(200).json(req.body)
  console.log(req.body)
}