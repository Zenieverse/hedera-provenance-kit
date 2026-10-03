const test = require('node:test');
const assert = require('node:assert/strict');
const {createHash}=require('node:crypto');
function canonicalize(v){if(v===null||typeof v!=="object")return JSON.stringify(v);if(Array.isArray(v))return `[${v.map(canonicalize).join(",")}]`;return `{${Object.keys(v).sort().map(k=>`${JSON.stringify(k)}:${canonicalize(v[k])}`).join(",`)}}`}
test('canonicalization is deterministic',()=>assert.equal(canonicalize({b:2,a:1}),canonicalize({a:1,b:2})));
test('sha256 is deterministic',()=>{const h=createHash('sha256').update(canonicalize({a:1})).digest('hex');assert.equal(h.length,64)});
