# 1 Préciser l'image de base PHP
FROM php:7.4-cli
RUN  mkdir /usr/src/myapp
COPY hello-world.php /usr/src/myapp
WORKDIR /usr/src/myapp
CMD [ "php", "./hello-world.php" ]