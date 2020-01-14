# strapi-app

Strapi app configured to be deployed on a server with Docker installed.

Currently, it is configured to be running one production instance and one development instance at the same time.

Make sure the database and domain is configured correctly in `docker-compose.yml`

Make sure your server has cloned this Git project to `~/strapi`
Make sure your server has `~/strapi/.env.prod` and `~/strapi/.env.dev` set up according to the `.env.example` file.

Make sure your server is set up with an ssh-key so that the remote access script in `deploy-prod.sh` works.

You should be able to deploy continuously with the `deploy-prod.sh` and `deploy-dev.sh` scripts.
