import React from 'react';

const Header = () => (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-gray-100 p-6 text-center shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-tight" style={{
            fontFamily: 'Arial, sans-serif',
            background: 'linear-gradient(to right, #ff7e5f, #feb47b, #ff6a95, #ff8c42, #ff3cac)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            lineHeight: '1.2'
        }}>
            Any Page Reader
        </h1>
    </header>
);

export default Header;