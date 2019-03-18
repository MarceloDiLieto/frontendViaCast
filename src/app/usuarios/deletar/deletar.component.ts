import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-deletar",
  templateUrl: "./deletar.component.html",
  styleUrls: ["./deletar.component.css"]
})
export class DeletarComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeletarComponent>) {}

  ngOnInit() {}

  onCloseConfirm() {
    this.dialogRef.close(true);
  }

  onCloseCancel() {
    this.dialogRef.close(false);
  }
}
