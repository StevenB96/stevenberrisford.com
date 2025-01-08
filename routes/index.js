const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../config/db');
var defineEnv = require('../config/defineEnv');
const Profile = require('../classes/Profile');

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
      return profileInstance; // Return the instance
    }));

    res.json(profiles);
  } catch (error) {
    next(error);
  }
});

// // In-memory storage for chat history
// let chatHistory = {};

// function addMessageToChat(uuid, message) {
//   chatHistory[uuid] = {
//     messages: [...chatHistory[uuid].messages, message],
//     updateTime: new Date(),
//   }
// }

// router.post('/chatbotResponse', async (req, res, next) => {
//   res.set('Cache-Control', 'no-cache');
//   try {
//     const cv_data = fs.readFileSync('config/llm_cv.txt', 'utf8');
//     const { uuid, query } = req.body;
//     const now = new Date();

//     // Clear the user's chat history on reload.
//     if (query === 'Clear chat history') {
//       delete chatHistory[uuid];
//       res.json('Chat history successfully cleared.');
//       return;
//     }

//     // If there are no messages for the current user's conversation.
//     if (!chatHistory[uuid]) {
//       chatHistory[uuid] = {
//         messages: [`1 - Message from chatbot to user "Use this chatbot to ask me questions. E.g.\nWhich project are you most proud of?\nHow can you can be contacted?"`],
//         updateTime: now,
//       };
//     }

//     // Prepare chat history version of the message.
//     const messageIndexA = (chatHistory[uuid]?.messages.length || 0) + 1;
//     const messageA = `${messageIndexA} - Message from user to chatbot "${query}"`;

//     // Handle query rate limit
//     const isRateLimitExceeded = now !== chatHistory[uuid].updateTime && now - chatHistory[uuid].updateTime < 10000;
//     if (isRateLimitExceeded) {
//       const errorMessage = 'Message from chatbot to user "Rate limit exceeded. Wait a few seconds."';
//       addMessageToChat(uuid, `${messageIndexA} - ${errorMessage}`);
//       res.json(errorMessage);
//       return;
//     }

//     const splitContent = [
//       `Answer the user's current message/prompt: "${query}".`,
//       `Ask for clarification if the current message/prompt is unclear.`,
//       `Use information from my CV to answer the current prompt: ${cv_data}.`,
//       `The user may ask questions that require context from previous messages/prompts which are maintained here in chronlogical order: ${[...chatHistory[uuid]?.messages, query].join(', ')}.`,
//       'Previous messages/prompts does not contain the current message/prompt.',
//       `Your role is "chatbot," and you are responding to a "user."`,
//       `The user may use personal pronouns (e.g., I, me) and refer to you with possessive pronouns (e.g., your, yours).`,
//       `Do not mix up different experiences in your response.`,
//       `Encourage the user to ask questions relating to Steven Berrisford.`,
//       `Limit your response to 100 words.`,
//     ];

//     // Make the API call using OpenAI Client
//     const stream = openaiClient.beta.chat.completions.stream({
//       model: 'gpt-4o-mini',
//       messages: [{
//         role: 'user',
//         content: splitContent.join(' ')
//       }],
//       stream: true,
//     });
//     const botResponse = await stream.finalChatCompletion();
//     const responseText = botResponse.choices[0].message.content;

//     // Add messages to the chat history.
//     addMessageToChat(uuid, messageA);
//     const messageIndexB = (chatHistory[uuid]?.messages.length || 0) + 1;
//     const messageB = `${messageIndexB} - Message from chatbot to user "${responseText}"`;
//     addMessageToChat(uuid, messageB);

//     res.json(responseText);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });

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