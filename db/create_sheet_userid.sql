INSERT INTO character_sheets (user_id)
VALUES ($1)
RETURNING sheet_id;
