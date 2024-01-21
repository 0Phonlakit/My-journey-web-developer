-- Import extension  --
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create table  --
CREATE TABLE level2 (
    id SERIAL PRIMARY KEY,
    email TEXT,
    password BYTEA
);

-- Check data by HEX Number  --
SELECT encode(password, 'hex') AS password_hex FROM level2 WHERE id = 1 ;

-- Check data by HEX Number  --
-- password --
c30d040703025eb1244b4aef8e8275d235012578629cf6ab0448b71aadad526d8176be32e3526812bf5101be31aa91acbc09feb5cded44dde107e007b89933b6c6c641d2dada