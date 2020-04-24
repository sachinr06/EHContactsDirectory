import {Component} from '@angular/core'
import { ContactService } from 'app/services/ContactService';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector:'editcontact',
    templateUrl:'./EditContact.component.html',

})
export class EditContactComponent{
    id:number;
    contact;
    editable:boolean=false;
    fName:string
    lName:string
    email:string
    phone:number
    editSuccess:boolean=false;
    editFailed:boolean=false;
    contacts;

    constructor(private contactService:ContactService,private activatedRoute:ActivatedRoute, private router:Router){
        
    }
   
    ngOnInit(){
        this.id = this.activatedRoute.snapshot.params['id'];
        console.log(this.id)
        this.contact=this.contactService.getContact(this.id);
        this.contacts=this.contactService.getContacts()
        this.fName=this.contact.firstName
        this.lName=this.contact.lastName
        this.email=this.contact.email
        this.phone=this.contact.phone

     
    }
    
    ngDoCheck(){
         if(this.checkIfEditable()){
            this.editable=true
        }
        else{
            this.editable=false
        }
     }

    editContact(fname,lname,email,phone):void{
        let contactObj={
            id:this.id,
            firstName:fname,
            lastName:lname,
            email:email,
            phone:phone,
            status:this.contact.status
        }

        if(!this.contactExists(contactObj)){
            this.contactService.editContact(this.id,contactObj);
            this.editSuccess=true;
            this.editFailed=false;
           setTimeout(()=>this.router.navigate(['/contacts']),2000);
            
            
        }
        else{
            this.editSuccess=false;
            this.editFailed=true;
            this.contactService.addContact(this.contact)

        }
      
   }

   contactExists(contactObj){
    this.contactService.removeContact(contactObj.id)
    return this.contactService.getContacts().filter(contact=>contact.phone==contactObj.phone).length>0;
 }




    checkIfEditable(){
        let contactToEdit=this.contactService.getContact(this.id);
        if(this.fName==contactToEdit.firstName && this.lName==contactToEdit.lastName && this.email==contactToEdit.email && this.phone==contactToEdit.phone ){
            return false
        }
        else{
            return true
        }
    } 
}