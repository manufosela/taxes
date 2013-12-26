TaxesApp
========

Descripción:
------------

Clase javascript para calcular precios con impuesto, para extraer el precio sin impuestos o para calcular que % de impuesto a partir del precio con y sin impuestos

Simplemente añade:

<script type="text/javascript" src="/bibliotecatelco/static/js/taxes.app.js"></script>

antes del tag </head>

Ejemplo:
--------

var taxesApp = new TaxesApp();  // aplica el 21% ( por defecto) a los metodos de calculo de precios.

var taxesAppOtro = new TaxessApp( 15 ); // aplica el 15% a los metodos de calculo de precios.

Métodos:
--------

* addVAT( value )			
Devuelve el valor incrementado con el % de impuesto

* withoutVAT( value )
Devuelve el valor decrementando con el % de impuesto

*getVAT( valueWith, valueWithout )
Devuelve el % de impuesto a partir de los valores dados


Demo:
--------

http://manufosela.es/examples/taxes/


============================================================================================


Description:
------------

Javascript class to calculate prices with tax, to extract the price without taxes or to calculate what % of tax from the price with and without tax.

Just added:

<script type="text/javascript" src="/bibliotecatelco/static/js/taxes.app.js"> </script>

before the tag </head>

Example:
--------

var taxesApp = new TaxesApp(); // applies the 21% (default) to the price calculation methods.

var taxesAppOtro = new TaxessApp( 15 ); // 15% applies to the methods of calculating prices.

Methods:
--------

* addVAT ( value )
Returns the value increased with the % of tax

* withoutVAT ( value )
Returns the value to decrement% tax

* getVAT ( valueWith, valueWithout )
Returns the % of tax from the values ​​given


Demo:
--------

http://manufosela.es/examples/taxes/
