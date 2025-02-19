
# PurrEverTogetherSanctuary(PETS)

PurreverTogetherSanctuary (P.E.T.S.) is an animal welfare initiative aimed at providing a loving and safe haven for abandoned, rescued, and neglected animals. The project focuses on rescuing, rehabilitating, and rehoming animals in need, giving them a second chance at life.

This web application serves as a platform for the sanctuary, allowing users to:

- Learn about our mission, cause, and facilities.   
- Make donations to support the shelter and its operations.  
- View our story, the team behind P.E.T.S., and the animals in our care.  
- Get involved by signing up as a volunteer or collaborating with us.

---

## Logo

![Logo](favicon.ico)

---

## Features

- Volunteer and User Sign in and Sign up
- Contact us easily via embedded map
- Browse pets from our shelter
- Adapt pets from the shelter
- Light/dark mode toggle
- Blog about your story
- Follow others blogs
- Fullscreen mode
- Cross platform
- Donations Page
- Responsive

---

## Tech Stack

This project uses a variety of powerful technologies to build a seamless, responsive, and interactive platform. Here's an overview of the key tools and technologies used in the development of **PurreverTogetherSanctuary (P.E.T.S.)**:

**Client:**

- **React 19**: A JavaScript library for building user interfaces. React allows us to create reusable components and manage the state and behavior of the application efficiently.

- **React States**: Used to manage the state of the application, such as form data, user interactions, and component visibility. React states ensure the dynamic updating of the UI as the user interacts with the site.

- **CSS Animations and Transitions**: Used for smooth visual effects and to enhance the user experience. With CSS animations and transitions, we can add dynamic movements to elements on the page, such as smooth scrolling and hover effects.

- **Tailwind CSS**: A utility-first CSS framework used for styling. Tailwind allows us to create responsive and customizable designs quickly by using utility classes for layout, spacing, typography, colors, and more.

- **Axios**: A promise-based HTTP client for making requests to the backend API. Axios is used for handling API calls, such as submitting form data or fetching information from the server.

- **Formik**: A form management library for React. Formik helps us manage form states, validation, and submission with ease, making it simpler to handle complex forms in the application.

- **Yup**: A JavaScript schema builder used for form validation. Yup integrates with Formik to validate form inputs, ensuring that the submitted data is correct and follows predefined rules.

**Server:**

- **Next.js**: A React framework that enables server-side rendering, routing, and static site generation. Next.js allows us to optimize the app for performance while maintaining a smooth user experience.

- **Node.js**: A JavaScript runtime environment that allows us to run JavaScript on the server side. Node.js powers the backend of the application, handling HTTP requests, processing logic, and interacting with the database.

- **Express.js**: A minimal web framework for Node.js. Express.js helps build and handle HTTP routes, manage middleware, and define API endpoints in an efficient manner.

- **Nodemon**: A development tool that automatically restarts the Node.js server when changes are made to the codebase. Nodemon makes it easier to test the backend during development without manually restarting the server.

- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js. Mongoose simplifies working with MongoDB by providing a schema-based solution to model the application's data.

- **JSON Web Token (JWT)**: A compact, URL-safe means of representing claims between two parties. JWTs are used to securely authenticate users, ensuring that they have the right permissions to access certain resources.

- **dotenv**: A module that loads environment variables from a `.env` file into `process.env`. It allows us to manage sensitive information such as API keys, database credentials, and other environment-specific configurations.

**Database:**

- **MongoDB**: A NoSQL database used to store and manage data for the application. MongoDB is ideal for handling unstructured or semi-structured data, such as animal records, user information, and donation details.

- **Cloudinary**: A cloud-based image and video management service. Cloudinary is used to upload, store, and optimize images and videos, such as animal photos, for fast and efficient loading in the application.

---

This tech stack provides a solid foundation for building scalable, dynamic, and efficient web applications. With this combination of technologies, **PurreverTogetherSanctuary (P.E.T.S.)** is able to offer a rich, interactive user experience while also ensuring robust backend functionality.

--- 

## Screenshots

![Home/Landing Page](public/screenshots/1.png)
![About Page](public/screenshots/2.png)
![Browse Pets Page](public/screenshots/3.png)
![Contact Page](public/screenshots/4.png)
![Contact Map Page](public/screenshots/5.png)
![Donation Page](public/screenshots/6.png)
![Signup Page](public/screenshots/7.png)
![Signin Page](public/screenshots/8.png)
![Blog Page](public/screenshots/9.png)


## Authors

