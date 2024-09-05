import React from 'react';
import Image from 'next/image';
import nextConfig from "../next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

const Product = () => (
    <div className="max-w-2xl mx-auto p-4">
        <div className="flex gap-2.5">
            <Image src={`${BASE_PATH}/screen1.png`} alt="screen1" width={500} height={500} className="rounded-lg shadow-lg" />
            <Image src={`${BASE_PATH}/screen2.png`} alt="screen2" width={472} height={592} className="rounded-lg shadow-lg object-contain" />
        </div>
        <p className="text-lg mt-2">Any Page Reader is free software. It integrates with various text-to-speech solutions, allowing you to listen to web pages.</p>
        <div className="flex space-x-4 mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Get Browser Extension</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Get App</button>
        </div>
        <div className="p-4 rounded-lg shadow-md">
            <div className="text-lg font-semibold mb-2">Supported TTS Engines</div>
            <ul className="list-disc list-inside">
                <li className="mb-1">
                    <a href="https://www.ah-soft.com/voice/" target="_blank" rel="noopener noreferrer">Voicepeak</a>
                </li>
                <li className="mb-1">
                    <a href="https://voicevox.hiroshiba.jp/" target="_blank" rel="noopener noreferrer">Voicevox</a>
                </li>
                <li className="mb-1">
                    <a href="https://github.com/litagin02/Style-Bert-VITS2" target="_blank" rel="noopener noreferrer">StyleBertVits2</a>
                </li>
            </ul>
        </div>
    </div>
);

export default Product;