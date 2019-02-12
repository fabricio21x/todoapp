# ToDo App

Simple React app that allows you to add/remove/update elements

## Before running

Inside the `/todo` folder add the file `.env.production` with the following content:

```
NODE_ENV=production
REACT_APP_API_URL=http://localhost:2400/api/v1/
```

Inside the `/api` folder add the file `.env.production` with the following content:

```
NODE_ENV=production
PORT=2400
```

You are free to change the PORT variable

## To run the app

1. Run `npm install` inside `api/` and `todo/` folders
2. Run `npm start` inside `api/` and `todo/` folders, in that order
