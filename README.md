![GitHub last commit](https://img.shields.io/github/last-commit/mattycourtney/sinatra-app)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/mattycourtney/sinatra-app)
![GitHub repo size](https://img.shields.io/github/repo-size/mattycourtney/sinatra-app)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/mattycourtney/sinatra-app?label=code%20quality)
![GitHub issues](https://img.shields.io/github/issues-raw/mattycourtney/sinatra-app)
![GitHub](https://img.shields.io/github/license/mattycourtney/sinatra-app)

# vForum 2019 - Sinatra Application

This project contains a small sinatra app used as a demo at vFORUM 2019. It listens on the default port 4567.

## Running with Docker

The app is dockerizied to make deploying and running it easy.

    $ docker build -t sinatra-app https://github.com/mattycourtney/sinatra-app.git
    $ docker run -d -p 80:4567 --name sinatra-app -t sinatra-app

When you've finished with the app, just stop the container.

    $ docker stop sinatra-app
