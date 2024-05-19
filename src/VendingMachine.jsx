// Imports: React, useState, Link, CheeseIt, Goldfish, Poptarts
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';
import CheeseIt from './CheeseIt.jsx';
import Goldfish from './Goldfish.jsx';
import Poptarts from './Poptarts.jsx';

/** VendingMachine Component 
 * 
 * This component acts as the home page for vending machine application. It displays a vending machine title and three links to different snack pages.
 * 
 * Props: None
 * 
 * State: None
*/
const VendingMachine = () => {
    // Render
    return (
        <div className="VendingMachine">
        <h1>Vending Machine</h1>
        <div className="VendingMachine-links">
            <Link to="/cheeseit">Cheese It</Link>
            <Link to="/goldfish">Goldfish</Link>
            <Link to="/poptarts">Poptarts</Link>
            <p>This home page is working!</p>
        </div>
        </div>
    );
};

// Exports
export default VendingMachine;