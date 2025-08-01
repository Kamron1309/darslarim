function strStr(haystack, needle) {
    if (needle === "") return 0; // Agar igna bo'sh string bo'lsa, 0 qaytaramiz
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i; // Topilgan birinchi indeks
        }
    }
    return -1; // Topilmasa -1
}
console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1
console.log(strStr("hello", "ll")); // 2
console.log(strStr("mississippi", "issip")); // 4

function isValid(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) {
        if (pairs[char]) {
            stack.push(char); // Ochiluvchi qavsni stackga qo'shamiz
        } else {
            const last = stack.pop(); // Oxirgi qavsni olamiz
            if (pairs[last] !== char) {
                return false; // Qavslar mos kelmasa false
            }
        }
    }

    return stack.length === 0; // Stack bo'sh bo'lsa true, aks holda false
}
console.log(isValid("()"));      // true (Example 1)
console.log(isValid("()[]{}"));  // true (Example 2)
console.log(isValid("(]"));      // false (Example 3)
console.log(isValid("([])"));    // true (Example 4)
console.log(isValid("([)]"));    // false (Example 5)


function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; // Agar massiv bo'sh bo'lsa

    let prefix = strs[0]; // Birinchi so'zni boshlang'ich prefiks deb olamiz

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) { // Prefiks current so'zda boshida turmasa
            prefix = prefix.substring(0, prefix.length - 1); // Prefiksni qisqartiramiz
            if (prefix === "") return ""; // Agar prefiks bo'sh bo'lib qolsa
        }
    }

    return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl" (Example 1)
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // "" (Example 2)
console.log(longestCommonPrefix(["apple", "app", "apricot"]));  // "ap"
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // "inters"