import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Boxes } from 'src/app/models/boxes';
import { BoxesService } from 'src/app/services/boxes.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box-model-edit',
  templateUrl: './box-model-edit.component.html',
  styleUrls: ['./box-model-edit.component.scss']
})
export class BoxModelEditComponent implements OnInit {

    isLoading: boolean = false;
  constructor( private dialogRef: MatDialogRef<BoxModelEditComponent>,private boxesservice:BoxesService,private router:Router,private snackBar:MatSnackBar,@Inject(MAT_DIALOG_DATA) public data: Boxes) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  onSubmit(){
      this.isLoading = true;
    this.boxesservice.updateBoxes(this.data).subscribe(
      ()=>{
        this.isLoading = false;
        this.dialogRef.close();
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        this.isLoading = false;
        if(err.status===401){
              this.router.navigateByUrl('login');
        }else{
          this.snackBar.open(err.error.error, "Alert", {
            duration:4000
          });
        }
      }
    }
    );
  }

}
