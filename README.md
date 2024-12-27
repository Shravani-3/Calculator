# React Native Calculator App

## Overview
This is a simple calculator application built using React Native. The app provides basic mathematical operations, a clean user interface, and functional circular buttons.

## Features
- **Basic Operations**: Addition, subtraction, multiplication, and division.
- **Clear and Delete**: Options to clear all inputs or delete a single character.
- **Error Handling**: Displays an error message for invalid inputs.
- **Responsive Design**: Works seamlessly across Android and iOS devices.
- **Footer Branding**: Includes a footer displaying "Calc by Shravani."

## Screenshots
(https://github.com/user-attachments/assets/30e16d84-2f8e-4669-a814-28527f34165f)


## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js
- npm or Yarn
- React Native CLI
- Android Studio or Xcode (for emulator/simulator)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Shravani-3/react-native-calculator.git
   cd react-native-calculator
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Run the app:
   - For Android:
     ```bash
     npx react-native run-android
     ```
   

## Usage
1. Launch the app on your device or emulator.
2. Perform calculations using the circular buttons.
3. Clear inputs using the `AC` button or delete characters with the `⌫` button.
4. View results immediately after pressing `=`.

## File Structure
```
.
├── App.tsx              # Main application file
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── assets/              # Images and assets (e.g., logo)
├── android/             # Android-specific files
├── ios/                 # iOS-specific files
└── README.md            # Project documentation
```

## Customization
- **Button Styles**: Update button colors, size, or shapes in `styles.button` within `App.tsx`.
- **Footer Text**: Change the footer text in the `styles.footerText`.

## License
This project is licensed under the MIT License. Feel free to modify and use it as per your requirements.

## Author
**Shravani Pardeshi**
