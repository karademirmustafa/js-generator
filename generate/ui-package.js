const fs = require("fs");

fs.readFile("package.json","utf-8",(err, data)=>
{
	if (err) throw err;
	const json=JSON.parse(data);
	json["scripts"]["start"]="react-scripts start";
	json["scripts"]["build"]="react-scripts build";
	json["scripts"]["test"]="react-scripts test";
	json["scripts"]["eject"]="react-scripts eject";
	json["browserslist"]={};
	json["browserslist"]["production"]=[">0.2%","not dead","not op_mini all"];
	json["browserslist"]["development"]=["last 1 chrome version","last 1 firefox version","last 1 safari version"];
	fs.writeFileSync("package.json",JSON.stringify(json));
});