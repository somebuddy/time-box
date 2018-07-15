import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGoogle, faFacebook, faTwitter, faGithub);

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  declarations: [],
  exports: [
    FontAwesomeModule,
  ]
})
export class IconsModule { }
