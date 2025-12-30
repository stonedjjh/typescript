(() =>{

    interface addTwoNumbers{
        (a:number, b:number): number;
    }

    let addNumbersFunctions: addTwoNumbers;

    addNumbersFunctions = (a:number, b:number) : number => {
        return a + b;
    }

})()