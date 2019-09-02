const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

let data = [{ id: 'test', password: '123456' }];

app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => {
  res.json({ msg: 'you got a data from this server right' });
});

// a function to find if the id exists
function findUser(body, type) {
  let matchedUser;
  if (type === 'signup') {
    matchedUser = data.map(user => user.id === body.id);
    console.log(matchedUser[matchedUser.length - 1]);
    console.log(data);
  }
  if (type === 'login') {
    matchedUser = data.map(
      user => user.id === body.id && user.password === body.password
    );
    console.log(matchedUser[matchedUser.length - 1]);
    console.log(data);
  }
  return matchedUser[matchedUser.length - 1];
}

// To register ID
function registerID(body) {
  data.push({ id: body.id, password: body.password });
}

app.post('/signup', (req, res) => {
  if (findUser(req.body, 'signup')) {
    return res.json({ msg: 'This ID already exists..' });
  } else {
    registerID(req.body);
    return res.json({ msg: 'Your ID registered..' });
  }
});

app.post('/login', (req, res) => {
  if (findUser(req.body, 'login')) {
    return res.json({ msg: 'LOGIN/SUCCESS', id: req.body.id });
  } else {
    return res.json({ msg: 'LOGIN/FAILURE' });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
