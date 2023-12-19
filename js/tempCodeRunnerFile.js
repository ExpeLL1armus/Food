const composeWithArgs = (...args) => {
    if (args.length === 1) {
        return args[0] + 1
    } else {
        return args.reduce((res, arg) => res + arg, args[0])
    }
};

console.log(composeWithArgs(1,2,3))