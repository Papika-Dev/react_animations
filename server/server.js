import express from 'express';
import db from './db';
import useragent from 'express-useragent';
import uniqid from 'uniqid';
import bodyParser from 'body-parser';
import multer from 'multer';
import path from 'path';
import registration from './registration';
import {authentication} from './authentication';
import { authorization, checkToken } from './authorization';
import refreshToken from './refreshToken';
import setAvatar from './setAvatar';
import addBook from './addBook';
import userBookList from './userBookList';
import bookInfo from './bookInfo';
import favorites from './favorites';
import comments from './comments';
import bookRating from './bookRating';

const jsonParser = bodyParser.json();

// create server
const app = express();
app.set('trust proxy', true);

const port = (process.env.PORT || 8080);

app.listen(port, (err) => {
  if (err) {
    console.log('Server is not started, error : ', err);
  } else {
    console.log('Server is started');
  }
});


// use information of client os / browser ..etc
app.use(useragent.express());

app.use('/resources', express.static(path.join(__dirname, 'uploads')));

// Create upload folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './server/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${uniqid()}${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage });


// **REGISTRATION--------------
registration(app);
// **AUTHETICATION-----------------
authentication(app);
// **AUTHORIZATION--------------------
authorization(app)
// **REFRESH TOKEN ------------------
refreshToken(app);
// Add Avatar picture
setAvatar(app, upload);
// ADD USERS BOOK TO DB
addBook(app, upload);
// ** GET USER BOOKLIST
userBookList(app);
// GET BOOK INFO from Book card
bookInfo(app);
// SET FAVORITES
favorites(app);
//Comments
comments(app);

// Book rating
bookRating(app);

// // Calculate and set book rating
// const calcBookRating = (arr) => {
//   const ratingSum = arr.reduce((sum, cur) => sum + cur.rating, 0);
//   return ratingSum / arr.length;
// };

// app.use((req, res, next) => {
//   db.any('SELECT rating FROM comments WHERE book_id = $1 AND rating <> $2', [req.bookId, 0])
//     .then((data) => {
//       const bookRating = Math.floor(calcBookRating(data) * 10) / 10;
//       req.rating = bookRating;
//       next();
//     })
//     .catch((err) => {
//       // eslint-disable-next-line no-console
//       console.log(err);
//     });
// });

// app.use((req, res) => {
//   db.none('UPDATE books SET rating = $1 WHERE id = $2', [req.rating, req.bookId])
//     .then(() => res.sendStatus(200))
//     .catch(() => res.sendStatus(500));
// });




// app.use('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../static/index.html'));
// });
