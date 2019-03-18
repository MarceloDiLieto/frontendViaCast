import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { PersonViewModels } from 'src/app/shared/view-models/person.view-models';

@Component({
  selector: "app-detalhes",
  templateUrl: "./detalhes.component.html",
  styleUrls: ["./detalhes.component.css"]
})
export class DetalhesComponent implements OnInit {

  public dadosPessoa: PersonViewModels

  constructor(public dialogRef: MatDialogRef<DetalhesComponent>) {}

  ngOnInit() {}

  onCloseCancel() {
    this.dialogRef.close();
  }
}
