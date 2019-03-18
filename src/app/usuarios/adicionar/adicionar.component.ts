import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { PersonViewModels } from "src/app/shared/view-models/person.view-models";

@Component({
  selector: "app-adicionar",
  templateUrl: "./adicionar.component.html",
  styleUrls: ["./adicionar.component.css"]
})
export class AdicionarComponent implements OnInit {
  public dadosPessoa: PersonViewModels = new PersonViewModels({});
  public isEdit: boolean;

  constructor(public dialogRef: MatDialogRef<AdicionarComponent>) {}

  ngOnInit() {}

  onCloseCancel() {
    this.dialogRef.close(false);
  }

  onCloseConfirmEdit() {
    this.dialogRef.close(this.dadosPessoa);
  }
}
