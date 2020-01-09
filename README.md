# NestJS

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

# NestJS-Example

## Dependencies

* [PostgresSQL 11](https://computingforgeeks.com/install-postgresql-11-on-ubuntu-18-04-ubuntu-16-04/)
* [RabbitMQ](https://computingforgeeks.com/how-to-install-latest-rabbitmq-server-on-ubuntu-18-04-lts/)
* [NodeJS 12.14.1](https://www.ubuntuupdates.org/ppa/nodejs_12.x?dist=bionic)

## Installation

```bash
npm i
```

## Running the app

### development

```bash
npm run start:dev
```

### beta

```bash
npm run build
npm run start:beta
```

### prod

```bash
npm run build
npm run start:prod
```

## Running the app with docker

### docker

```bash
docker build -t nestjs_example .

docker run -e "env=development" nestjs_example
```

### docker-compose

```bash
docker-compose -f docker-compose.yml up --build
```