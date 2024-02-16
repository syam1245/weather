

# Weather Dashboard

Welcome to the Weather Dashboard project! This web application provides users with real-time weather information and forecasts for cities around the world. With a sleek and intuitive interface, users can easily search for their desired location and get detailed weather updates.

## Features

- **Real-Time Weather:** Fetches current weather data using the OpenWeatherMap API.
- **7-Day Forecast:** Provides a 7-day weather forecast for the selected location.
- **User Authentication:** Allows users to sign up and sign in to access personalized features.
- **Responsive Design:** Optimized for various screen sizes, including mobile devices.

## Technologies Used

- **Frontend:** React.js, React Router, Bootstrap, Axios
- **Backend:** Node.js, Express.js, MongoDB
- **APIs:** OpenWeatherMap API, RapidAPI (Geo API)

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the `Client` folder and install dependencies using `npm install`.
3. Create a `.env` file in the `Client` folder and add your OpenWeatherMap API key.
   ```
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```
4. Repeat steps 2-3 for the `Server` folder.
5. Start the frontend server by running `npm start` in the `Client` folder.
6. Start the backend server by running `npm start` in the `Server` folder.
7. Open your browser and navigate to `http://localhost:3000` to view the Weather Dashboard.

## File Structure

```
Weather-Dashboard/
├── Client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── api.js
│   │   ├── App.js
│   │   └── ...
│   ├── package.json
│   └── ...
├── Server/
│   ├── db.js
│   ├── routes/
│   │   ├── signin.js
│   │   ├── signup.js
│   │   └── ...
│   ├── validators/
│   │   ├── signinValidator.js
│   │   ├── signupValidator.js
│   │   └── ...
│   ├── package.json
│   └── server.js
├── .gitignore
├── README.md
└── ...
```


## License

This project is licensed under the [MIT License](LICENSE).

---
