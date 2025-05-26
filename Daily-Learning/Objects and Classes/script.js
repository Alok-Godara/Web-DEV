class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
        console.log("Parent cons invoked.")
    }

    viewData() {
        console.log("Now you can view data.");
    }
}

class admin extends user{

    editData(){
        console.log("You can edit data.")
    }
}

let agarwal = new admin("aggarwal" , "aggarwal@gmail.com");
