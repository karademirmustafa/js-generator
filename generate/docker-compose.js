const fs = require("fs");

const data=`
version: "3.8"
services:
    ui:
        build: ui
        ports:
            - 80:80
`;
fs.writeFileSync("docker-compose.yml",data);