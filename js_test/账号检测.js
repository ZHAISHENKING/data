let v;
function t(v){
    if(/\s/g.test(v) === true) return false;
    else return v.length >= 4;
}