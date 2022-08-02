/* This SQL scripts creates and fills the users table. The users table will be used for storing information about the users
of the application.
The fields in the table are:
	- user_id: Serial unique ID associated with the user
	- activated: Indicates whether the account of this user is activated or not
	- email: The email of the user
    - password: The hashed password of the user
    - firstname: The first name of the user
    - lastname: The last name of the user
    - userrole: The role of the user (admin, regular, computer)
    - usesmd5: Used to switch hashing algorithm. Keeps track of who's hash is still stored using md5 and who's is stored using the new hash function
*/
CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	activated boolean NOT NULL,
	email varchar(255) UNIQUE,
	password varchar(255),
	firstname varchar(255) NOT NULL,
	lastname varchar(255) NOT NULL,
	userrole integer NOT NULL,
	usesmd5 boolean NOT NULL
);

/* Information from the original usertable is used to fill the users table. */
INSERT INTO users(user_id, activated, email, password, firstname, lastname, userrole, usesmd5)
SELECT id, activated, email, encryptedpassword, firstname, lastname, userrole, TRUE
FROM t_usertable;

