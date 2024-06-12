import React from "react";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const TaskContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const TaskItem = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const ToggleButton = styled.button`
  background-color: ${(props) => props.theme.secondary};
  color: #000000;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 20px;
  margin-right: 10px;
`;

const tasks = [
  {
    id: 1,
    title: "Initialize Redux Store",
    description: "Configure Redux Toolkit to manage the global state.",
  },
  {
    id: 2,
    title: "Create Theme Slice",
    description: "Create a slice in Redux to manage the theme state.",
  },
  {
    id: 3,
    title: "Implement Theme Toggle",
    description:
      "Implement a component to toggle between light and dark themes.",
  },
  {
    id: 4,
    title: "Setup Routing",
    description: "Configure React Router to navigate between different pages.",
  },
];

const TaskPage = () => {
  return (
    <TaskContainer>
      <ToggleButton>
        <ThemeToggle />
      </ToggleButton>
      <ToggleButton>
        <Link to="/">Go Back to Home</Link>
      </ToggleButton>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <TaskItem key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </TaskItem>
      ))}
    </TaskContainer>
  );
};

export default TaskPage;
