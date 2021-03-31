# GET STARTED

**One Time Only**

Install postgresql
```shell
sudo apt install postgresql
```
- Make sure postgres server is running or not
```
sudo service postgresql start
```
## Install Dependencies

- For server
```shell
npm install
```

- For client
```shell
npm run install-client
```

## Development

- For server
```shell
npm run server
```

- For client
```shell
npm run client
```

- If simultaneously start a both server and client
```shell
npm run dev
```

## Production

- Build a client code
```
npm run build
```

- Start a production server
```
npm run prod
```

### Tips

- Create Heroku app
```shell
heroku create optic-visions
```

- Link with a existing heroku app
```
heroku git:remote -a optic-visions
```

- Push your code to heroku
```
git push heroku deploy<branch_name>
```

- Add postgres database addons in Heroku.
```shell
heroku addons:create heroku-postgresql:hobby-dev
```

- See heroku terminal logs
```shell
heroku logs --tail
```
