# TP-Backendless Test Assignment

This is a test assignment for the JavaScript developer position at Backendless. The assignment is to create a client-side app using React, React Router, and Webpack, which functions as a basic Content Management System (CMS). The app should meet the following requirements:

    1. When switching between the tabs, the current tab's id must be added to the URL of the app. For example, 'localhost/dummyTable' or 'localhost/dummyChart'.
    2. The first tab must open by default.
    3. If, at the time when the app is loaded, the URL already contains a tab id, that tab must open by default.
    4. The file for the tab content (identified with the "path" property) should be loaded only when it is needed (the lazy loading approach). For example, all files required for the "Dummy Table" should be loaded only when the "Dummy Table" tab is selected. You should be able to see and confirm that in the Network section of the browser's dev tools.

# How to Run the Application

To run the application, follow these steps:

    1. Clone or download the repository to your local machine.
    2. Navigate to the project directory in your terminal.
    3. Install the required dependencies using npm install.
    4. Start the development server using npm start.
    5. The application should now be accessible in your web browser at http://localhost:3000.

# Assignment Details

    The app allows you to switch between different tabs, with each tab displaying unique content. The content for each tab is loaded lazily, which means that it is fetched and rendered only when the respective tab is selected.

    The app uses React, React Router, and Webpack to achieve these functionalities. You can see the URL changing as you switch between tabs, and the content is loaded dynamically based on the selected tab.

    The initial tab, as well as the tab specified in the URL, will open by default, as per the assignment requirements. Additionally, the tabs are sorted based on the provided "order" property in the JSON data.

    The provided code includes styling using Material-UI for a pleasant testing experience.

    Feel free to explore the code and test the application according to the provided requirements.

# Author

    This test assignment was created by smokekans
    for Backendless
