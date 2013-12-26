describe( 'Taxes', function(){
	it( 'should have a 1.21 vat by default', function(){
		var taxesapp = new TaxesApp();
		expect( taxesapp.VAT ).toEqual( 1.21 );
	});

	it ( 'should have 2 decimals by default', function(){
		var taxesapp = new TaxesApp();
		expect( taxesapp.numOfDec ).toEqual( 2 );
	});

	it ( 'should have a 1.18 vat' , function(){
		var taxesapp = new TaxesApp( 18 );
		expect( taxesapp.VAT ).toEqual( 1.18 );
	});

	it( 'apply vat to 10', function(){
		var taxesapp = new TaxesApp();
		expect( taxesapp.addVAT( 10 ) ).toEqual( "12,10" );
	});
	it( 'apply vat to 0', function(){
		var taxesapp = new TaxesApp();
		expect( taxesapp.addVAT( 0 ) ).toEqual( "0,00" );
	});
	it( 'apply vat to 3,45', function(){
		var taxesapp = new TaxesApp();
		expect( taxesapp.addVAT( 3.45 ) ).toEqual( "4,18" );
	});

	it ( 'should have 3 decimals by default', function(){
		var taxesapp = new TaxesApp();
		taxesapp.setNumOfDec( 3 );
		expect( taxesapp.numOfDec ).toEqual( 3 );
	});
	it( 'apply vat to 0 with 3 decimals', function(){
		var taxesapp = new TaxesApp();
		taxesapp.setNumOfDec( 3 );
		expect( taxesapp.addVAT( 0 ) ).toEqual( "0,000" );
	});
	it( 'apply vat to 3.45 with 3 decimals', function(){
		var taxesapp = new TaxesApp();
		taxesapp.setNumOfDec( 3 );
		expect( taxesapp.addVAT( 3.45 ) ).toEqual( "4,175" );
	});
	it( 'apply vat to 3.45 with 4 decimals', function(){
		var taxesapp = new TaxesApp();
		taxesapp.setNumOfDec( 4 );
		expect( taxesapp.addVAT( 3.45 ) ).toEqual( "4,1745" );
	});
	it( 'apply vat to 3.45 with 5 decimals', function(){
		var taxesapp = new TaxesApp();
		taxesapp.setNumOfDec( 5 );
		expect( taxesapp.addVAT( 3.45 ) ).toEqual( "4,17450" );
	});

	it( 'produce an error', function(){ 
		var taxesapp = new TaxesApp();
		expect( taxesapp.addVAT( "jkj" ) ).toEqual( "ERR" );
	});

	it( 'get VAT from 3,1745 and 4,1800', function(){
		var taxesapp = new TaxesApp();
		taxesapp.setNumOfDec( 4 );
		expect( taxesapp.getVAT( "4,1745", "3,4500" ) ).toEqual( 21 );
	});

	it( 'quit VAT from 4,18', function(){
		var taxesapp = new TaxesApp();
		expect( taxesapp.withoutVAT( "4,18" ) ).toEqual( "3,45" );
	});
	it( 'quit VAT from 0', function(){
		var taxesapp = new TaxesApp();
		expect( taxesapp.withoutVAT( "0" ) ).toEqual( "0,00" );
	});
});