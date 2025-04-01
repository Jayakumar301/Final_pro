import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

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
  employeeId: String,
  appointmentDate: Date,
  address: String,
  contact: String,
  email: String, // Add email field
  department: String,
  category: String,
  educationRows: Array,
  experienceRows: Array
});

// Create schema for OTP data
const otpSchema = new mongoose.Schema({
  employeeId: String,
  otp: String,
  createdAt: { type: Date, default: Date.now, expires: '10m' } // OTP expires in 10 minutes
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

// Create schema for PartC data (adjust fields as needed)
const partCDataSchema = new mongoose.Schema({
  rows6: Array,
  rows7: Array,
  rows8: Array,
  rows9: Array,
  rows10: Array
});

// Create schema for PartD data (adjust fields as needed)
const partDDataSchema = new mongoose.Schema({
  rows1: Array,
  rows2: Array,
  rows3: Array,
  rows4: Array,
  rows5: Array,
  rows6: Array,
  rows7: Array,
  rows8: Array
});

// Create schema for PartE data (adjust fields as needed)
const partEDataSchema = new mongoose.Schema({
  rowsTable1: Array,
  rowsTable2: Array,
  rowsTable3: Array,
  rowsTable4: Array,
  rowsTable5: Array
});

// Create schema for PartF data (adjust fields as needed)
const partFDataSchema = new mongoose.Schema({
  rows: Array
});

// Create models from schemas
const PartAData = mongoose.model("PartAData", partADataSchema);
const Otp = mongoose.model("Otp", otpSchema);
const PartBData = mongoose.model("PartBData", partBDataSchema);
const PartCData = mongoose.model("PartCData", partCDataSchema);
const PartDData = mongoose.model("PartDData", partDDataSchema);
const PartEData = mongoose.model("PartEData", partEDataSchema);
const PartFData = mongoose.model("PartFData", partFDataSchema);

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

// Endpoint to save PartC data
app.post('/save-partc-data', async (req, res) => {
  const partCData = new PartCData(req.body);
  try {
    await partCData.save();
    res.send({ message: 'PartC data saved successfully' });
  } catch (err) {
    res.status(500).send({ message: 'Error saving PartC data', error: err });
  }
});

// Endpoint to save PartD data
app.post('/save-partd-data', async (req, res) => {
  const partDData = new PartDData(req.body);
  try {
    await partDData.save();
    res.send({ message: 'PartD data saved successfully' });
  } catch (err) {
    res.status(500).send({ message: 'Error saving PartD data', error: err });
  }
});

// Endpoint to save PartE data
app.post('/save-parte-data', async (req, res) => {
  const partEData = new PartEData(req.body);
  try {
    await partEData.save();
    res.send({ message: 'PartE data saved successfully' });
  } catch (err) {
    res.status(500).send({ message: 'Error saving PartE data', error: err });
  }
});

// Endpoint to save PartF data
app.post('/save-partf-data', async (req, res) => {
  const partFData = new PartFData(req.body);
  try {
    await partFData.save();
    res.send({ message: 'PartF data saved successfully' });
  } catch (err) {
    res.status(500).send({ message: 'Error saving PartF data', error: err });
  }
});

// Start the server on a port
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));