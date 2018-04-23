function bubbleSort() {
    var input = document.getElementById("input").value.split(",");
    var swapped, temp;
    do {
        swapped = false;
        for (var i=0; i < input.length-1; i++) {
            if (parseInt(input[i], 10) > parseInt(input[i+1], 10)) {
                temp = input[i];
                input[i] = input[i+1];
                input[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return printResult(convertToString(input));
}

function obfuscatedSort() {
    var _0x32b0 = ['length','getElementById','split'];
    (function(_0x48ef16, _0x124f39) {
        var _0x36947b = function(_0x33e29b) {while (--_0x33e29b){_0x48ef16['push'](_0x48ef16['shift']());}};
        _0x36947b(++_0x124f39);
    }(_0x32b0,0x1e1));
    var _0x542e=function(_0x4a909b,_0x3b262c) {
        _0x4a909b=_0x4a909b-0x0;var _0x26a308=_0x32b0[_0x4a909b];return _0x26a308;
    };
    var _0x25a62a3 = document[_0x542e('0x0')]('input')['value'][_0x542e('0x1')](',');var _0x1a672b,_0x1b95c292e;
    do {_0x1a672b=![];for(var i=0x0;i<_0x25a62a3[_0x542e('0x2')]-0x1;i++) {
        if(parseInt(_0x25a62a3[i],0xa)>parseInt(_0x25a62a3[i+0x1],0xa)) {
            _0x1b95c292e=_0x25a62a3[i];_0x25a62a3[i]=_0x25a62a3[i+0x1];_0x25a62a3[i+0x1]=_0x1b95c292e;_0x1a672b=!![];
        }
    }} while(_0x1a672b);return printResult(convertToString(_0x25a62a3));
}

function convertToString(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
        output += input[i];
        if (i < input.length - 1) {
            output += ", ";
        }
    }
    return output;
}

function printResult(message) {
    var outputArea = document.getElementById("output");
    outputArea.innerHTML = message;
}
