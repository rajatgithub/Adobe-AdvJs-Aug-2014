function add1(x,y){
	x = isNaN(x) ? 0 : parseInt(x);
	y = isNaN(y) ? 0 : parseInt(y); 
	return x + y;
}

function add2(x,y){
	function parseArg(n) {
		if( typeof(n) === "function" ) return parseArg(n());     // Works for case of nested functions
	/*	if( Array.isArray(n) ) {
			var total = 0;
			$.each(n, function() { total += this; } )
			return total;
		}
	*/	
		return isNaN(n) ? 0 : parseInt(n);
    }
	return parseArg(x) + parseArg(y);
}


function add2(x,y){
	function parseArg(n) {
		//if( Array.isArray(n) ) {
		if( n instanceof Array ) {
			var total = 0;
			for( var j = 0; j < n.length ; j++)
				total += parseArg(n[j]);
			return total;
		}
		if( typeof(n) === "function" ) return parseArg(n());     // Works for case of nested functions
		return isNaN(n) ? 0 : parseInt(n);
    }
	
	var result = 0;
	for( var i = 0; i < arguments.length; i++ )
		result += parseArg(arguments[i]);
	return result;
}


function add3(x,y){
	function parseArg(n) {
		//if( Array.isArray(n) ) {
		if( n instanceof Array ) return add.apply(this, n);
		if( typeof(n) === "function" ) return parseArg(n());     // Works for case of nested functions
		return isNaN(n) ? 0 : parseInt(n);
    }
	
	var result = 0;
	for( var i = 0; i < arguments.length; i++ )
		result += parseArg(arguments[i]);
	return result;
}



function add(x,y){
	function parseArg(n) {
		//if( Array.isArray(n) ) {
		if( n instanceof Array ) return add.apply(this, n);
		if( typeof(n) === "function" ) return parseArg(n());     // Works for case of nested functions
		return isNaN(n) ? 0 : parseInt(n);
    }
	return ( arguments.length <= 1 ) ? parseArg(arguments[0]) : parseArg(arguments[0]) + parseArg( add([].slice.call(arguments,1)));
}




function add_n(x,y){
	function parseArg(n) {
		if( typeof(n) === "function" )                        // Will not work for nested functions
			n = n();
		return isNaN(n) ? 0 : parseInt(n);
    }
	return parseArg(x) + parseArg(y);
}
