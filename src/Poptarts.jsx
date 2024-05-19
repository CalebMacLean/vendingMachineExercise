import React from 'react';
import { Link } from 'react-router-dom';
/** Poptarts Component
 * 
 * This component displays a Poptarts snack page.
 * 
 * Props: None
 * 
 * State: None
 */
const Poptarts = () => {
    // Render
    return (
        <div className="Poptarts">
            <h1>Poptarts</h1>
            <p>This is the Poptarts page.</p>
            <Link to="/">Go back</Link>
        </div>
    );
}

// Exports
export default Poptarts;