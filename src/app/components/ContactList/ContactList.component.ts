import {Component} from '@angular/core'
import { ContactService } from 'app/services/ContactService';
import {Router} from '@angular/router';


@Component({
    selector:'contactlist',
    templateUrl:'./ContactList.component.html',
    styleUrls:['./ContactList.component.css']
})
export class ContactListComponent{

    contactList=[];
    activeContacts=[];
    disabledContacts=[];
    showDisabled:boolean=false;
    constructor(private contactService:ContactService,private router: Router){
    
    }

    ngOnInit(){
        this.getAndFilterContacts()
    }

    getAndFilterContacts(){
        this.contactList=this.contactService.getContacts();
        this.activeContacts=this.filterActiveContacts();
        this.disabledContacts=this.filterDisableContacts();
        
    }

    filterActiveContacts(){
        return this.contactList.filter(contact=>contact.status==="active")
    }

    filterDisableContacts(){
        return this.contactList.filter(contact=>contact.status==="disabled")
    }

    toggleStatus(id){
        this.contactService.toggleStatus(id);
        this.getAndFilterContacts();
        
    }

    addNew(){
        this.router.navigate(['/add'])
    }

    editContact(id){
        this.router.navigate(['/edit',id])
    }

    deleteContact(id){
        this.contactService.removeContact(id);
        this.getAndFilterContacts()
    }

    toggleDisabled(){
        if(this.showDisabled){
            this.showDisabled=false;
        }
        else{
            this.showDisabled=true;
        }
        console.log(this.showDisabled)

    }

    
}