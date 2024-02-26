import React, { useState } from 'react';
import styles from '../Accordion.module.css'; // Make sure the path is correct

const Accordion = ({ title, content, imageUrl }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.card} onClick={() => setIsOpen(!isOpen)}>
            <img src={imageUrl} alt={title} className={styles.cardImage} />
            <div className={styles.cardHeader}>
                {title}
            </div>
            <div className={styles.cardContent}>
                {content}
            </div>
            {/* If you have a footer, include it here */}
            <div className={styles.cardFooter}>
                {/* Footer content */}
            </div>
        </div>
    );
};

export default Accordion;