- Ayushman's [Email](mailto:ayushmanshukla.2021@outlook.com) 
- Ayushman's [Github](https://www.github.com/ayushman-111202)
- Ayushman's [LinkedIn](https://www.linkedin.com/in/ayushman-111202-)
- Ayushman's [Instagram](https://www.instagram.com/ayushman_111202_)


## Badges

![Last Commit](https://img.shields.io/github/last-commit/ayushman-111202/MiniProject-PurrEverTogetherSanctuary-PETS-.svg)

PurreverTogetherSanctuary (P.E.T.S.) is a sanctuary dedicated to rescuing, rehabilitating, and rehoming animals in need...

---

## Demo

linkedin post url

---

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL`

---

## Lessons Learned

By building this pet shelter project, I have gained a range of valuable skills and knowledge, covering both front-end and back-end development. Here’s what I've learned:

### 1. **Front-End Development**
   - **React**: I learned how to work with **React** for building dynamic, single-page applications (SPAs). I gained experience with **React components**, **JSX**, **states**, and **props**.
   - **React Hooks**: I learned how to use **React hooks** like `useState` for managing state and `useEffect` for side effects. I also gained an understanding of handling form inputs using hooks.
   - **Form Handling with Formik**: I explored **Formik**, a powerful library for managing form state, validation, and submission in React applications. I learned how to integrate **Yup** for validation.
   - **React Router**: I implemented **React Router** to handle page navigation, ensuring smooth transitions between different pages (e.g., Home, About, Donation).
   - **CSS Animations & Transitions**: I enhanced my UI with **CSS animations** and **transitions** to make the user experience smoother and more visually appealing.
   - **Tailwind CSS**: I worked with **Tailwind CSS** for rapid UI design and customization. I gained experience in using utility-first classes for responsive layouts and styling.
   - **Responsive Design**: I learned how to make my application responsive and adapt to various screen sizes (e.g., mobile, tablet, desktop).
   
### 2. **Back-End Development**
   - **Node.js & Express.js**: I built the back-end of the application using **Node.js** and **Express.js**, which allowed me to create RESTful APIs to handle user requests (e.g., form submissions, donations).
   - **Database Integration with MongoDB**: I learned how to interact with a **MongoDB** database using **Mongoose** for storing and retrieving data, such as donation records and user details.
   - **JWT Authentication**: You implemented **JSON Web Tokens (JWT)** for user authentication, learning how to securely manage user sessions and protect certain routes.
   - **dotenv for Environment Variables**: I used **dotenv** to manage sensitive information, such as API keys or database credentials, in a secure way.

### 4. **Other Skills**

   - **Cloudinary Integration**: I learned how to use **Cloudinary** to manage and host images in the cloud, which is a key skill when working with image-heavy applications.
   - **Version Control with Git**: I used **Git** for version control, allowing me to track changes, collaborate with others, and manage different versions of my project.
   - **API Integration**: I learned how to make requests to external APIs using **Axios**, which is essential for communicating between my front-end and back-end or with third-party services.
   - **Security Best Practices**: I implemented basic security measures in your project, like using **JWT** for authentication.
   - **User-Centric Design**: I improved my understanding of user experience (UX) by ensuring that my website was user-friendly and easy to navigate, especially in terms of donation forms and navigation.

### 5. **Project Management and Workflow**
   - **Task Management**: By breaking down my project into smaller tasks and phases, I learned how to effectively manage and structure large projects.

### 6. **Problem-Solving**
   - **Debugging**: I honed your debugging skills by troubleshooting issues related to both front-end and back-end functionalities.
   - **Optimizing Performance**: I gained insight into how to improve the performance of my app, from lazy loading images to optimizing React components and API calls.
   
### 7. **Creating a Full-Stack Application**
   - I learned how to integrate both front-end and back-end code to create a **full-stack** application, and I now understand the interaction between the client (React) and the server (Node.js/Express).
   - I developed the ability to store data on the server, validate and process forms, and return meaningful responses to the user.

### In Summary:
By building this project, I’ve developed both front-end and back-end skills, tackled real-world problems, and gained practical experience with a wide range of technologies. I’ve learned how to build a complete web application, from designing the UI with React and Tailwind CSS to handling server-side logic with Node.js and Express. I now have hands-on experience with integrating APIs, authenticating users, and managing databases. This project also shows my ability to deploy and maintain applications, making it a strong addition to your portfolio.

---

## Run Locally

Clone the project

```bash
  git clone https://github.com/ayushman-111202/MiniProject-PurrEverTogetherSanctuary-PETS-
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

---

## Feedback

If you have any feedback, please reach out to us at ayushmanshukla.2021@outlook.com

---