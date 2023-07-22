import eddyConfig from "../../../eddy.config";

export default (req, res) => {
  let { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({
      success: true,
      message: "Rellena todos los campos porfa 🤎",
      data: null,
    });
  }

  let mailTo = eddyConfig.email;
  let mailSubject = "Formulario de Contacto";

  let mailBody = `Hola, soy ${name} y este es mi correo ${email}. ${message}`;

  let mailOptions = {
    from: email,
    to: mailTo,
    subject: mailSubject,
    html: mailBody,
  };

  res.status(200).json({
    success: true,
    message: "Respuesata en el .json, mensaje enviado correctamente",
    data: {
      subject: mailSubject,
      body: mailBody,
    },
  });
};
