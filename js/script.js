'use strict';

function main ( callback) {
    const a = + prompt ( 'Введите первое число:');
    const b = + prompt ( 'Введите второе число:');
    return callback ( a , b );
}

function callback ( a , b ) {
    const callbackResult = a ** b;
    return alert( callbackResult);
}

main ( callback );
