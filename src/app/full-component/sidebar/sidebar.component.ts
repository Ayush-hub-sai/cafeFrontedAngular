import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  public menuItems: any[] = [];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.menuItems = [
      {
        name: "Dashboard",
        level: 0,
        order: 1,
        icon: "home",
        stateRef: "/dashboard",
      },
      {
        name: "User",
        level: 0,
        order: 1,
        icon: "account_circle",
        stateRef: "/user",
        // display: 
      },
      {
        name: "Category",
        level: 0,
        order: 1,
        icon: "category",
        stateRef: "/category",
      },
      {
        name: "Product",
        level: 0,
        order: 1,
        icon: "shopping",
        stateRef: "/product",
      }, {
        name: "Bill",
        level: 0,
        order: 1,
        icon: "receipt",
        stateRef: "/bill",
      },
      // {
      //   name: "editProfile",
      //   title: "SETTINGS",
      //   level: 0,
      //   order: 1,
      //   icon_green: "assets/icons/menu/settings.svg",
      //   icon_white: "assets/icons/menu/settings.svg",
      //   stateRef: "",
      //   subMenu: [
      //     {
      //       name: "My Profile",
      //       title: "EDIT_PROFILE",
      //       level: 1,
      //       order: 1,
      //       stateRef: "/editProfile",
      //     },
      //     {
      //       name: "change PassWord",
      //       title: "CHANGE_PASSWORD",
      //       level: 1,
      //       order: 1,
      //       stateRef: "/changePassword",
      //     },
      //   ],
      // },
    ];

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.highlightActiveMenuItem();
      });
  }

  highlightActiveMenuItem() {
    const currentRoute = this.activatedRoute.root;
    const activeRoute = this.getActiveRoute(currentRoute);

    // Clear active state from all menu items
    this.menuItems.forEach((item) => (item.isActive = false));

    // Set the active state for the matched menu item
    if (activeRoute) {
      const matchedMenuItem = this.menuItems.find(
        (item) => item.stateRef === activeRoute.routeConfig?.path
      );
      if (matchedMenuItem) {
        matchedMenuItem.isActive = true;
      }
    }
  }

  private getActiveRoute(route: ActivatedRoute): ActivatedRoute {
    let activeRoute: ActivatedRoute = route;

    while (activeRoute.firstChild) {
      activeRoute = activeRoute.firstChild;
    }

    return activeRoute;
  }

  toggleActive(item: any) {
    this.menuItems.forEach(menuItem => menuItem.isActive = false);
    item.isActive = true;
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate([`/auth/signIn`]);


  }



}
