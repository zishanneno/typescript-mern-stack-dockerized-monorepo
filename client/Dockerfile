FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY ./dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/nginx.conf

RUN chmod -R 777 /usr/share/nginx/html/*
