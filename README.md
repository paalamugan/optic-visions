# GET STARTED

**One Time Only in linux**

- Install postgresql
```shell
sudo apt install postgresql
```

- Install redis
```shell
sudo apt install redis-server
```

- Make sure postgres server is running or not, if not use below command
```
sudo service postgresql start
```

- Make sure redis server is running or not, if not use below command
```
redis-server --requirepass test
```

*Alternative*
- If you have docker machine, run below command
```
docker-compose up -d
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

```shell
cp .env-example .env
```
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

### Deploy

**You must push all your code changes into `main` branch not in `deploy` branch.then merge `main` branch changes to `deploy` branch.**

- Push all your code in `main` branch

```shell
git checkout deploy
```

- Merge your main branch changes to deploy branch

```shell
git merge main
```
- Push your merge code into `deploy` branch

```shell
git push
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
