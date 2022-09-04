const sayMyName = () => {
    console.log("Hello world!");
}

const runFunctions = fn => fn()

sayMyName()

runFunctions(sayMyName)