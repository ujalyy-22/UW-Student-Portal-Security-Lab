// Test file for semgrep-custom.yml (training only, not used by the portal)
const userInput = "2 + 2";

const bad = eval(userInput); // BAD: runs text as code, should be flagged

const safe = JSON.parse('{"marks": 85}'); // SAFE: only reads data, should not be flagged

console.log(bad, safe);