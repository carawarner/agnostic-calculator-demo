##############################################
# Dockerfile to build Agnostic Calculator Demo
##############################################

FROM ubuntu

# File Author / Maintainer
MAINTAINER Cara Warner

RUN echo 'Installing apt dependencies'
RUN apt-get update && apt-get install -y nginx \
    uwsgi \
    build-essential \
    python3 \
    python-dev\
    python3-pip \
    vim \
    curl \
 && apt-get clean \
 && apt-get autoremove \
 && rm -rf /var/lib/apt/lists/*

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 9.10.0

# install nvm from https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

ENV APP_DIR /var/www/calculator/app

# Install Python dependencies
COPY ./app/server/requirements.txt $APP_DIR/server/requirements.txt
RUN pip3 install -r $APP_DIR/server/requirements.txt

# Install JS dependencies
COPY ./app/static/package.json $APP_DIR/static/package.json
WORKDIR $APP_DIR/static
RUN npm install

# Copy application code (most likely to change, so should be run last)
COPY ./app/server/__init__.py $APP_DIR/server/__init__.py
COPY ./app/server/main.py $APP_DIR/server/main.py
COPY ./app/static $APP_DIR/static

# Build
RUN npm run build

# TODO: move these up to above dependency installation since they'll almost never change
# (Putting them lower down for now b/c I'm testing them, which means lots of building)
COPY ./resources/etc/init/calculator.conf /etc/init/calculator.conf
COPY ./resources/etc/nginx/sites-available/calculator /etc/nginx/sites-available/calculator

# Run
RUN service uwsgi start
COPY ./resources/etc/nginx/sites-available/calculator /etc/nginx/sites-enabled/calculator
RUN service nginx reload
EXPOSE 80

# TODO: what about log directories?
