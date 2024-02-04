import test from 'node:test';
import assert from 'assert/strict';

import * as func from '../index.js'

test('step1', () => {
    const result = func.dnaToRna('ACGTGGTCTTAA');
    const expected = 'UGCACCAGAAUU';
    assert.strictEqual(result, expected);
});

test('step2', () => {
    const result = func.dnaToRna('CCGTA');
    const expected = 'GGCAU';
    assert.strictEqual(result, expected);
});

test('step3', () => {
    const result = func.dnaToRna('');
    const expected = '';
    assert.strictEqual(result, expected);
});

test('step4', () => {
    const result = func.dnaToRna('ACNTG');
    assert.strictEqual(result, null);
});
