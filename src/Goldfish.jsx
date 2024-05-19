import React from 'react';
import { Link } from 'react-router-dom';

/** Goldfish Component
 * 
 * This component displays a Goldfish snack page.
 * 
 * Props: None
 * 
 * State: None
 */
const Goldfish = () => {
    // Render
    return (
        <div className="Goldfish">
            <h1>Goldfish</h1>
            <p>This is the Goldfish page.</p>
            <Link to="/">Go back</Link>
        </div>
    );
}

// Exports
export default Goldfish;