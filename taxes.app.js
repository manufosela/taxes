/* author: @manufosela - v1.0 26/11/2013 */
TaxesApp = (function (){

  "use strict";

  var TaxesApp = function ( tax ){
  	this.VAT = ( typeof tax == "undefined")?1.21:parseFloat( "1."+tax );  // 21% // VAT = value added taxes = IVA = Impuesto sobre el Valor Añadido
  	this.numOfDec = 2;
    this.dec = parseInt( "1" + new Array( this.numOfDec + 1 ).join( "0" ) );
  };

  TaxesApp.prototype.addVAT = function( val ) {
    try {
      val = parseFloat( new String(val).replace( ",", "." ) );
      var newval = Math.ceil(  val * this.dec * this.VAT );
    } catch( e  ) {
      var newVal = -9999;
    }
  	return this.show( newval );
  };

	TaxesApp.prototype.withoutVAT = function( val ) {
    try {
		  val = parseFloat( new String( val ).replace( ",", "." ) );
      var newVal =  Math.floor( val * this.dec / this.VAT );
    } catch( e  ) {
      var newVal = -9999;
    }
    return this.show( newVal );
  }; 

  TaxesApp.prototype.getVAT = function( valW, valWO ) {
    try {    
      if ( typeof valW == "undefined" && typeof valWO == "undefined" ) {
        var newVal = Math.ceil( ( this.VAT - 1 ) * this.dec );
      } else {
        valW = parseFloat( new String( valW ).replace( ",", "." ) );
        valWO = parseFloat( new String( valWO ).replace( ",", "." ) );
        var newVal = Math.ceil( ( ( valW / valWO ) - 1 ) * this.dec ); 
      }
    } catch( e  ) {
      var newVal = -9999;
    }
    return newVal;
  };

  TaxesApp.prototype.show = function( val ) {
    val = new String( val );
    var l = val.length;
    return String( "0" + val.substr( 0, l-this.numOfDec ) ).slice( -l+this.numOfDec ) + "," + String( "00" + val.substr( val.length - this.numOfDec, val.length ) ).slice(-2);
  }

  return TaxesApp;

})(); 