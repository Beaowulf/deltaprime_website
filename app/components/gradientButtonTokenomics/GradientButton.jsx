import React from 'react';
import './GradientButton.css';

const GradientButton = ({ label, onClick }) => {
    return (
        <div className="gradient-border-viewmore">
            <button className="gradient-button dark:bg-[#252948] bg-[#E8E8F2] dark:text-[#E8E8F2] " onClick={onClick}>
                {label}
            </button>
        </div>
    );
};

export default GradientButton;
