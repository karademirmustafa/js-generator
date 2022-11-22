const fs = require("fs");

const data=`
version: "3.8"
services:
    ui:
        build: ui
        ports:
            - 80:80
    backend:
        build: backend
        ports:
            - 3000:3000
`;
fs.writeFileSync("docker-compose.yml",data);