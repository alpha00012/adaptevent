require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Assurez-vous que cette variable d'environnement est définie
        pass: process.env.EMAIL_PASS  // Assurez-vous que cette variable d'environnement est définie
    }
});

app.post('/send-email', (req, res) => {
    const { fullName, email, role, message } = req.body;
    const mailOptions = {
        from: email,  // Expéditeur du courriel
        to: 'walaeddine.riahi@ieee.org',  // Destinataire du courriel
        subject: `New ${role} registration from ${fullName}`, // Sujet du courriel
        text: `Message: ${message}\nName: ${fullName}\nEmail: ${email}\nRole: ${role}` // Corps du courriel
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.toString() });
        }
        res.status(200).json({ message: 'Email sent', info });
    });
});

const port = process.env.PORT || 3001; // Le port sur lequel votre serveur s'exécute
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur Express !');
});
app.use(express.static('public')); // Dossier pour les fichiers statiques

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
