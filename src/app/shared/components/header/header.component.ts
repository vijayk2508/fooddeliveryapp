import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    //'./header.component.scss',
    './style.scss',
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.navScrollSpy();
    this.shrinkScroll();
  }

  shrinkScroll() {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        // document.getElementById('navbar').style.padding = '30px 10px';
        // document.getElementById('logo').style.fontSize = '25px';
      } else {
        // document.getElementById('navbar').style.padding = '80px 10px';
        // document.getElementById('logo').style.fontSize = '35px';
      }
    }
  }

  navScrollSpy() {
    var nav = document.getElementById('nav');

    var util = {
      scrollMenuIds: document.querySelectorAll('a.nav-link[href]'),
      mobileMenu() {
        document.getElementById('myTopnav').classList.toggle('responsive');
      },
      windowResize() {
        if (window.screen.width > 800) {
          nav.classList.remove('nav-visible');
        }
      },
      scrollEvent() {
        if (document.documentElement.scrollTop > 5) {
          nav.classList.add('scroll');
          document.getElementById('menu').classList.add('scroll');
        } else {
          nav.classList.remove('scroll');
          document.getElementById('menu').classList.remove('scroll');
        }

        document.getElementById('myTopnav').classList.remove('responsive');
      
        var scrollPosition = document.documentElement.scrollTop;
        util.scrollMenuIds.forEach((linkItem, idx) => {
          var link = linkItem,
            container = linkItem.attributes['href'].value,
            querySelector = document.querySelector(container),
            containerOffset = querySelector.offsetTop,
            containerHeight = querySelector.getBoundingClientRect().height,
            containerBottom = containerOffset + containerHeight;

          if (
            scrollPosition < containerBottom - 20 &&
            scrollPosition >= containerOffset - 20
          ) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      },
    };

    document.getElementById('menu').onclick = util.mobileMenu;
    window.addEventListener('resize', util.windowResize);
    document.onscroll = util.scrollEvent;
  }
}
