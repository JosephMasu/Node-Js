import path from "path";

// console.log(path.basename("c:\\nodejs\\index.js"));
// console.log(path.basename("c:\\nodejs\\index.js", ".js"));

// console.log(path.dirname("c:\\nodejs\\ZeroToHero\\index.js"));

// console.log(path.extname("c:\\nodejs\\ZeroToHero\\index.js"));

// console.log(path.join("c:", "masu", "projects", "redux-toolkit"));
// it will remove one directory back
// console.log(path.join("c:", "masu", "projects", "redux-toolkit", ".."));

// console.log(path.normalize("c:\\nodejs\\\ZeroToHero\\\store\\index\\"));

// path.parse Method
// console.log(path.parse("c:\\nodejs\\index.js").dir);
// console.log(path.parse("c:\\nodejs\\index.js"));
console.log(path.parse("c:\\nodejs\\index.js").base);
console.log(path.parse("c:\\nodejs\\index.js").ext);
console.log(path.parse("c:\\nodejs\\index.js").name);

