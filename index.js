// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){

    cats.push(name)

}
function destructivelyPrependCat(name){

    cats.unshift(name)
    
}
function destructivelyRemoveLastCat(){

    cats.pop()


}
function destructivelyRemoveFirstCat(){

    cats.shift()


}
function appendCat(name){
    let newcats=cats.slice();
    newcats.push(name)
    return newcats

}
function prependCat(name){
    let newcats=cats.slice();
    newcats.unshift(name)
    return newcats


}
function removeLastCat(){
    let newcats=cats.slice();
    newcats.pop()
    return newcats

}
function removeFirstCat(){
    let newcats=cats.slice();
    newcats.shift()
    return newcats

}

