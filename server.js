const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

let data = [{ id: 'test', password: '123456' }];

// To find if the id exists
function findUser(body, type) {
  if (type === 'signup') {
    let matchedUser = data.map(user => user.id === body.id);
    console.log(matchedUser[matchedUser.length - 1]);
    // console.log(data);
    return matchedUser[matchedUser.length - 1];
  }
  if (type === 'login') {
    let matchedUser = data.map(
      user => user.id === body.id && user.password === body.password
    );
    console.log(matchedUser[matchedUser.length - 1]);
    // console.log(data);
    console.log(matchedUser);
    return matchedUser[matchedUser.length - 1];
  }
}

// To register ID && PWD
function registerID(body) {
  data.push({ id: body.id, password: body.password });
}
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => {
  res.json({ msg: 'you got a data from this server right' });
});

app.post('/signup', (req, res) => {
  // if the user is not in the fake DB(data)
  if (!findUser(req.body, 'signup')) {
    registerID(req.body);
    console.log('data:', data);
    return res.json({ msg: 'SINGUP/SUCCESS' });
  } else {
    return res.json({ msg: 'SINGUP/EXISTS_ALREADY' });
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
