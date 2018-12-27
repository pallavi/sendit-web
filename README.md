# sendit

## install dependencies
```sh
$ yarn
```

## run api server
clone github.com/pallavi/sendit-api and follow the instructions to set it up. 
run the api server locally.

## run sendit
```
$ yarn start
```

## notes
when you make an api call, if your jwt token is over 2 minutes old, it will be refreshed.

the app checks your token every second, and if it is expired, it will automatically log you out.