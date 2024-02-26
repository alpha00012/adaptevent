import React, { useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout.jsx';
import '../layout/Formulaire.css'; // Assurez-vous que ce chemin est correct

const Formulaire = () => {
    const [visitorType, setVisitorType] = useState('');

    const handleVisitorTypeChange = (event) => {
        setVisitorType(event.target.value);
    };

    const redirectToForm = () => {
        let url = '';
        switch (visitorType) {
            case 'participant':
                url = 'https://forms.office.com/r/mUnWRG9kSb';
                break;
            case 'exhibitor':
                url = 'https://forms.gle/Ys1MRwoEnGLz5yz58';
                break;
            case 'speaker':
                url = 'https://forms.office.com/r/uZXubN9phe';
                break;
            default:
                alert('Please select a visitor type');
                return;
        }
        window.location.href = url;
    };

    return (
        <DefaultLayout>
            <div className="formulaire-container">
                <h1>Congress Registration</h1>
                <div className="visitor-type-options">
                    <label>
                        <input 
                            type="radio" 
                            name="visitorType" 
                            value="participant" 
                            onChange={handleVisitorTypeChange} 
                        />
                        Participant
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="visitorType" 
                            value="exhibitor" 
                            onChange={handleVisitorTypeChange} 
                        />
                        Exhibitor
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="visitorType" 
                            value="speaker" 
                            onChange={handleVisitorTypeChange} 
                        />
                        Speaker
                    </label>
                </div>
                <button 
                    className="submit-btn"
                    onClick={redirectToForm}>
                    Go to Registration Form
                </button>
            </div>
        </DefaultLayout>
    );
};

export default Formulaire;
