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

# Dockerfile To Do List:
#
# Install requirements.txt
# Install packages.json
# Copy upstart conf to /etc/init
# Copy nginx conf to /etc/sites-available
# Copy the application code into /var/www/calculator
# Run npm build
# Enable the site (copy conf to sites-enabled)
# Reload nginx
# Expose the calculator on port 80
