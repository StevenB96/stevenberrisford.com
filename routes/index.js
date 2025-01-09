const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../config/db');
var defineEnv = require('../config/defineEnv');
const Profile = require('../classes/Profile');
const Project = require('../classes/Project');

/**
 * Set env variables for app.
 */

defineEnv('..');

const openaiClient = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

router.get('/site', async (req, res, next) => {
  res.set('Cache-Control', 'no-cache');
  try {
    // Fetch site from the database
    const site = await db.select().from('site').first();

    res.json(site);
  } catch (error) {
    next(error);
  }
});

router.get('/profiles', async (req, res, next) => {
  res.set('Cache-Control', 'no-cache');
  try {
    // Fetch profiles from the database
    const profileData = await db.select().from('profile');

    // Map over profileData and asynchronously initialise each profile
    const profiles = await Promise.all(profileData.map(async (profile) => {
      const profileInstance = new Profile(profile); // Assuming Profile is a class
      await profileInstance.initialise(); // Await the initialise method

      // Initialise the project data asynchronously
      profileInstance.projectData = await Promise.all(profileInstance.projectData.map(async (project) => {
        const projectInstance = new Project(project)
        await projectInstance.initialise(); // Await the initialise method
        return projectInstance; // Return the instance
      }));

      return profileInstance; // Return the instance
    }));

    res.json(profiles);
  } catch (error) {
    next(error);
  }
});

// Serve React App
const reactBuildDir = path.join(__dirname, '..', 'react-app', 'build');
router.use(express.static(reactBuildDir));
router.get('/app', (req, res) => {
  res.sendFile(path.join(reactBuildDir, 'index.html'));
});
router.get('/projects', (req, res) => {
  res.sendFile(path.join(reactBuildDir, 'index.html'));
});

module.exports = router;