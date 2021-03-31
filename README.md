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
npm run client:install
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
npm run client:build
```

- Start a production server
```
npm run prod
```

## Deploy in heroku

- Switch branch into deploy
```shell
git checkout deploy
```
- Merge Main branch changes to deploy branch
```shell
git merge main
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
