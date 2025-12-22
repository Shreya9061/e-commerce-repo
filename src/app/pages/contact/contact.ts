import { Component } from '@angular/core';
import { Carddre } from "./carddre/carddre";
import { Form } from "./form/form";

@Component({
  selector: 'app-contact',
  imports: [Carddre, Form],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
