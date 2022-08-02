/* 
This SQL scripts creates and fills the activation table. The activation table will be used for storing tokens 
associated with account creation or password reset.
The fields in the table are:
	- activation_id: Serial unique ID associated with the token
	- user_id: Reference to the user to whom the token belongs (The user that created an account or forgot his password).
	- expirationtime: Timestamp of when the token becomes invalid. The user needs to finish account creation or password reset before this date.
	- token: A generated string sequence used to identify the user.
	- pwreset: Boolean value to determine whether the entry is an account creation or a password reset.
*/
CREATE TABLE activation (
	activation_id SERIAL PRIMARY KEY,
	user_id integer REFERENCES users (user_id)
	    ON DELETE CASCADE,
	expirationtime timestamp NOT NULL,
	token varchar(511) NOT NULL UNIQUE,
	pwreset boolean NOT NULL
);

/* Information from the original usertable is used to fill the activation table. */
/* TODO: Current tokens will probably not have to be stored. The activation table will thus probably be empty at the start of deployment. */
INSERT INTO activation(user_id, expirationtime, token, pwreset)
SELECT id, CURRENT_TIMESTAMP, activationkey, FALSE
FROM t_usertable;
