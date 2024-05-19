// server.js
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(cookieParser());

    // Mock authentication
    server.post('/api/login', (req, res) => {
        const { username, password } = req.body;
        if (username === 'user' && password === 'pass') {
            res.cookie('token', 'test_token', { httpOnly: true });
            return res.status(200).json({ success: true });
        }
        return res.status(401).json({ error: 'Invalid credentials' });
    });

    server.post('/api/logout', (req, res) => {
        res.clearCookie('token');
        res.status(200).json({ success: true });
    });

    // Add this endpoint to your existing server.js
    server.get('/api/check-auth', (req, res) => {
        if (req.cookies.token) {
            return res.status(200).json({ authenticated: true });
        }
        return res.status(401).json({ authenticated: false });
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(5000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:5000');
    });
});
