let v;
function t(v){
    if(/\s/g.test(v) === true) return false;
    else if (v.length < 4) return false;
    else return true;
}