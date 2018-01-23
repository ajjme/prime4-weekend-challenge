CREATE TABLE likes (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	likes INT NOT NULL DEFAULT 0,
	reason VARCHAR(255) NOT NULL
);
DROP TABLE likes;
INSERT INTO likes (name, reason) VALUES ('mirandas-dairy', 'I have always wanted to visit a farm since I was little, and I finally got to this year.'), ('zoo-gorilla', 'I really like animals, so I started going to the zoo more often this year.'), ('albania-cifteli', 'Albanian traditional dress and music is really unique.'), ('albania-view', 'I got to go show my dad some of my favorite places in Albania this year.'), ('mesa-temple', 'I visited the Mesa Arizona LDS temple with my dad this year.'), ('yellowstone', 'I went on a weeklong trip to all locations in Yellowstone this year with a good friend from high school.');

SELECT * FROM likes WHERE name = 'yellowstone';

UPDATE likes SET likes = 3 WHERE name = 'zoo-gorilla';