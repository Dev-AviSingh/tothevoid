FROM alpine:latest

RUN apt update
RUN apt install nodejs

RUN mkdir /tothevoid

COPY controllers/* /tothevoid/*
COPY middleware/* /tothevoid/*
COPY controllers/* /tothevoid/*
COPY package-lock.json /tothevoid/
COPY package.json /tothevoid/
COPY index.js /tothevoid/
COPY .env /tothevoid/

RUN npm install
CMD npm run