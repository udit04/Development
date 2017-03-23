#DockerFile
FROM ubuntu

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update && apt-get install -y \
  build-essential \
  python-pip \
  curl \
  wget \
  && curl -sL https://deb.nodesource.com/setup_6.x | bash - \
  && apt-get install -y nodejs \
  && rm -rf /var/lib/apt/lists/* \
  && apt-get -y autoclean \
  && npm update -g npm \
  && npm install pm2 -g \
  && npm install mocha -g

RUN npm install

#ENTRYPOINT ["pm2", "start", "scripts/setup-servers.json"]

#CMD ["node",  "--version"]
