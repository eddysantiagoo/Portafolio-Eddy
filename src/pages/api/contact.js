import nodeMailer from 'nodemailer';

export default (req, res) => {
    let { name, email, message } = req.body;
    if (!name || !email || !message) {
        res.status(400).json({
            success: true,
            message: "Todos los campos son requeridos",
            data: null
        });
    }

    let mailTo = "me@clqu.live";
    let mailSubject = "Contact Form Submission";

    let mailBody = `
        Contact Form Submission
        Name: ${name}
        Email: ${email}
        Message: ${message}
    `;

    let mailOptions = {
        from: email,
        to: mailTo,
        subject: mailSubject,
        html: mailBody
    }

    res.status(200).json({
        success: true,
        message: "Message sent successfully",
        data: {
            subject: mailSubject,
            body: mailBody
        }
    });
};