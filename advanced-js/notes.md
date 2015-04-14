- native bind method
- 4 things "new" does:
    + creates a new object
    + that object gets linked to another object
    + that new object gets bound as this
    + if that function does not otherwise return anything, it will implicity insert `return this`
- `this`: determination
    + Was the function called with `new`?
    + Was the function called with `call` or `apply` specifying an explicity this?
    + Was the function called via a containing/owning object (context)?
    + DEFAULT: global object (except strict mode)
- 2 characteristics of module pattern
    + must be an outer encolsing function
    + from inside that function it must return one or more inner functions that have closure over the private scope
- What is a closure?
    + A function remembers its lexical scope when executed outside its original lexical scope.
- Inheritance
    + Bar.prototype = Object.create(Foo.prototype)
- What is a [[Prototype]] and where does it come from?
    + A linkage from one object to another object
    + Comes from Object.create or step 4 of `new` keyword
- How do we find out where an object's [[Prototype]] points to?
    + __proto__
    + Object.getPrototypeof(obj)
    + .contructor.prototype
- JS ~~Inheritance~~
    + "Behavior Delegation"
    + OOLO: Objects Linked to Other Objects
- Async patterns
    + pause a generator with `yield`, resume with .next()
- A Promise is a continuation event with a future value