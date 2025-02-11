
![Logo](./assets/icons/logo.png)


# StirUp

This project presents the development and implementation of a recipe generator Mobile application aimed at providing personalized cooking recommendations based on user preferences and available ingredients


## Tech Stack

**Client:** ReactNative

**Server:** Node, Express


## Run Locally

Clone the project

```bash
  git clone https://github.com/TarunTechie/StirUp-Mobile.git
```

Go to the project directory

#  Running the React Native App Locally

## Prerequisites  
Before you start, ensure you have the following installed:  
- **Node.js** (Latest LTS recommended)
- **React Native CLI** → Installed via npm  
- **Java Development Kit (JDK)** → Required for Android builds  
- **Android Studio** (for Android emulator) or Xcode (for iOS)  
- **Physical Device or Emulator** (Android/iOS)  

Install dependencies

```bash
  npm install
```

Run on Android
```bash
  npx react-native run-android
```
Run on IOS
```bash
  npx react-native run-ios
```
### To run the backend
```bash
  git clone https://github.com/TarunTechie/stirup.git
```

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SPOON_API`  `STIRUP_API`

You have to obtain the API_KEY from [spoonacular API](https://spoonacular.com/food-api)

API is the path where your backend is running

