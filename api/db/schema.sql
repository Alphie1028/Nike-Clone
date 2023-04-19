CREATE TABLE shoes (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    shoeid INT,
    price VARCHAR (26) NOT NULL,
    gender VARCHAR (75),
    image VARCHAR (500) NOT NULL,
    image_array TEXT[],
    description VARCHAR (500),
    color_description VARCHAR (255),
    style VARCHAR (150),
    size_array TEXT[]
);

CREATE TABLE review (
    id SERIAL PRIMARY KEY,
    review_id INT NOT NULL,
    title VARCHAR (255),
    stars INT NOT NULL,
    user_name VARCHAR (255) NOT NULL,
    date_created VARCHAR (30) NOT NULL,
    summary TEXT,
    FOREIGN KEY (review_id) REFERENCES shoes(id) ON DELETE CASCADE
);

