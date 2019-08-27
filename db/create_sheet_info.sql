INSERT INTO class_race (user_id, sheet_id, character_name, class, level, background, playername, race, alignment)
VALUES (${user_id}, ${sheet_id}, ${characterName}, ${playerClass}, 1, ${background}, ${playerName}, ${race}, ${alignment} );

INSERT INTO ability_points(user_id, sheet_id, strength, dexterity, wisdom, intelligence, charisma, constitution)
VALUES (${user_id}, ${sheet_id}, ${str}, ${dex}, ${wis}, ${int}, ${cha}, ${con});

INSERT INTO cha_skills (user_id, sheet_id, deception, intimidation, performance, persuassion)
VALUES (${user_id}, ${sheet_id}, ${deception}, ${intimidation}, ${performance}, ${persuassion});

INSERT INTO dex_skills (user_id, sheet_id, acrobatics, sleight_of_hand, stealth)
VALUES (${user_id}, ${sheet_id}, ${acrobatics}, ${sleight_of_hand}, ${stealth});

INSERT INTO int_skills (user_id, sheet_id, arcana, history, investigation, nature, religion)
VALUES (${user_id}, ${sheet_id}, ${arcana}, ${history}, ${investigation}, ${nature}, ${religion});

INSERT INTO str_skills ( user_id, sheet_id, athletics)
VALUES (${user_id}, ${sheet_id}, ${athletics});

INSERT INTO wis_skills (user_id, sheet_id, animal_handling, insight, medicine, perception, survival)
VALUES (${user_id}, ${sheet_id}, ${animal_handling}, ${insight}, ${medicine}, ${perception}, ${survival});

INSERT INTO additional_info (user_id, sheet_id, speed, hit_die)
VALUES (${user_id}, ${sheet_id}, ${speed}, ${hit_die});

SELECT c.sheet_id, c.user_id,
cr.character_name, cr.playername, cr.class, cr.race, cr.level, cr.background, cr.alignment, cr.sheet_id, cr.user_id,
ap.strength, ap.dexterity, ap.wisdom, ap.intelligence, ap.constitution, ap.charisma, ap.passive_perception,
d.acrobatics, d.sleight_of_hand, d.stealth,
s.athletics,
w.animal_handling, w.insight, w.medicine, w.perception, w.survival,
i.arcana, i.history, i.investigation, i.nature, i.religion,
cp.deception, cp.intimidation, cp.performance, cp.persuassion,
ai.speed, ai.hit_die
FROM character_sheets c
JOIN class_race cr on c.sheet_id = cr.sheet_id
RIGHT JOIN ability_points ap ON c.sheet_id = ap.sheet_id
RIGHT JOIN dex_skills d ON c.sheet_id = d.sheet_id
RIGHT JOIN str_skills s ON c.sheet_id = s.sheet_id
RIGHT JOIN wis_skills w ON c.sheet_id = w.sheet_id
RIGHT JOIN int_skills i ON c.sheet_id = i.sheet_id
RIGHT JOIN cha_skills cp ON c.sheet_id = cp.sheet_id
FULL OUTER JOIN additional_info ai ON c.sheet_id = ai.sheet_id
WHERE c.user_id = ${user_id};
