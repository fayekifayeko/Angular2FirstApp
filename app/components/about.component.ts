import { Component } from '@angular/core';
import { AutoGrowDirective } from './autogrow.directive';

@Component({
  selector: 'about',
  template: `<h3>About The Application</h3>
  <input type="text" autogrow />
  `,

})
export class AboutComponent  { 
 
}
}
