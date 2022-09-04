# 1 Préciser l'image de base (en général, OS)
FROM alpine:3.12

# 2 installation de git
RUN apk add --update git

# 3 installation de curl
RUN apk add curl

COPY index.sh .

CMD ["sh","index.sh"]
