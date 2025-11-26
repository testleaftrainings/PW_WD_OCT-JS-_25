//public -> default access modifier
//private -> access within the class only
//protected -> access within the class and child class

class Elements{
    //properties
    public eleName:string="fill"
//method

public click(){
    console.log("Clicking the element")
}

private locator(){
    console.log("Element locator")
}

protected alert(){
    console.log("Alert in the element")
}


public callMethods(){
    this.locator()
    this.alert()
}
}

let eleObj=new Elements()
console.log(eleObj.eleName)
eleObj.click()
//eleObj.locator() //-> private method not accessible
//eleObj.alert() //-> protected method not accessible
eleObj.callMethods() //-> calling private and protected method inside public method