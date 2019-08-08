//Testing the functions for addintion of two and multiply numbers

describe("Addition operator",()=>{
  it("Summing up two numbers",()=>{
    var num1=4;
    var num2=6;
    var sum=addTwoNumbers(num1,num2);
    expect(sum).toBe(10);

  });


});