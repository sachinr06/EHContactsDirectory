import {Injectable} from '@angular/core'
import { stat } from 'fs';


@Injectable()
export class ContactService{
    contactList=[
        {id:1,firstName:"Tom", lastName:"Mathon", email:"tommathon@domain.com", phone:9999999991,status:"active"},
        {id:2,firstName:"Maria", lastName:"Rodriguez", email:"mariar@domain.com", phone:9999999992,status:"active"},
        {id:3,firstName:"Mary", lastName:"Smith", email:"smithmary@domain.com", phone:9999999993,status:"active"},
        {id:4,firstName:"Garcia", lastName:"Heath", email:"gheath186@domain.com", phone:9999999994,status:"disabled"},
        {id:5,firstName:"Leonard", lastName:"Cother", email:"leadco1234@domain.com", phone:9999999995,status:"disabled"}
    ];

    getContacts(){
        return this.contactList
    } 
    
    addContact(contact):void{

        this.contactList.push(contact)

    }

    removeContact(id):void{

        let removeContactArray=this.contactList.filter((contactObj)=>contactObj.id!=id)
        console.log(removeContactArray)
        this.contactList=removeContactArray


    }

    editContact(id,newObject):void{
        this.removeContact(id);
        this.addContact(newObject)

    }

    getContact(id:number){
       let contact =this.contactList.find((contact)=>contact.id==id)
       return contact
    
    }



    toggleStatus(id):void{
        
        if(this.getStatus(id)=="active"){
            this.contactList.find(contact=> contact.id==id).status="disabled";
        }
        else{
            this.contactList.find(contact=> contact.id==id).status="active";
        }
       
    }



     getStatus(id):string{
        return  this.contactList.find(contact=> contact.id==id).status;
    }
}