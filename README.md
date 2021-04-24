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
