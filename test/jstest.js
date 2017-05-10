describe('getBody', function() {
    var body = document.body.innerHTML;

    it('Should not be empty', function() {
        expect(body).toBe('i');
    });
});