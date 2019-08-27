DROP TABLE class_race_skills;
DROP TABLE atks_spells;
DROP TABLE character_info;
DROP TABLE cha_skills;
DROP TABLE int_skills;
DROP TABLE wis_skills;
DROP TABLE str_skills;
DROP TABLE dex_skills;
DROP TABLE additional_info;
DROP TABLE class_race;
DROP TABLE ability_points;
DROP TABLE character_sheets;
DROP TABLE users;

CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(25),
email VARCHAR(100),
Hash TEXT
);

CREATE TABLE character_sheets (
character_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
sheet_id SERIAL UNIQUE
);

CREATE TABLE ability_points (
ap_id SERIAL PRIMARY KEY,
strength INT,
dexterity INT,
constitution INT,
wisdom INT,
charisma INT,
intelligence INT,
passive_perception INT,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE class_race (
class_race_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
character_name VARCHAR(255),
class VARCHAR(50),
level INT,
background VARCHAR(50),
playername VARCHAR(100),
race VARCHAR(50),
alignment VARCHAR(50),
sheet_id INT REFERENCES character_sheets(sheet_id));

CREATE TABLE additional_info (
info_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
archetype VARCHAR(50),
armor_class INT,
initiative INT,
speed INT,
hit_die INT,
equipment TEXT,
sheet_id INT REFERENCES character_sheets(sheet_id));

CREATE TABLE dex_skills (
dex_skills_id SERIAL PRIMARY KEY,
acrobatics BOOLEAN,
sleight_of_hand BOOLEAN,
stealth BOOLEAN,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE str_skills (
str_skills_id SERIAL PRIMARY KEY,
athletics BOOLEAN,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE wis_skills (
wis_skills_id SERIAL PRIMARY KEY,
animal_handling BOOLEAN,
insight BOOLEAN,
medicine BOOLEAN,
perception BOOLEAN,
survival BOOLEAN,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE int_skills (
int_skills_id SERIAL PRIMARY KEY,
arcana BOOLEAN,
history BOOLEAN,
investigation BOOLEAN,
nature BOOLEAN,
religion BOOLEAN,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE cha_skills (
cha_skills_id SERIAL PRIMARY KEY,
deception BOOLEAN,
intimidation BOOLEAN,
performance BOOLEAN,
persuassion BOOLEAN,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE character_info (
character_id SERIAL PRIMARY KEY,
person_traits TEXT,
ideals TEXT,
bonds TEXT,
flaws TEXT,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE atks_spells (
attacks_id SERIAL PRIMARY KEY,
attacks TEXT,
spells TEXT,
feats TEXT,
traits TEXT,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE class_race_skills (
skills_id SERIAL PRIMARY KEY,
skill TEXT,
barbarian BOOLEAN,
bard BOOLEAN,
cleric BOOLEAN,
druid BOOLEAN,
fighter BOOLEAN,
monk BOOLEAN,
paladin BOOLEAN,
ranger BOOLEAN,
rogue BOOLEAN,
sorcerer BOOLEAN,
warlock BOOLEAN,
wizard BOOLEAN
);

CREATE TABLE background_skills (
skills_id SERIAL PRIMARY KEY,
skill TEXT,
acoylte BOOLEAN,
charlatan BOOLEAN,
criminal_spy BOOLEAN,
entertainer BOOLEAN,
folk_hero BOOLEAN,
guild_artisan BOOLEAN,
hermit BOOLEAN,
noble BOOLEAN,
outlander BOOLEAN,
sage BOOLEAN,
sailor BOOLEAN,
soldier BOOLEAN,
urchin BOOLEAN
);


INSERT INTO users (username, email, hash)
VALUES ('Aceassin', 'Blake.Trapnell103@gmail.com', '$2a$10$tBoYVjxZvEnMI6Lzpp/LQefE5RNrh9IZc4w7WOXgOOrvsuj6cWSka');


INSERT INTO character_sheets (user_id, sheet_id)
VALUES ( 1, 1);


INSERT INTO ability_points(strength, dexterity, wisdom, intelligence, charisma, constitution, user_id, sheet_id)
VALUES ( 14, 11, 9, 13, 16, 15, 1, 1);


INSERT INTO class_race (user_id, character_name, class, level, background, playername, race, alignment, sheet_id)
VALUES (1, 'Ion Steel', 'Cleric', 1, 'Knight', 'Blake Trapnell', 'Human', 'Chaotic Evil', 1 );


INSERT INTO dex_skills (acrobatics, sleight_of_hand, stealth, user_id, sheet_id)
VALUES ( false, false, false, 1, 1);


INSERT INTO str_skills (athletics, user_id, sheet_id)
VALUES (false, 1 , 1);


INSERT INTO wis_skills (animal_handling, insight, medicine, perception, survival, user_id, sheet_id)
VALUES (false, false, true, false, false, 1, 1);


INSERT INTO int_skills (user_id, arcana, history, investigation, nature, religion, sheet_id)
VALUES (1, true, true, false, false, false, 1);


INSERT INTO cha_skills (user_id, deception, intimidation, performance, persuassion, sheet_id)
VALUES (1, false, false, false, true, 1);


INSERT INTO character_info (user_id, person_traits, Ideals, bonds, flaws, sheet_id)
VALUES (1, 'Personality Traits', 'Ideals', 'Bonds', 'Flaws', 1);

INSERT INTO atks_spells (user_id, sheet_id, attacks, spells, feats, traits)
VALUES (1, 1, 'attack', 'spell', 'feats', 'traits');

INSERT INTO additional_info (user_id, sheet_id, armor_class, initiative, speed, hitdice, equipment, archetype)
VALUES (1, 1, 18, 0, 30, 8, 'equipment', 'life');

INSERT INTO class_race_skills (skill, barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard)
VALUES ('Acrobatics', FALSE, TRUE, FALSE, FALSE, TRUE, TRUE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE),
('animal_handling', TRUE, TRUE, FALSE, TRUE, TRUE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE),
('Arcana', FALSE, TRUE, FALSE, TRUE, TRUE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE),
('Athletics', True, true, false, false, true, true, true, true, true, false, false, false),
('deception', false, true, false, false, false, false, false, false, true, true, true, false),
('history', false, true, true, false, true, true, false, false, false, false, true, true),
('insight', false, true, true, true, true, true, true, true, true, true, false, true),
('intimidation', true, true, false, false, true, false, true, false, true, true, true, false),
('investigation', false, true, false, false, false, false, false, true, true, false, true, true),
('medicine', false, true, true, true, false, false, true, false, false, false, false, true),
('nature', true, true, false, true, false, false, false, true, false, false, true, false),
('perception', true, true, false, true, true, false, false, true, true, false, false, false),
('performance', false, true, false, false, false, false, false, false, true, false, false, false),
('persuassion', false, true, true, false, false, false, true, false, true, true, false, false),
('religion', false, true, true, true, false, true, true, false, false, true, true, true),
('sleight_of_hand', false, true, false, false, false, false, false, false, true, false, false, false),
('stealth', false, true, false, false, false, true, false, true, true, false, false, false),
('survival', true, true, false, true, true, false, false, true, false, false, false, false);

INSERT INTO background_skills (skill, acoylte, charlatan, criminal_spy, entertainer, folk_hero, guild_artisan, hermit, noble, outlander, sage, sailor, Soldier, Urchin)
VALUES ('Acrobatics', FALSE, FALSE, FALSE, TRUE , FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE),
('animal_handling', FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE),
('Arcana', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE),
('Athletics', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, TRUE, FALSE),
('deception', FALSE, TRUE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE),
('history', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE , FALSE, TRUE , FALSE, FALSE, FALSE),
('insight', TRUE, FALSE, FALSE, FALSE, FALSE, TRUE , FALSE, FALSE, FALSE, FALSE, FALSE, TRUE , FALSE),
('intimidation', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE),
('investigation', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE ),
('medicine', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE , FALSE, FALSE, FALSE, FALSE, FALSE, FALSE ),
('nature', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE ),
('perception', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE , FALSE, FALSE ),
('performance', FALSE, FALSE, FALSE, TRUE , FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE ),
('persuassion', FALSE, FALSE, FALSE, FALSE, FALSE, TRUE , FALSE, TRUE , FALSE, FALSE, FALSE, FALSE, FALSE ),
('religion', TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE ),
('sleight_of_hand', FALSE, TRUE , FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE ),
('stealth', FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE ),
('survival', FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, TRUE , FALSE, FALSE, FALSE, FALSE);