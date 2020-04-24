import {Component,ViewChild} from '@angular/core'
import { ContactService } from 'app/services/ContactService';
import {Router} from '@angular/router'


@Component({
    selector:'addcontact',
    templateUrl:'./AddContact.component.html',

})
export class AddContactComponent{

    contacts=[];
    addContactSuccess=false;
    addContactFailed=false;
   
    

    constructor(private contactService:ContactService,private router:Router){}

    ngOnInit(){
        this.contacts=this.contactService.contactList;
    }

    addContactToList(fname,lname,email,phone):void{
        let contactObj={
            id:this.contacts.length+1,
            firstName:fname,
            lastName:lname,
            email:email,
            phone:phone,
            status:"active"
        }

        if(!this.contactExists(contactObj)){
            this.contactService.addContact(contactObj);
            this.addContactSuccess=true;
            this.addContactFailed=false;
           setTimeout(()=>this.router.navigate(['/contacts']),2000);
            
            
        }
        else{
            this.addContactSuccess=false;
            this.addContactFailed=true;

        }
      
   }

    contactExists(contactObj){
       return this.contacts.filter(contact=>contact.phone==contactObj.phone).length>0;
    }

   
 }
