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

    let mailTo = "";
    let mailSubject = "Formulario de Contacto";

    let mailBody = `
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
        message: "Respuesata en el .json, mensaje enviado correctamente",
        data: {
            subject: mailSubject,
            body: mailBody
        }
    });
};