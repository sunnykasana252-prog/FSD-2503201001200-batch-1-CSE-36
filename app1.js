function greet(name,callback){
    console.log('Hello'+name);
    callback();

}
function bye(){
    console.log('Goodbye!');
}
greet('john',bye);
