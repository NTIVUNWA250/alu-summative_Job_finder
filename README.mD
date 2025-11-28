Job Finder - Frontend App
A simple, pure frontend remote job finder application that searches for jobs using the rapid API.

Link to Demo video
https://youtu.be/uhnZk3ia68w

Link to the website
https://www.rentivunwa250.tech

Features
The user is sent to a login page and then enter the credential and directly sent to a home page
Search remote jobs by the role the user wants the most
Search the jobs by also the categories the user chose to search from
The user get cards of the available remote works to apply to
The user can chose to apply directly or add the remote job to favorites and apply to the job later
The user can delete favorites from the settings
The user can change to light mode or dark mode in settings
The user can log out in settings
Fast, no backend required
Fully responsive design
Secure API key configuration
Setup
1. Get API Key
Go to rapidAPI
Sign up for a free account
Get your API key from the dashboard
2. Configure API Key
Open config.js and replace the placeholder:

const CONFIG = {
  RAPID_API_KEY: 'YOUR_GEOAPIFY_API_KEY_HERE'
};
3. Run the App
Simply open index.html in the web browser:

Double-click index.html, or
Right-click and select "Open with" your browser
How to Use
The user is sent to a login page and then enter the credential and directly sent to a home page
Search remote jobs by the role the user wants the most
Search the jobs by also the categories the user chose to search from
The user get cards of the available remote works to apply to
The user can chose to apply directly or add the remote job to favorites and apply to the job later
The user can delete favorites from the settings
The user can change to light mode or dark mode in settings
The user can log out in settings

Project Structure
job-finder/
├── login.html      # First login HTML file
├── index.html      # Main HTML file
├── settings.html   # Settings HTML file
├── favorites.html  # Favorites HTML file
├── script.js       # Frontend JavaScript logic
├── styles.css      # Styling
├── config.js       # API configuration (ADD YOUR KEY HERE)
└── README.md       # This file
** IMPORTANT**: config.js is in .gitignore - the API key is not committed!

Browser Compatibility
Chrome/Edge 90+
Firefox 88+
Safari 14+
Any modern browser with Rapid API support
Notes
Job finder requires HTTPS or localhost
API calls are rate-limited (free tier: 3,000/day)
Data is only stored in the browser local storage
Deployment Guide
Local Development
Clone the repository
Edit config.js with my Rapid API key
Open index.html in your browser (or use a local server)
Option 1: GitHub Pages (Free & Easy)
# Push to your GitHub repository
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main

# Enable GitHub Pages in Settings > Pages
# Select 'main' branch as source
# My app is live at: https://NTIVUNWA250.github.io/alu-summative_Job_finder
