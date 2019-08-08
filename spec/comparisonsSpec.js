//Comparisons 
describe("Comparisons between two numbers", () => {

    //Call the greater than function and further 
    //compare with the given number
    it("Return the highest number", () => {
        var ans = checkGreater(8, 10);

        //what is expected
        expect(ans).toBeGreaterThan(9);
    });

    it("Return the lowest number", () => {
        var ans = checkLowest(8, 2);

        //what is expected
        expect(ans).toBeGreaterThan(1);
    })

    //Using the checkGreater to return the lowest number
    it("Return the lowest using the checkgreater function", () => {
        var ans = checkGreater(21, 31);

        //what is expected
        expect(ans).not.toBeGreaterThan(31);
    })

    //Using the checklower to retunr the highest number
    it("Return the highest using the checklower function", () => {
        var ans = checkLowest(8, 15);

        //what is expected
        expect(ans).not.toBeGreaterThan(8);
    })


});