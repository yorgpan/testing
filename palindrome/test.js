const [palindrome, palindrome2] = require('./index');

test('Function palindrome exists', ()=>{
    expect(palindrome).toBeDefined();
    expect(palindrome2).toBeDefined();
});

test('Function palindrome identifies a very long string', ()=>{
    expect(palindrome('geeksskeeg')).toBeTruthy();
    expect(palindrome2('geeksskeeg')).toBeTruthy();
});


test('Function should return wrong', ()=>{
    expect(palindrome('5geeksskeeg')).toBeFalsy();
    expect(palindrome2('5geeksskeeg')).toBeFalsy();
});


test('Function palindrome identifies the string with even number of chars', ()=>{
    expect(palindrome('abnba')).toBeTruthy();
    expect(palindrome2('abnba')).toBeTruthy();
});

test('Function palindrome palindromes the string irrespective of letter casing', ()=>{
    expect(palindrome('Ab11ba')).toBeTruthy();
    expect(palindrome2('Ab11ba')).toBeTruthy();
});
