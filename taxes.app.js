/* author: @manufosela - v1.0 26/11/2013 */
TaxesApp = (function (){

  "use strict";

  var TaxesApp = function ( tax ){
  	this.VAT = ( typeof tax == "undefined")?1.21:parseFloat( "1."+tax );  // 21% // VAT = value added taxes = IVA = Impuesto sobre el Valor Añadido
  	this.numOfDec = 2;
    this.dec = parseInt( "1" + new Array( this.numOfDec + 1 ).join( "0" ) );
  };

  TaxesApp.prototype.setNumOfDec = function( numOfDec ) {
    this.numOfDec = numOfDec;
    this.dec = parseInt( "1" + new Array( this.numOfDec + 1 ).join( "0" ) );
  }

  TaxesApp.prototype.addVAT = function( val ) {
    var newVal;
    try {
      val = parseFloat( new String( val ).replace( ",", "." ) );
      newVal = Math.ceil(  val * this.dec * this.VAT );
    } catch( e  ) {
      newVal = -9999;
    }
  	return this.show( newVal );
  };

	TaxesApp.prototype.withoutVAT = function( val ) {
    var newVal;
    try {
		  val = parseFloat( new String( val ).replace( ",", "." ) );
      newVal =  Math.floor( val * this.dec / this.VAT );
    } catch( e  ) {
      newVal = -9999;
    }
    return this.show( newVal );
  }; 

  TaxesApp.prototype.getVAT = function( valWithVAT, valWithoutVAT ) {
    try {    
      if ( typeof valWithVAT == "undefined" && typeof valWithoutVAT == "undefined" ) {
        var newVal = Math.ceil( ( this.VAT - 1 ) * this.dec );
      } else {
        valWithVAT = parseFloat( new String( valWithVAT ).replace( ",", "." ) );
        valWithoutVAT = parseFloat( new String( valWithoutVAT ).replace( ",", "." ) );
        var newVal = Math.ceil( ( ( valWithVAT / valWithoutVAT ) - 1 ) * 100 ); 
      }
    } catch( e  ) {
      var newVal = -9999;
    }
    return newVal;
  };

  TaxesApp.prototype.show = function( val ) {
    console.log( val );
    if ( val == -9999 || isNaN( val ) ) return "ERR";
    val = new String( val );
    var l = val.length,
        zeros = Array( this.numOfDec + 1 ).join( "0" );
    l = ( l < ( this.numOfDec + 1 ) )?this.numOfDec + 1:l;
    return String( "0" + val.substr( 0, l-this.numOfDec ) ).slice( -l+this.numOfDec ) + "," + String( zeros + val.substr( l - this.numOfDec, l ) ).slice( -this.numOfDec );
  }

  return TaxesApp;

})(); 