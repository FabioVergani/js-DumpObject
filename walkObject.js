function walkObject(a,b){//obj,callback(val,obj,prop,depth)
 var f=b,g=function(x,n){var e,p,o=x,i=n;for(p in o){g(e=o[p],i);f(e,o,p,i+1);};};
 g(a,0);
 return a;
};
