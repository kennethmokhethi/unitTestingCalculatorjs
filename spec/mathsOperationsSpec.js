
//Broder description
describe("Maths calculation", () => {
   //Substraction operator
   it("Substract two numbers", () => {
      var ans = minus(10, 5);

      //What is expected
      expect(ans).toBe(5);

   });

   //Addition operator
   it("Find the sum of two numbers", () => {
      var ans = add(20, 15);

      //What is expected
      expect(ans).toBe(35);
   });

   //Division function
   it("Devides two numbers", () => {
      var ans = dev(10, 2);

      //What is expected
      expect(ans).toBe(5);
   });

   //Multiplication function
   it("Multiply two numbers", () => {
      var ans = mult(2, 10);

      //What is expected
      expect(ans).toBe(20);
   });

});