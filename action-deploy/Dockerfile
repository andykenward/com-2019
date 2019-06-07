FROM node:10-slim

LABEL com.github.actions.name="Primer deploy"
LABEL com.github.actions.description="Deploy to now with branch and tag aliases"
LABEL com.github.actions.icon="triangle"
LABEL com.github.actions.color="black"

LABEL version="0.0.1"
LABEL repository="http://github.com/andykenward/com-2019"
LABEL homepage="http://github.com/andykenward/com-2019/tree/master"
LABEL maintainer="@andykenward <hello@andykenward.com>"

COPY . .
RUN ["npm", "ci"]

ENTRYPOINT ["/entrypoint.js"]
