const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/new-car', (req, res) => {
    const cars = [
        { name: "BMW 7 Series", price: "₹ 1,70,00,000", type: "Sedan" },
        { name: "BMW X6 M60i", price: "₹ 1,78,00,000", type: "SUV" },
        { name: "BMW X3", price: "₹ 76,50,000", type: "SUV" }
    ];
    res.render('new-car', { cars });
});


app.get('/test-drive', (req, res) => {
    res.render('test-drive', { success: false });
});


app.post('/test-drive', (req, res) => {
    const { name, carModel, date } = req.body;
    res.render('test-drive', { success: true, name, carModel, date });
});


app.get('/build-car', (req, res) => {
    res.render('build-car', { result: null });
});


app.post('/build-car', (req, res) => {
    const { model, color, wheels } = req.body;
    let basePrice = model === 'X5' ? 8000000 : 9500000;
    let colorPrice = color === 'Matte Black' ? 200000 : 50000;
    let total = basePrice + colorPrice;

    res.render('build-car', { 
        result: { model, color, wheels, total } 
    });
});

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});