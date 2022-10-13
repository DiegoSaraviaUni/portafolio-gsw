FROM node:16-alpine3.15

# set working directory
WORKDIR /root/project

# add `/app/node_modules/.bin` to $PATH
ENV PATH /root/project/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json /root/project
RUN npm install

# add app
COPY . .

# start app
CMD ["npm", "start"]