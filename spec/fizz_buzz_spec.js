describe("fizz_buzz", function () {
  it("returns number if no conditions are met", function(){
    expect(fizz_buzz(1)).toEqual(1);
});

  it("returns 'fizz' if number is divisable by 3", function(){
    expect(fizz_buzz(3)).toEqual('fizz');

});

  it("returns 'buzz' if number is divisable by 5", function(){
    expect(fizz_buzz(5)).toEqual('buzz');
});

  it("returns 'fizzbuzz' if number is divisable by 15", function(){
    expect(fizz_buzz(15)).toEqual('fizzbuzz');
});

});
