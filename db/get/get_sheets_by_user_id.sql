SELECT c.sheet_id, c.user_id,
cr.character_name, cr.playername, cr.class, cr.race, cr.level, cr.background, cr.alignment, cr.sheet_id, cr.user_id,
ap.strength, ap.dexterity, ap.wisdom, ap.intelligence, ap.constitution, ap.charisma, ap.passive_perception,
d.acrobatics, d.sleight_of_hand, d.stealth,
s.athletics,
w.animal_handling, w.insight, w.medicine, w.perception, w.survival,
i.arcana, i.history, i.investigation, i.nature, i.religion,
cp.deception, cp.intimidation, cp.performance, cp.persuassion
FROM character_sheets c
JOIN class_race cr on c.sheet_id = cr.sheet_id
RIGHT JOIN ability_points ap ON c.sheet_id = ap.sheet_id
RIGHT JOIN dex_skills d ON c.sheet_id = d.sheet_id
RIGHT JOIN str_skills s ON c.sheet_id = s.sheet_id
RIGHT JOIN wis_skills w ON c.sheet_id = w.sheet_id
RIGHT JOIN int_skills i ON c.sheet_id = i.sheet_id
RIGHT JOIN cha_skills cp ON c.sheet_id = cp.sheet_id
WHERE c.user_id = $1;