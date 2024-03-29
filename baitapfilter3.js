mocha.setup('bdd');
var expect = chai.expect;

// Given a list of students, filter out the famale ones
function filterOutFemales(members) {
	return members.filter(function(x){
  	return x.gender!='female';
  });
}

describe('first', function () {
	var members = [
  	{ name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
  ];
	it('case 1', function () {
    expect(filterOutFemales(members)).to.eql(
    	[	
      	{ name: 'Trung', gender: 'male' },
        { name: 'Peter', gender: 'gay' }
      ]
    );
  });
});

mocha.run();
