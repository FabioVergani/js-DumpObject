# js-DumpObject

function nString(a,b){var n=a,s=b,t='';if(n!==0){if(n>1){while(n>0){if(n%2===1){t+=s};s+=s;n>>=1;};}else{t=n<=0?'':s};};return t;};

function dump(obj){
  var r=nString,f=function(x,j){
	var a,b,m=[],o=x,p,e,s,t,u,i=j,n=r(i,'\t'),k=Object.keys;
	for(p in o){
	 u=(e=o[p])===null;
	 t=typeof(e);
	 if(u||t!=='object'||e.source){
		s=(u?'null':(u='undefined',t===u?u:e.toString()))+';\n';
	 }else{
		a='{\n';
		b='}';
		u='length' in e;
		if(u){
		 u=e.length===0;
		 a=u?'[':'[\n';
		 b=']';
		}else{
		 u=k(e);
		 u=u.length===0;
		 a=u?'{':'{\n';
		};
		u=!u;
		s=[a,u?f(e,i+1):'',u?n:'',b,',\n'].join('');
	 };
	 m[m.length]=[n,p,':',s].join('');
	};
	return m.join('');
 };
 return f(obj,0)
}
//\},\n\s*\}
