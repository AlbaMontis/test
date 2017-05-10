describe('getBody', function() {
    var body = document.body;

    it('Should not be ampty', function() {
        expect(body.innerHTML).toBe('Hello world!!!');
    });
});