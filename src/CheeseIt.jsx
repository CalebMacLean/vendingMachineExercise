import React from 'react';
import { Link } from 'react-router-dom';

/** CheeseIt Component
 * 
 * This component displays a Cheese It snack page.
 * 
 * Props: None
 * 
 * State: None
 */

const CheeseIt = () => {
    // Render
    return (
        <div className="CheeseIt">
            <h1>Cheese It</h1>
            <p>This is the Cheese It page.</p>
            <Link to="/">Go back</Link>
        </div>
    );
}

// Exports
export default CheeseIt;