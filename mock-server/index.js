const app = require('express')();

app.use(require('cors')());

const fake_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

app.get('/generate-passcode', (req, res) => res.end());
app.get('/check-passcode', (req, res) => {
    res.send({ token: fake_token })
});
app.get('/member', (req, res) => res.send({
    first_name: 'johnny',
    last_name: 'depp',
    birth_year: new Date(),
    relationship_type: 'mother'
}));
app.post('/member', (req, res) => {
    res.send({ token: fake_token })
});

const port = 48736;
app.listen(port)