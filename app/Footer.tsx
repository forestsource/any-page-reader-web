import React from 'react';
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 px-8 text-center fixed bottom-0 w-full">
            <p>2024 Any Page Reader</p>
            <p>
                <Link href="/privacy_policy">Privacy Policy</Link>
            </p>
        </footer>
    )
};

export default Footer;