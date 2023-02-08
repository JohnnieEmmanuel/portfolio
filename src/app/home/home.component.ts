import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ init } from 'emailjs-com';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
init("Qx5m76rwD1yZ648GD");
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string='';
  email: string='';
  message: string='';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

   /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
    processForm() {
      // const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
      var contactParams={
        from_name: this.name,
        from_email: this.email,
        message: this.message
        
      }
      
      emailjs.send("service_3mjq1zb","johnniefolio-contact", contactParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);

        if(confirm('Your message has been sent. You will be contacted soon. Thanks.')){
          window.location.reload();
        }
      }, function(error) {
        console.log('An error occured while sending this message. Please try again.', error);
      });
       
      
    }

  viewresume(){
    this.router.navigate(['/resume']);
  }
  contactme(){
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }
  seeworks(){
    document.getElementById("portfolio")?.scrollIntoView({behavior:"smooth"});
  }


}

