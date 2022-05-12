import { Component, OnInit,ViewChild } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Observable,of } from 'rxjs';
import Konva from 'konva'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public Shapes:Array<any> = [
    {Type:'Circle'},
    {Type:'Rectangle'},
    {Type:'Triangle'}
  ]

  constructor( public _ss:StoreService) { }

  ngOnInit(): void {


  }

 public ResForShape :any 
 public shapeToShow:any

  public GetShape(Type:any){

    this._ss.GetShape(Type).subscribe(
      res=>{

        console.log(res);

        this.ResForShape = res
        
        var KonvaStage = new Konva.Stage({
          container: 'container',
          width: this.ResForShape.StageWidth,
          height: this.ResForShape.StageHeight,
        });
    
        var layer = new Konva.Layer();
    
        if( this.ResForShape.Type === 'Circle'){
          this.shapeToShow = new Konva.Circle(this.ResForShape)
        }else if( this.ResForShape.Type === 'Rectangle'){
          this.shapeToShow = new Konva.Rect(this.ResForShape)
        }else{
          this.shapeToShow =  new Konva.RegularPolygon(this.ResForShape);
        }
      
        layer.add(this.shapeToShow);
    
        KonvaStage.add(layer);
    
      }
    )
  }
//==============================================================================================================================================>


}
