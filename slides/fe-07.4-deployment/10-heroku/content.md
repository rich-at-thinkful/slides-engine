# Heroku

* Uses more traditional architecture
* Vercel focused on frontend; Heroku more general
* All app code is uploaded via Git
* Must specify a "buildpack" for React

```bash
heroku create -b https://github.com/mars/create-react-app-buildpack.git
```