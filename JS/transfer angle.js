var angle = function(v,r){

    
    var mu = 398600441800000;
    
    var a = v*v/2-mu/r;
    
    var h = r*v;
    
    var e = Math.sqrt(1+(2*a*h*h/mu/mu));
    
    return Math.acos(1/e);

};