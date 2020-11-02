let name={
    name:"Shreyash",
    city:"Kanpur"
}
let name1={
    name:"Shrey",
    city:"Kanpur"
}
let pn=function(hometown,state){
    console.log(this.name+" "+hometown+" "+state);
}
pn.call(name,"SS","LL");//takes arguments separately
pn.apply(name,["SS","LL"]);//takes arguments in a single array list and then it pass it together
//bind is just like but it helps you to store your invocation to a method so that you can call it later
let pn1=pn.bind(name,"SS","LL");
pn1();

// we can store the value of the previous function and then can call it over here
//Polyfill is like for when your browser doesn't have a bind fubctuon and you are supposed to write your own function
Function.prototype.mybind=function(...args){
    let obj=this;
    let params=args.slice(1);
    return function(...args2)
    {
        obj.apply(args[0],[...params,...args2]);
    }
}
let pn2=pn.mybind(name,"OO");
pn2("PP");