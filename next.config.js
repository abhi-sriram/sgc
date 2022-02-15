/** @type {import('next').NextConfig} */
/** @type {import('next-pwa').withPWA} */



const withPWA = require('next-pwa')
 
module.exports = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        // disable: process.env.NODE_ENV === 'development',
    },
    reactStrictMode: true,
})