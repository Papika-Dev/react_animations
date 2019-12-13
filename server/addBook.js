import db from './db';
import { checkToken } from './authorization';
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();

const setBooksInfo = (req, res, next) => {
    // path for local server
    db.none(`INSERT INTO books (user_id, title, author, description, cover, price, category)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [req.id, req.body.title, req.body.author,
        req.body.description, req.body.url, req.body.price, req.body.category])
        .then(() => {
            next();
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(403);
        });
};

export default (app, upload) => {
    // add and get immediately book cover
    app.post('/api/book/cover', upload.single('cover'), (req, res) => {
        const mypath = `http://localhost:3000/resources/${req.file.filename}`;
        res.status(200).json({ path: mypath });
    });

    app.post('/api/user/books', checkToken, jsonParser, setBooksInfo, (req, res) => {
        res.sendStatus(200);
    });
};