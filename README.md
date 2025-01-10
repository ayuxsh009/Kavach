Kavach - Women Safety Web Application
Kavach is a web application designed to enhance the safety and security of women. The application offers features such as real-time emergency alerts with live location sharing, complaint filing, and administrative monitoring to ensure timely response and action in critical situations. Kavach aims to provide a reliable, supportive platform for women to feel safe and report incidents of harassment, abuse, and more.

Features
1. Emergency Alert with Live Location Sharing
Instantly send emergency alerts to trusted contacts.
Share real-time live location to ensure fast assistance.
2. File Complaints
Submit detailed complaints regarding harassment, abuse, or any safety-related incident.
Attach evidence (photos) to the complaint.
Track the status of complaints and receive updates.
3. Admin Section
Admins can manage users, monitor complaints, and oversee emergency alerts.
Allows escalations to relevant authorities when necessary.
Provides analytics and reports for monitoring platform activity.
4. User Section
Users can manage profiles, send emergency alerts, and file complaints.
Simple, intuitive user interface with easy access to key features.
Notifications to keep users informed about the status of their complaints and alerts.
Tech Stack
Frontend: HTML, CSS, JavaScript (React.js)
Backend: Node.js, Express.js
Database: MongoDB
Real-time Location Sharing: Google Maps API, WebSockets
Hosting: Heroku / AWS / Google Cloud
Installation
To set up and run this project locally, follow these steps:

1. Clone the repository:
bash
Copy code
git clone https://github.com/ayuxsh009/kavach.git
cd kavach
2. Install dependencies:
For the backend:

bash
Copy code
cd backend
npm install
For the frontend:

bash
Copy code
cd frontend
npm install
3. Set up environment variables:
Create a .env file in the backend directory with the following keys:

makefile
Copy code
DB_URI=your-database-uri
GOOGLE_MAPS_API_KEY=your-google-maps-api-key
4. Start the application:
For backend:

bash
Copy code
cd backend
npm start
For frontend:

bash
Copy code
cd frontend
npm start
The application should now be running on http://localhost:4000 .

Contributing
We welcome contributions to make Kavach more effective and useful. If you have ideas for new features, bug fixes, or improvements, please fork this repository and submit a pull request.

Contact
For any questions or inquiries, feel free to open an issue or contact the repository owner.

Acknowledgments:
Google Maps API for live location tracking.
JWT (JSON Web Tokens) for secure authentication.
MongoDB for the database.
Kavach is a step towards creating a safer world for women by empowering them with tools to protect themselves and seek help in times of danger.
