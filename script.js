let display = '';
let arr0 = [];
let arr1 = [];
let OpSet = '';

function press( num ) {
    console.log(num);
    display += num;
    document.querySelector('#display').innerText = display;
}

function setOP( op ) {
    arr0.push( display );
    display = '';
    OpSet += op;
    console.log( op );
}

function clr() {
    display = '';
    arr0 = [];
    arr1 = [];
    OpSet = '';
    document.querySelector('#display').innerText = 0;
}

function calculate() {
    arr1.push( display );
    console.log( arr0, OpSet, arr1 );
    // let num0 = '';
    // let num1 = '';
    // for( let i = 0; i < arr0.length; i++ ) {
    //     num0 += arr0[i];
    // }
    // for( let j = 0; j < arr1.length; j++ ) {
    //     num0 += arr1[j];
    // }
    if( OpSet == '+' ) {
        let sum = parseInt( arr0[0] ) + parseInt( arr1[0] );
        console.log(sum);
        document.querySelector('#display').innerText = sum;
    }
    else if( OpSet == '-' ) {
        let sum = parseInt( arr0[0] ) - parseInt( arr1[0] );
        console.log(sum);
        document.querySelector('#display').innerText = sum;
    }
    else if( OpSet == '*' ) {
        let sum = parseInt( arr0[0] ) * parseInt( arr1[0] );
        console.log(sum);
        document.querySelector('#display').innerText = sum;
    }
    else if( OpSet == '/' ) {
        let sum = parseInt( arr0[0] ) / parseInt( arr1[0] );
        console.log(sum);
        document.querySelector('#display').innerText = sum;
    }
}

function test() {
    console.log( arr0, OpSet, arr1 );
}