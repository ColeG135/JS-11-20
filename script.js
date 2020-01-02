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

function countYZ(str, n) {
    return str;
}

function endOther(str2, n) {
    return str2;
}

function starOut(str, n) {
    return str;
}

function getSandwich(arr, n) {
    return arr;
}

function canBalance(param1, param2) {
    return param1;
}

function countClumps (arr, n) {
    return arr;
}

function evenlySpaced (param1, param2) {
    return param1;
}



