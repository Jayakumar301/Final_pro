import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

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

// Create schema for PartA data
const partADataSchema = new mongoose.Schema({
  name: String,
  postHeld: String,
  employeeId: String, // Changed to String as required
  appointmentDate: Date,
  address: String,
  contact: String,
  department: String,
  category: String,
  educationRows: Array,
  experienceRows: Array
});

// Create schema for PartB data
const partBDataSchema = new mongoose.Schema({
  rows1: Array,
  rows2: Array,
  rows3: Array,
  rows4: Array,
  rows5: Array,
  rows6: Array,
  rows7: Array,
  rows8: Array,
  rows9: Array,
  rows10: Array,
  rows11: Array,
  rows12: Array,
  rows13: Array
});

// Create models from schemas
const PartAData = mongoose.model("PartAData", partADataSchema);
const PartBData = mongoose.model("PartBData", partBDataSchema);

// Endpoint to save PartA data
app.post('/save-parta-data', async (req, res) => {
  const partAData = new PartAData(req.body);
  try {
    await partAData.save();
    res.send({ message: 'PartA data saved successfully' });
  } catch (err) {
    res.status(500).send({ message: 'Error saving PartA data', error: err });
  }
});

// Endpoint to save PartB data
app.post('/save-partb-data', async (req, res) => {
  const partBData = new PartBData(req.body);
  try {
    await partBData.save();
    res.send({ message: 'PartB data saved successfully' });
  } catch (err) {
    res.status(500).send({ message: 'Error saving PartB data', error: err });
  }
});

// Start the server on a port
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));