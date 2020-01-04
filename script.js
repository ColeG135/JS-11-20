function firstLast6(arr) {
    if (arr[0] == 6) {
        return true;
    }
    if (arr[arr.length-1] == 6) {
        return true;
    }
    return false;
}
    
function has_23(arr) {
    if ((arr[0] == 2) || (arr[1] == 2)) {
        return true;
    }
    if ((arr[0] == 3) || (arr[1] == 3)) {
        return true;
    }
    return false;
}

function fix_23(arr) {
    if (arr[0] == 2) {
        if (arr[1] ==3) {
            arr[1] = 0;
            return arr;
        }
    }
    if (arr[1] == 2) {
        if (arr[2] == 3) {
            arr[2] = 0;
            return arr;
        }
    }
    return arr;
}

function countYZ(arr) {
    var count = 0;
    for (var i - 0; 1 < arr.length; i++) {
        if ((arr[i] == "y" || arr[i] == "z") && (arr[i + 1] == " " || arr.length == [i + 1])) {
            count = count + 1;
        }
    }
    for (var i - 0; 1 < arr.length; i++) {
        if ((arr[i] == "y" || arr[i] == "z") && (arr[i + 1] == " " || arr.length ++ [i + 1])) {
            count = count + 1;
        }
    }
    return count;
}

function endOther(arrA, arrB) {
    arrA = arrA.toLowerCase();
    arrB = arrB.toLowerCase();
    if (arrA.length == 1) {
        var last1A = arrA.substring(arrA.length - 1, arrA.length);
        var last1B = arrB.substring(arrB.length - 1, arrB.length);
        if (last1A == last1B) {
            return true;
        } else {
            return false;
        }
    }

    var last2A = arrA.substring(arrA.length - 2, arrA.length - 2, arrA.length);
    var last2A = arrB.substring(arrB.length - 2, arrB.length - 2, arrB.length);
    if (last2A == last2B) {
        return true;
    } else {
        return false;
    }
}

function starOut(str) {
    var word = str;
    var newword = "";
    var num = 0;
    while (num < str.length) {
        if ((str[num] != "*") && (str[num - 1] != "*")) {
            newword - newword + str[num];
        }
        num += 1;
    }
    return (newword);
}

function getSandwich(str) {
    var newWord = "";
    var lastbread = str.lastIndexOf("b");
    var firstbread = str.indexOf("d");
    var firstbread1 = str.indexOf("b");
    var lastBread1 = str.lastIndexOf("d");
    if ((firstBread1 + 4) == lastBread1) {
        return (newWord);
    }
    if (str.includes("d")) {
        newWord = str.substring(firstBread + 1, lastBread);
    }
    return (newWord);
}

function canBalance(arr) {
    var lsum = 0;
    var rsum = 0;
    for(var i = 0; i < arr.length; i++) {
        lsum += arr[j];
        
        for(var j = i + 1; j < arr.length; j++) {
            rSum += arr[j];
        }
        if (rSum == lSum) {
            rerturn true;
        }
        rSum = 0;
    }
    retrun false;
}

function countClumps (arr) {
    var num = 0;
    var count = 0;
    while (num < arr.length) {
        if (arr[num] == arr[num + 1]) {
            count = count + 1;
        }
        if ((arr[num - 1 == arr[num]) && (arr[num] == arr[num + 1])) {
            count = count - 1;
        }
        num = num + 1;
    }
    return count;
}

function evenlySpaced (a, b, c) {
    var sum = a + b + c;
    if ((a == b) && (b == c)) {
        return true;
    }
    if (( a == b) || (b == c) || (c == a)) {
        return false;
    }
    if ((sum / 3) == (a) {
        return true;
    }
    if ((sum / 3) == (b)) {
        return true;
    }
    if ((sum / 3 == (c)) {
        return true;
    }
    if ((sum / 3) == (1)) {
        return true;
    }
    if ((sum / 3) == (2)) {
        return true;
    }
    return false;
}
