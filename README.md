# RUNNING API
To run the api we need to go to under the root directory of the api project:
> cd api<br/>

Then dependencies should be installed by using **yarn** on **npm**
> yarn <br/>

After the dependencies has been installed, **start** script should be executed:
> yarn start<br/>

Since the default port of the project is 5000, a message will be shown on the console after running the start script saying:<br/>
> Server listening on port 5000<br/>

### SEEDING DATABASE
To use ready-to-use mock data, [sequelize's seeder](https://sequelize.org/master/manual/migrations.html#running-seeds) can be used by running below script under the root directory of the api project's path:
>npx sequelize-cli db:seed:all<br/>

After running seeder command, database will have the mock data included in seeder file.

# RUNNING FRONTEND
To run the frontend project, first we need to move under the frontend project's root directory:
>cd client<br/>

Then [this document](./client/README.md) should be followed.