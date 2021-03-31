# axios-shots
Axios experiments. Mostly meant as personal exploration, with low value for visitors.  

## Get ready
- run `npm install` to restore the packages (see `package.json`)
- In Visual Studio code, open `TimeOutDemo.html` and use `Open with live server`

## What it does
5000 in the request below means that there will be a delay of 5 seconds before the server replies.  
http://slowwly.robertomurray.co.uk/delay/5000/url/https://...

## Notes
- I use https://dog.ceo/api/breeds/image/random because it sets `Access-Control-Allow-Origin` to `*` (which you see using `curl -i` or [Postman](https://www.postman.com/), for example).
