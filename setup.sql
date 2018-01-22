CREATE TABLE likes (
	id SERIAL PRIMARY KEY,
	photoName VARCHAR(255) NOT NULL,
	likes INT NOT NULL DEFAULT 0
);
DROP TABLE likes;
INSERT INTO likes (photoName) VALUES ('mirandas-dairy'), ('zoo-gorilla'), ('albania-cifteli'), ('albania-view'), ('mesa-temple'), ('yellowstone');