var path = require('path');
var express = require('express');
var router = express.Router();
const db = require('../config/db');

router.get('/profile', async (req, res, next) => {
  res.set('Cache-Control', 'no-cache');
  try {
    const profile = await db.select().from('profile').first();
    res.json(profile);
  } catch (error) {
    next(error);
  }
});

router.get('/content', async (req, res, next) => {
  res.set('Cache-Control', 'no-cache');
  try {
    const content = await db.select().from('content').orderBy('order', 'asc').orderByRaw('CASE WHEN "order" IS NULL THEN 1 ELSE 0 END');
    res.json(content);
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