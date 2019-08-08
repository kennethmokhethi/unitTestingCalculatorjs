describe("Even and odd numbers", () => {
    it("Return even nummbers", () => {
        var arr = [2, 4, 1, 3, 7, 8, 9];
        var ans = findEven(arr);

        expect(ans).toBe(2, 4, 8);
    });
});