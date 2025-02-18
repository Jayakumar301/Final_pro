const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize app and middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB URI (replace with your actual URI)
const mongoURI = 'mongodb://localhost:27017/FacultyDatabase';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Create a schema for your form data
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
});

// Create a model from the schema
const FormData = mongoose.model("Faculty1", formSchema);

// Define the POST endpoint to save data
app.post('/submit-form', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const newForm = new FormData({
      name,
      email,
      phone,
      password,
    });

    await newForm.save();
    res.status(200).send({ message: 'Form submitted successfully!' });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Error submitting form' });
  }
});

// Start the server on a port
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
