function getflags(flag){
    const index = process.argv.indexOf(flag)+1
    console.log(index)
    return process.argv[index]
}

module.exports = getflags;