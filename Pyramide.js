/*Ming-Xia Delvas
Concevoir un programme permettant de dessiner une pyramide de triangles équilatéraux
*/

var polygoneReg = function (cote, nbCotes) { //pour faire un polygone selon x nbrs de cotés désirés
    for(var i = 1; i <= nbCotes; i++) {
        fd(cote);
        rt(360/nbCotes);
    }
};

var triangle = function (cote,n) { //dessiner un triangle
    polygoneReg(cote,3);
};
var pyramide = function (cote, n) { //dessiner les petits triangles équilatéraux 
    for(var x = n; x>0; x--){
        for(var i = 0; i<n; i++){
        triangle(cote);
        fd(cote);
};
    bk(n*cote);
    fd(cote/2);
    rt(90);
    pu();
    fd(cote-2);
    pd();
    rt(-90);
    n--;
    
    }
};

pyramide(16,5); //dessiner la pyramide de triangle équilatéraux
  
