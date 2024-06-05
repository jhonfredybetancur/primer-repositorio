let resultado= 5 + 9;
console.log(resultado);

let p, q;

// primera expresión  (a)
console.log("p q NOT p NOT p AND q");
p = true; q = true;
console.log(p, q, !p, !q, !(p && q));
p = true; q = false;
console.log(p, q, !p, !q, !(p && q));
p = false; q = true;
console.log(p, q, !p, !q, !(p && q));
p = false; q = false;
console.log(p, q, !p, !q, !(p && q));

// segunda expresión (b)
console.log("p q NOT p NOT q NOT p AND NOT q");
p = true; q = true;
console.log(p, q, !p, !q, !(p && !q));
p = true; q = false;
console.log(p, q, !p, !q, !(!p && q));
p = false; q = true;
console.log(p, q, !p, !q, !(!p && !q));
p = false; q = false;
console.log(p, q, !p, !q, !(p && q));