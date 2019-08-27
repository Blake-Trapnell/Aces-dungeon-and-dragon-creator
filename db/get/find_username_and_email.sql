SELECT * FROM users
WHERE username = $1 OR
email ILIKE $2;
