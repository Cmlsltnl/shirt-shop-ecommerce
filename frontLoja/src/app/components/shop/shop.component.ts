import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/user.service';

declare var $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  collectionShirt =[];
  documentReady = false;

  constructor(private userService: UsuarioService) {

    
  }

  ngOnInit() {
     //Content Class
     let _content = this;

     //Slider Range 
     $(".range-price").slider({
       range: "min",
       min: 44.99,
       max: 90.99,
       step: 0.01,
       value: 60,
       slide: function( event, ui ) {
       }
      });

      $(document).ready(function(){
        this.documentReady = true;
      });

      
    for (let i = 1; i <= 10; i++) {
      this.collectionShirt.push('../../../assets/img/amostra-shirt/blue-shirt-girl.png');
    }
    for (let i = 1; i <= 10; i++) {
      this.collectionShirt.push('../../../assets/img/amostra-shirt/orange-shirt-girl.png');
    }
  }


  // FUNCTION PAGE UP 
  pageUp(){
      window.scrollTo(0,0);
      
  }
}