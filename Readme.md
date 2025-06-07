SkillMapper is a web application that helps users generate a personalized learning roadmap based on the skills they already have and the skills required for a specific tech role (like Full Stack Developer, Data Scientist, etc.).

The user registers and logs in, then selects a role they want to pursue. The app shows them a static roadmap fetched from the backend, showing the skills and resources they need to learn. Users can also track their progress by checking off completed steps.

So far, I’ve implemented:

User registration and login with JWT authentication

Backend APIs to fetch static roadmap data

A MongoDB database setup using Mongoose

Frontend with React and Tailwind

Protected routes and navbar that adapts based on login status

Progress model for saving which steps are completed

I plan to add:

Save and sync progress feature across sessions

Filtering based on user’s current skills

Option to share progress with others

This project uses the MERN stack (MongoDB, Express, React, Node) and stores role data in JSON files on the backend for now. It’s aimed at helping people clearly see the gap between where they are and where they want to be in their tech careers.