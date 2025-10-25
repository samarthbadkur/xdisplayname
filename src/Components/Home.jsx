import React, { useState } from 'react';
import '../Styles/Home.css';

function Home() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (firstName.trim() && lastName.trim()) {
            setFullName(`${firstName} ${lastName}`);
        }
    };

    return (
        <div className="container">
            <h1>Full Name Display</h1>
            
            <form onSubmit={handleSubmit} className="name-form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>

            {fullName && (
                <div className="result">
                    <h3>Full Name: {fullName}</h3>
                </div>
            )}
        </div>
    );
}

export default Home;
