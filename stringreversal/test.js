const [reverse, reverse2] = require('./index');


// test that reverse fn exists
test('Reverse function exists', ()=>{
    expect(reverse).toBeDefined();
    expect(reverse2).toBeDefined();
});

// test that reverses a string correctly
test('Reverse function succesfully reverses a given string', ()=>{
    expect(reverse('Dog')).toEqual('goD');
    expect(reverse2('Dog')).toEqual('goD');
});


// test that reverses a phrase as well
test('Reverse function succesfully reverses a phrase as well', ()=>{
    expect(reverse('This is it')).toEqual('ti si sihT');
    expect(reverse2('This is it')).toEqual('ti si sihT');
});



// test that ignores whitespaces in strings
test('Reverse function ignores whitespaces', ()=>{
    expect(reverse(' Dog ')).toEqual('goD');
    expect(reverse2(' Dog ')).toEqual('goD');
});



// test that ignores whitespaces in phrases as well








