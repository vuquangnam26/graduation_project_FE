# Graduation Project Frontend

This repository contains the frontend code for the Graduation Project. It is designed to provide a user-friendly interface and seamless user experience for students, faculty, and administrators involved in graduation projects.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Modern UI/UX:** Fully responsive design supporting desktop, tablet, and mobile devices.
- **Authentication & Authorization:** Secure login and role-based access (student, faculty, admin).
- **Dashboard:** Personalized dashboards for different user roles.
- **Project Management:** Create, edit, and track graduation project progress.
- **Notifications:** Real-time notifications for deadlines, feedback, and status updates.
- **Analytics:** Visualize project and student statistics.
- **API Integration:** Seamless connection with backend services.
- **Error Handling:** Robust error boundaries and user-friendly messages.
- **Internationalization:** Support for multiple languages (if applicable).

## Tech Stack

- **Framework:** React (with hooks & context API)
- **Styling:** Tailwind CSS / SCSS / Styled Components
- **State Management:** Redux Toolkit / Context API
- **Routing:** React Router
- **HTTP Client:** Axios / Fetch API
- **Testing:** Jest, React Testing Library
- **Build Tools:** Vite / Webpack / Create React App

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/vuquangnam26/graduation_project_FE.git
cd graduation_project_FE
npm install
# or
yarn install
```

### Running the App

```bash
npm start
# or
yarn start
```

The application will run locally at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
src/
  ├── assets/         # Images, fonts and static resources
  ├── components/     # Reusable UI components
  ├── hooks/          # Custom React hooks
  ├── pages/          # Page components for routing
  ├── services/       # API and business logic
  ├── store/          # Redux or global state management
  ├── styles/         # Global and component styles
  ├── utils/          # Utility functions
  ├── App.jsx         # App entrypoint
  └── main.jsx        # Main React DOM render
public/
  ├── index.html      # Main HTML template
  └── ...             # Static files
```

## Scripts

- `start` – Run the app in development mode
- `build` – Build the app for production
- `test` – Run tests
- `lint` – Analyze code for potential errors and style issues

## Environment Variables

Create a `.env` file in the root directory and add your custom environment variables as needed:

```
REACT_APP_API_URL=https://your-backend-url/api
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
# Add other environment variables here
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a pull request

Before submitting, please ensure your code follows the project's style guide and passes linting and tests.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please contact [vuquangnam26](https://github.com/vuquangnam26).
