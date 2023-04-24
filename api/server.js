const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
const Redis = require("ioredis");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'mydb',
    password: 'password',
    port: 5432
});

const redisClient = new Redis({
    host: 'redis',
    port: 6379,
});

async function cacheAllData() {
    try {
        const client = await pool.connect();
        const { rows } = await client.query('SELECT * FROM shoes');
        rows.forEach(shoe => {
            redisClient.set(`shoes:${shoe.id}`, JSON.stringify(shoe), 'EX', 60);
        });
    } catch (error) {
        console.log(error);
    }
}

async function cacheAllReviews() {
    try {
        const client = await pool.connect();
        const { rows } = await client.query('SELECT * FROM review');
        rows.forEach((row) => {
            redisClient.set(`review:${row.id}`, JSON.stringify(row), 'EX', 60);
        });
    } catch (error) {
        console.log(error);
    }
}

app.get('/api/shoes', async (req, res) => {
    try {
        const cachedData = await redisClient.get('allShoesData');
        if (cachedData) {
            return res.status(200).send(JSON.parse(cachedData));
        } else {
            const data = await pool.query('SELECT * FROM shoes');
            redisClient.set('allShoesData', JSON.stringify(data.rows), 'EX', 60);
            return res.status(200).send(data.rows);
        }
    } catch (error) {
        console.log(error);
        return res.status(404).send(error);
    }
});

app.get('/api/review/:id', async (req, res) => {
    try {
        const cachedData = await redisClient.get(`review:${req.params.id}`);

        if (cachedData) {
            return res.status(200).send(JSON.parse(cachedData));
        } else {
            const { rows } = await pool.query('SELECT * FROM review WHERE review_id=$1', [req.params.id]);
            if (rows.length === 0) {
                return res.status(404).send("Review not found");
            } else {
                const review = rows[0];
                redisClient.set(`review:${req.params.id}`, JSON.stringify(review), 'EX', 60);
                return res.status(200).send(review);
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

app.get('/api/:word', (req, res, next) => {
    const word = req.params.word;
    res.status(405).send(`NOT FOUND!! - 405 ERROR - /api/${word}/ DOES NOT EXIST`);
});

app.post('/api/shoes/', async (req, res) => {
    const { name, price, gender, image, image_array, description, color_description, style, size_array } = req.body;

    if (!name || !price || !gender || !image || !image_array || !description || !color_description || !style || !size_array) {
        return res.status(407).send("Error in post data or insufficient data provided for post route shoes");
    }

    try {
        const { rows } = await pool.query(
            'INSERT INTO shoes (name, price, gender, image, image_array, description, color_description, style, size_array) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;',
            [name, price, gender, image, image_array, description, color_description, style, size_array]
        );
        const shoeInfo = rows[0];
        redisClient.del('allShoesData');
        return res.status(202).send(shoeInfo);
    } catch (error) {
        console.log(error);
        return res.status(409).send(error);
    }
});

app.post('/api/review/', async (req, res) => {
    const { review_id, title, stars, user_name, date_created, summary, likes, dislikes } = req.body;

    if (!review_id || !title || !stars || !user_name || !date_created || !summary || !likes || !dislikes) {
        return res.status(407).send("Error in post data or insufficient data provided for post route review");
    }

    try {
        const { rows } = await pool.query(
            'INSERT INTO review (review_id, title, stars, user_name, date_created, summary, likes, dislikes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;',
            [review_id, title, stars, user_name, date_created, summary, likes, dislikes]
        );
        const reviewInfo = rows[0];
        redisClient.del(`review:${review_id}`);
        return res.status(202).send(reviewInfo);
    } catch (error) {
        console.log(error);
        return res.status(409).send(error);
    }
});


//DELETE ROUTES (x2) - NOT NECESSARY
//PATCH ROUTES (x2) - NOT NECESSARY
async function startup() {
    // Cache all data in Redis
    await cacheAllData();
    await cacheAllReviews();

    app.listen(3000, () => {
        console.log('Server listening on port 3000')
    })
}

startup();