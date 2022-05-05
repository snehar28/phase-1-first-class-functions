function receivesAFunction(name) {
    return name();
}

receivesAFunction(function () {return "Hello, Sneha"});

function exercisemore() {
    let exercise = "Get off the sofa";

    return function() {
        return (`I think it's time you ${exercise}!`);
    };
}

function returnsANamedFunction(){
    return exercisemore();
}