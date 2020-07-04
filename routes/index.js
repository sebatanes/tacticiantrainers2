const { Router } = require("express");

const router = Router();

const nodemailer = require("nodemailer")// 28 https://www.youtube.com/watch?v=wu-1LpCyu1Y&t=66s

router.post("/send-email", async( req,res)=>{
	console.log(req.body)
	const { name,agency,subject,phone,email,message } = req.body;

	contentHTML = `
	<h1>You have new email</h1>
	<ul>

<li>  Name: ${name}</li>
<li>  Agency: ${agency}</li>
<li>  Subject: ${subject}</li>
<li>  Phone: ${phone}</li>
<li>  Email: ${email}</li>
</ul>
<p>  Message: ${message}</p>
	`;

const transporter = nodemailer.createTransport({
		host:"smtp.tacticiantrainers.org",
		port:"25",//25
		secure:false,
		auth:{
			user:"robert@tacticiantrainers.org",
			pass:"Tti2019!"
		},
		tls:{
			rejectUnauthorized:false
		}

	})
const info = await transporter.sendMail({
	from:"Website Contact Form <robert@tacticiantrainers.org>",
	to:"robert@tacticiantrainers.org",
	subject:"Email from tacticiantrainers.org",
	html:contentHTML
})
	res.redirect("/success.html")
})

module.exports = router;