function dependenciesSplit(dependencies){

    if(!dependencies){
        return [];
    }
    const packages = dependencies.split(",");
    let dependenciesPackages = [];
    for(let i=0; i<packages.length; i++){
       const [name,version]=packages[i].split("_");
       dependenciesPackages.push({name,version})
    }
    return dependenciesPackages;
}

module.exports={dependenciesSplit}
