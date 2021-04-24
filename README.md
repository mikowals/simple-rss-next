An RSS reader built to see how fast React applications can load and respond when hosted on Cloudflare pages. It is nearly instantaneous though that may be due to my using it frequently from one location and priming Cloudflare's servers.

Currently running at https://simple-rss-next.pages.dev/articles.  

# Building and Serving

Building and serving the website requires [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable).  A locally hosted version of the site can be started with the commands below.

    git clone https://github.com/mikowals/simple-rss-next.git
    cd simple-rss-next
    yarn run 
    
It can also be developed using Cloudflare Pages.  Forking this repository and then following [Pages' instructions](https://pages.cloudflare.com/) will lead to a web page that gets rebuilt every time your fork is updated.  I have set up CORS on the backend so you will likely see a blank page and will need a different GraphQL server to see results.
