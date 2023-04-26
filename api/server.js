const express = require('express');
const redis = require('redis');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pool = new Pool({
    host: 'db',
    port: 5432,
    database: 'mydb',
    user: 'postgres',
    password: 'password'
});

pool.on('error', (err) => {
    console.error('PostgreSQL error:', err);
});

const client = redis.createClient({
    host: 'redis',
    port: 6379
});

client.on('error', (err) => {
    console.error('Redis error:', err);
});

app.get('/api/shoes', (req, res, next) => {
    client.get('shoes', (err, result) => {
        if (err) {
            res.status(404).send(err);
        } else if (result) {
            const stuff = JSON.parse(result);
            res.status(200).send(stuff);
        } else {
            const redisClient = redis.createClient({ host: 'redis', port: 6379 });
            pool.query('SELECT * FROM shoes', (err, result) => {
                if (err) {
                    res.status(404).send(err);
                } else {
                    const stuff = result.rows;
                    redisClient.setex('shoes', 3600, JSON.stringify(stuff));
                    redisClient.quit();
                    res.status(200).send(stuff);
                }
            });
        }
    });
});
app.get('/api/shoes/:id', (req, res, next) => {
    const id = Number.parseInt(req.params.id);
    client.get(`shoes:${id}`, (err, result) => {
        if (err) {
            res.status(404).send(err);
        } else if (result) {
            const shoe = JSON.parse(result);
            res.status(200).send(shoe);
        } else {
            const redisClient = redis.createClient({ host: 'redis', port: 6379 });
            pool.query('SELECT * FROM shoes WHERE id=$1', [id], (err, result) => {
                if (err) {
                    res.status(404).send(err);
                } else {
                    const shoe = result.rows[0];
                    redisClient.setex(`shoes:${id}`, 3600, JSON.stringify(shoe));
                    redisClient.quit();
                    res.status(200).send(shoe);
                }
            });
        }
    });
});
app.get('/api/shoeid/:id', (req, res, next) => {
    const id = Number.parseInt(req.params.id);
    client.get(`shoeid:${id}`, (err, result) => {
        if (err) {
            res.status(404).send(err);
        } else if (result) {
            const shoe = JSON.parse(result);
            res.status(200).send(shoe);
        } else {
            const redisClient = redis.createClient({ host: 'redis', port: 6379 });
            pool.query('SELECT * FROM shoes WHERE shoeid=$1', [id], (err, result) => {
                if (err) {
                    res.status(404).send(err);
                } else {
                    const shoe = result.rows;
                    redisClient.setex(`shoeid:${id}`, 3600, JSON.stringify(shoe));
                    redisClient.quit();
                    res.status(200).send(shoe);
                }
            });
        }
    });
});

app.get('/api/review', (req, res, next) => {
    client.get('review', (err, result) => {
        if (err) {
            res.status(404).send(err);
        } else if (result) {
            const reviews = JSON.parse(result);
            res.status(200).send(reviews);
        } else {
            const redisClient = redis.createClient({ host: 'redis', port: 6379 });
            pool.query('SELECT review.*, shoes.name AS shoes_name FROM review INNER JOIN shoes ON review.review_id = shoes.id;', (err, result) => {
                if (err) {
                    res.status(404).send(err);
                } else {
                    const reviews = result.rows;
                    redisClient.setex('review', 3600, JSON.stringify(reviews));
                    redisClient.quit();
                    res.status(200).send(reviews);
                }
            });
        }
    });
});

app.get('/api/review/:id', (req, res, next) => {
    const id = Number.parseInt(req.params.id);
    client.get(`review:${id}`, (err, result) => {
        if (err) {
            res.status(404).send(err);
        } else if (result) {
            const review = JSON.parse(result);
            res.status(200).send(review);
        } else {
            const redisClient = redis.createClient({ host: 'redis', port: 6379 });
            pool.query('SELECT * FROM review WHERE review_id=$1', [id], (err, result) => {
                if (err) {
                    res.status(404).send(err);
                } else {
                    const review = result.rows[0];
                    redisClient.setex(`review:${id}`, 3600, JSON.stringify(review));
                    redisClient.quit();
                    res.status(200).send(review);
                }
            });
        }
    });
});

app.get('/api/:word', (req, res, next) => {
    const word = req.params.word;
    res.status(405).send(`NOT FOUND!! - 405 ERROR - /api/${word}/ DOES NOT EXIST`)
})

app.post('/api/shoes/', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const gender = req.body.gender;
    const image = req.body.image;
    const image_array = req.body.image_array;
    const description = req.body.description;
    const color_description = req.body.color_description;
    const style = req.body.style;
    const size_array = req.body.size_array;

    if (!name || !price || !gender || !image || !image_array || !description || !color_description || !style || !size_array) {
        return res.status(407).send("Error in post data or insufficient data provided for post route shoes")
    }

    pool.query('INSERT INTO shoes (name, price, gender, image, image_array, description, color_description, style, size_array) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING*;', [name, price, gender, image, image_array, description, color_description, style, size_array], (err, result) => {
        if (err) {
            res.status(409).send(err);
        } else {
            const shoeInfo = result.rows[0];
            res.status(202).send(shoeInfo)
        }
    })
})

app.post('/api/review/', (req, res) => {
    const review_id = req.body.review_id;
    const title = req.body.title;
    const stars = req.body.stars;
    const user_name = req.body.user_name;
    const date_created = req.body.date_created;
    const summary = req.body.summary;

    if (!review_id || !title || !stars || !user_name || !date_created || !summary) {
        return res.status(408).send("Error in post data or insufficient data provided for post route review")
    }

    pool.query('INSERT INTO review (review_id, title, stars, user_name, date_created, summary) VALUES ($1, $2, $3, $4, $5, $6) RETURNING*;', [review_id, title, stars, user_name, date_created, summary], (err, result) => {
        if (err) {
            res.status(410).send(err);
        } else {
            const reviewInfo = result.rows[0];
            res.status(203).send(reviewInfo);
        }
    })
})


//DELETE ROUTES (x2) - NOT NECESSARY
//PATCH ROUTES (x2) - NOT NECESSARY

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})


