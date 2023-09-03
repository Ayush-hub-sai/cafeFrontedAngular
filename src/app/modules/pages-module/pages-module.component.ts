import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pages-module',
  templateUrl: './pages-module.component.html',
  styleUrls: ['./pages-module.component.css']
})
export class PagesModuleComponent implements OnInit {
  token = localStorage.getItem("token")
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadPage()
  }

  loadPage() {
    if (this.token != null) {
      this.userService.checkToken().subscribe((response: any) => {
        this.router.navigate(['/dashboard'])
      },
        (error: any) => {
          console.log(error);

        })
    }
  }
}
