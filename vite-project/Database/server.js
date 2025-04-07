import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

// Initialize app and middleware
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' })); // Increase payload limit to 10MB
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

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
  employeeId:
  { 
    type: String,
    required: true,
    unique: true,
    primaryKey: true // Set the employeeId field as a primary key
  },
  appointmentDate: Date,
  address: String,
  contact: String,
  email: String,
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

// Create schema for User data (for login)
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    
  },
  password: {
    type: String,
    required: true,
  },
});

// Create schema for Profile data
const profileSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    primaryKey: true // Set the ID field as a primary key
  },
  username: String,
  name: String,
  gmail: String,
  phone: String,
  address: String,
  photo: String
});

const User = mongoose.model('User', userSchema);
const Profile = mongoose.model('Profile', profileSchema);

// Create models from schemas
const PartAData = mongoose.model("PartAData", partADataSchema);
const PartBData = mongoose.model("PartBData", partBDataSchema);
const PartCData = mongoose.model("PartCData", partCDataSchema);
const PartDData = mongoose.model("PartDData", partDDataSchema);
const PartEData = mongoose.model("PartEData", partEDataSchema);
const PartFData = mongoose.model("PartFData", partFDataSchema);

// Endpoint to save PartA data (prevent duplicates)
app.post('/save-parta-data', async (req, res) => {
  try {
    const { employeeId } = req.body;
    const existingRecord = await PartAData.findOne({ employeeId });
    if (existingRecord) {
      await PartAData.updateOne({ employeeId }, { $set: req.body });
      res.send({ message: 'PartA data updated successfully' });
    } else {
      const partAData = new PartAData(req.body);
      await partAData.save();
      res.send({ message: 'PartA data saved successfully' });
    }
  } catch (err) {
    res.status(500).send({ message: 'Error saving PartA data', error: err });
  }
});

// Apply the same logic for other parts (B, C, D, E, F)

// Endpoint to save PartB data (prevent duplicates)
app.post('/save-partb-data', async (req, res) => {
  try {
    const { employeeId } = req.body;
    const existingRecord = await PartBData.findOne({ employeeId });
    if (existingRecord) {
      await PartBData.updateOne({ employeeId }, { $set: req.body });
      res.send({ message: 'PartB data updated successfully' });
    } else {
      const partBData = new PartBData(req.body);
      await partBData.save();
      res.send({ message: 'PartB data saved successfully' });
    }
  } catch (err) {
    res.status(500).send({ message: 'Error saving PartB data', error: err });
  }
});

// Endpoint to save PartC data (prevent duplicates)
app.post('/save-partc-data', async (req, res) => {
  try {
    const { employeeId } = req.body;
    const existingRecord = await PartCData.findOne({ employeeId });
    if (existingRecord) {
      await PartCData.updateOne({ employeeId }, { $set: req.body });
      res.send({ message: 'PartC data updated successfully' });
    } else {
      const partCData = new PartCData(req.body);
      await partCData.save();
      res.send({ message: 'PartC data saved successfully' });
    }
  } catch (err) {
    res.status(500).send({ message: 'Error saving PartC data', error: err });
  }
});

// Endpoint to save PartD data (prevent duplicates)
app.post('/save-partd-data', async (req, res) => {
  try {
    const { employeeId } = req.body;
    const existingRecord = await PartDData.findOne({ employeeId });
    if (existingRecord) {
      await PartDData.updateOne({ employeeId }, { $set: req.body });
      res.send({ message: 'PartD data updated successfully' });
    } else {
      const partDData = new PartDData(req.body);
      await partDData.save();
      res.send({ message: 'PartD data saved successfully' });
    }
  } catch (err) {
    res.status(500).send({ message: 'Error saving PartD data', error: err });
  }
});

// Endpoint to save PartE data (prevent duplicates)
app.post('/save-parte-data', async (req, res) => {
  try {
    const { employeeId } = req.body;
    const existingRecord = await PartEData.findOne({ employeeId });
    if (existingRecord) {
      await PartEData.updateOne({ employeeId }, { $set: req.body });
      res.send({ message: 'PartE data updated successfully' });
    } else {
      const partEData = new PartEData(req.body);
      await partEData.save();
      res.send({ message: 'PartE data saved successfully' });
    }
  } catch (err) {
    res.status(500).send({ message: 'Error saving PartE data', error: err });
  }
});

// Endpoint to save PartF data (prevent duplicates)
app.post('/save-partf-data', async (req, res) => {
  try {
    const { employeeId } = req.body;
    const existingRecord = await PartFData.findOne({ employeeId });
    if (existingRecord) {
      await PartFData.updateOne({ employeeId }, { $set: req.body });
      res.send({ message: 'PartF data updated successfully' });
    } else {
      const partFData = new PartFData(req.body);
      await partFData.save();
      res.send({ message: 'PartF data saved successfully' });
    }
  } catch (err) {
    res.status(500).send({ message: 'Error saving PartF data', error: err });
  }
});

// Endpoint to save profile data
app.post('/save-profile', async (req, res) => {
  const { id, ...profile } = req.body;
  try {
    const existingProfile = await Profile.findOne({ id });
    if (existingProfile) {
      await Profile.updateOne({ id }, { $set: profile });
      res.send({ message: 'Profile updated successfully' });
    } else {
      const profileData = new Profile({ id, ...profile });
      await profileData.save();
      res.send({ message: 'Profile saved successfully' });
    }
  } catch (err) {
    res.status(500).send({ message: 'Error saving profile', error: err });
  }
});

// Endpoint to get profile data
app.get('/get-profile', async (req, res) => {
  const { username } = req.query;
  try {
    const profile = await Profile.findOne({ id: username });
    if (profile) {
      res.send(profile);
    } else {
      res.status(404).send({ message: 'Profile not found' });
    }
  } catch (err) {
    res.status(500).send({ message: 'Error fetching profile', error: err });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).send({ message: 'Login successful' });
    } else {
      res.status(401).send({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Server error. Please try again later.', error });
  }
});

// Endpoint to change password
app.post('/change-password', async (req, res) => {
  const { username, oldPassword, newPassword } = req.body;
  try {
    const user = await User.findOne({ username, password: oldPassword });
    if (user) {
      await User.updateOne({ username }, { $set: { password: newPassword } });
      res.send({ success: true, message: 'Password changed successfully' });
    } else {
      res.send({ success: false, message: 'Old password is incorrect' });
    }
  } catch (err) {
    res.status(500).send({ message: 'Error changing password', error: err });
  }
});

// Endpoint to get data for a specific user
app.get('/get-user-data', async (req, res) => {
  try {
    const { employeeId } = req.query;

    const partAData = await PartAData.findOne({ employeeId });
    const partBData = await PartBData.findOne({ employeeId });
    const partCData = await PartCData.findOne({ employeeId });
    const partDData = await PartDData.findOne({ employeeId });
    const partEData = await PartEData.findOne({ employeeId });
    const partFData = await PartFData.findOne({ employeeId });

    const userData = {
      partA: partAData,
      partB: partBData,
      partC: partCData,
      partD: partDData,
      partE: partEData,
      partF: partFData,
    };

    res.send(userData);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching user data', error });
  }
});

// Start the server on a port
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));