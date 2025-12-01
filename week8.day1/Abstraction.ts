interface method{

     data():void

    login():void


}
//class to class -> extends
//class to interface -> implements
class value implements method{
    data() {
       console.log("Data")
    }
    login() {
        console.log("login")
    }


    
}