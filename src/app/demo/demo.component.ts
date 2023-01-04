import { Component, OnInit } from '@angular/core';

import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  user: any;
  model: boolean;

  constructor(private authService: SocialAuthService) { }
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log("run......", user);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x =>
      console.log("response", x));
  }

  signOut(): void {
    this.authService.signOut();
  }
}
