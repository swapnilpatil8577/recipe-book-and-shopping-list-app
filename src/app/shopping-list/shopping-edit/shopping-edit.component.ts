// import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredians } from 'src/app/shared/ingredians.modal';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{

//@ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
//@ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

//@Output() ingrediantAdded = new EventEmitter<Ingredians>();

@ViewChild('f', {static: false}) slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIdex: number;
  editedItem: Ingredians;

  constructor(private shopList: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shopList.starteEditing
    .subscribe(
      (index:number) => {
        this.editedItemIdex = index;
        this.editMode = true;
        this.editedItem = this.shopList.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  onAddItem(form: NgForm){
    //const ingName = this.nameInputRef.nativeElement.value;
    //const ingAmount = this.amountInputRef.nativeElement.value;

    //const newIngredient = new Ingredians(ingName,ingAmount);
    const value = form.value;
    const newIngredient = new Ingredians(value.name, value.amount);
    //this.ingrediantAdded.emit(newIngredient);
    if(this.editMode){
      this.shopList.updateIngredient(this.editedItemIdex, newIngredient);
    }else{
      this.shopList.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shopList.deleteIngredient(this.editedItemIdex);
    this.onClear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
