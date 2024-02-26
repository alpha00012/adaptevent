import React from 'react';
import Accordion from './Accordion'; // Update the import path if necessary
import styles from '../Accordion.module.css'; // Update the path to your CSS module as necessary
import logo from '/assets/logos/logo.png';
const ObjectivesList = ({ objectives }) => {
    return (
        <div className={styles.cardsContainer}>
            {objectives.map((objective, index) => (
                <Accordion 
                    key={index} 
                    title={objective.title} 
                    content={objective.content}
                    imageUrl={objective.image} // Ensure you include imageUrl in your objectives data
                />
            ))}
        </div>
    );
};

export default ObjectivesList;
