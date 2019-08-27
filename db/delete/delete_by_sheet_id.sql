DELETE FROM additional_info
where sheet_id = $1;

DELETE FROM class_race
where sheet_id = $1;

DELETE FROM ability_points
where sheet_id = $1;

DELETE FROM cha_skills
where sheet_id = $1;

DELETE FROM dex_skills
where sheet_id = $1;

DELETE FROM int_skills
where sheet_id = $1;

DELETE FROM str_skills
where sheet_id = $1;

DELETE FROM wis_skills
where sheet_id = $1;

DELETE FROM character_sheets
where sheet_id = $1;

