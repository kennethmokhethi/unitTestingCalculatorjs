// multiple numbers spec
describe("multiple numbers",()=>{
   it("multiple two numbers",()=>{
      var num1=1;
      var num2=2;
      var product=multiplyMultNums(num1,num2);
      expect(product).toBe(2);

   });
   it("multiply multiple numbers",()=>{
       var product=multiplyMultNums(1,2,3,4);
       expect(product).toBe(24);
   })


});
