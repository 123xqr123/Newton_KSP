// the new one of Ruby:  how to calculate thedelta_v needed for the transfer netween two planets:

var delta_vbetweentwoplanets= function(r1,r2){
    var a = Math.sqrt(398600441800000/r1);
    var b = Math.sqrt(2*r2/(r1+r2));
    return a*(b-1);
};delta_vbetweentwoplanets(1,2)
//r1 is parking orbit radius while r2 is SOI radius(which is still going to be found out）

// this is a test comment by Michael