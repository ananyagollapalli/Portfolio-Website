"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SignSpeak (Real-time Hand Gesture Recognition)",
    description: "A deep learning model which uses the libraries OpenCV, MediaPipe, Scikit-learn. It analyses the hand landmarks of the user to predict the sign. This facilitates inclusive communication for individuals with hearing impairments, bridging gaps in sign language interpretation and fostering accessibility.",
    image: "/images/projects/13.png",
    gitUrl: "https://github.com/ananyagollapalli/SignSpeak",
  },
  {
    id: 2,
    title: "Sentiment Analyser (Classifies reviews as positive or negative)",
    description: "This model utilizes natural language processing (NLP) techniques, RNNs and LSTM networks, to predict the sentiment of movie reviews. Implemented using the Python libraries TensorFlow, Keras and Scikit-learn.",
    image: "/images/projects/14.png",
    gitUrl: "https://github.com/ananyagollapalli/Movie-Reviews-Sentiment-Analyser",
  },
  {
    id: 3,
    title: "Blogsite using MERN Stack",
    description: "This project is a dynamic blog platform leveraging the MERN stack (MongoDB, Express.js, React, Node.js). Users can create, edit, and share blog posts, while enjoying a responsive and interactive user interface for an immersive blogging experience.",
    image: "/images/projects/7.png",
    gitUrl: "https://github.com/ananyagollapalli/Blogsite",
  },
  {
    id: 4,
    title: "Pneumonia Detection using ML",
    description: "Engineered a deep learning model for precise pneumonia detection using X-ray images, underlining my proficiency in machine learning techniques.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/ananyagollapalli/Pneumonia-Detection",
  },
  {
    id: 5,
    title: "Box Office Revenue Prediction using Regression",
    description: "Box office revenue prediction through regression involves leveraging statistical models to anticipate a movie's financial success, considering factors like genre, budget, and release date.",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/ananyagollapalli/Box-Office-Revenue-Predictor",
  },
  {
    id: 7,
    title: "Weather API Application with its own RESTFUL API",
    description: "A user-friendly application that fetches real-time weather data using a weather API. Offering current weather conditions, forecasts, and location-based updates, this app provides a seamless and informative experience for users to stay updated on the latest weather information.",
    image: "/images/projects/5.png",
    gitUrl: "https://github.com/ananyagollapalli/Weather-app",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });




  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project,index) => (
            <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
            </motion.li>
            ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
