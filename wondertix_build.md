There will be differences based on which OS you're using, but here's a detailed account of how I got the WonderTix site running locally. 

1. Navigate to the directory where you want to keep the repo and run:  <br><br>
  ```git clone https://github.com/wpapsco/capstone-mockup.git```  

2. Install Node.js and NPM. On my Mac, I used package manager Homebrew to install by running `brew install node` and that installed npm as well.   

3. Run `npm install`.

4. Install and configure `postgreSQL`.  
I already had installed `postgreSQL` using Homebrew.  
To restore the previous capstone team’s database cleanly using the `wonder_tix.db` file, from what I can tell, you need to have a superuser `postgres`.  
Superuser `postgres` was not created automatically for me when I installed `postgresql 14`, so I created this superuser manually.

5. Install `pgadmin`.  
I did this with Homebrew.  
Note: you could use `psql` in terminal instead of the `pgadmin` GUI, but these instructions don’t cover how to do that.

6. Configure DB in `pgadmin`:  

* Put `wonder_tix.db` in the repo.
* Open `pgadmin`.
* Right click (ctrl-click on Mac) where it says _Servers_ and select _Create server_.
  Here’s what I used for the key fields:
    * _General_
        * Name: `localhost`
    * _Connection_
        * Host name / address: `127.0.0.1`
        * Port: `5432`
        * Username: `postgres`
* Create database — you can name it whatever you want. I chose `wtix`.
* Right click (ctrl-click on Mac) on the newly created database and select _Restore_.
* Enter the path to your `wonder_tix.db` as _Filename_ (the defaults are fine for the rest) and click _Restore_.  
The key point is that to get the restore to run completely successfully, I had to be logged in as user `postgres`.

7. Install the stripe CLI.  
I installed with the Homebrew command (which you can do from any directory, I believe):  <br><br>
	```brew install stripe/stripe-cli/stripe```  <br><br>
  If you're using Windows, you can skip the rest of this step.  
  Since I’m on a  Mac, I opened `package.json` and changed this line:  <br><br>
  ```stripe.exe listen --forward-to localhost:5000/webhooks```  <br><br>
  To:  <br><br>
  ```stripe listen --forward-to localhost:5000/hooks```

8. Create a Stripe user account [here](https://dashboard.stripe.com/register).
This involved a few steps which I can’t remember. It wasn’t too painful.

9. Create an `.env` file in the root directory. We'll add the API keys in the next step.  
Setting the host to `localhost` and the port to `5432` should work in most cases.  
```
PRIVATE_STRIPE_KEY = ...  
PUBLIC_STRIPE_KEY = ...  
PGHOST = localhost  
PGPORT = 5432  
PGUSER = ...  
PGPASSWORD = ...  
PGDATABASE = ...
```

10. Configure Stripe API keys.
Go to the [API](https://dashboard.stripe.com/test/apikeys) section of your Stripe account page, then for each key (public and private), copy the key and paste it into the appropriate spot in the `.env` file.

11. Insert an admin into the users table using bcrypt to generate a password hash  

* Decide on a username and create a password (I used a password manager).  

* Generate a hash of the password [here](https://bcrypt-generator.com/).
* After confirming the decrypted hash matched the password, add a user to the users table in the newly created WonderTix database in Postgres with:  

	```INSERT INTO users (username, pass_hash, is_superuser) VALUES (‘<username-I-chose>’, ‘<password-hash-I-generated>’, true);```   <br><br>
Note that the username and pass_hash need to be enclosed in single quotes.  <br><br>
You should be good to go!  
Now run:

12. `npm run start`
 