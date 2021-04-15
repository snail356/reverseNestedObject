const add = function (a,b){

    return a + b ;
}

const subtract = function (a,b){
    return a - b ;
}

const bankAccount = {
    income:1000,
    expense:500,
    getBalance() {
        return{
            balance :this.income - this.expense
        };
    }

}

module.exports ={
    add
    ,subtract
    ,bankAccount
}