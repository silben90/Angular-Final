import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudios } from 'src/app/data/estudios';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudiosList: Estudios[] = [];
  isUserLogged: Boolean = false;

  estudiosForm: FormGroup;

  constructor(
    private porfolioService: PortfolioService,
    private authService: AuthService,
    private formBuilder: FormBuilder) {
      this.estudiosForm = this.formBuilder.group({
          id: [''],
          ente: ['', [Validators.required]],
          titulo: ['', [Validators.required]],
          img: ['', [Validators.required]],
          inicio: ['', [Validators.required]],
          fin:['', [Validators.required]]
        });
   }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    
    this.reloadData();
  }

  private reloadData() {
    this.porfolioService.obtenerDatosEstudios().subscribe(
      (data) => {
        this.estudiosList = data;
      }
    );
  }

  private clearForm() {
    this.estudiosForm.setValue({
      id: '',
      ente: '',
      titulo: '',
      inicio:'',
      fin: '',
      img: ''
    })
  }

  private loadForm(estudios: Estudios) {
    this.estudiosForm.setValue({
      id: estudios.id,
      ente: estudios.ente,
      titulo: estudios.titulo,
      inicio: estudios.inicio,
      fin: estudios.fin,
      img: estudios.img
    })
  }

  onSubmit() {
    let estudios: Estudios = this.estudiosForm.value;
    if (this.estudiosForm.get('id')?.value == '') {
      this.porfolioService.guardarNuevosEstudios(estudios).subscribe(
        (nuevosEstudios: Estudios) => {
          this.estudiosList.push(nuevosEstudios);
        }
      );
    } else {
      this.porfolioService.modificarEstudios(estudios).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

  onNuevosEstudios() {
    this.clearForm();
  }

  onEditarEstudios(index: number) {
    let estudios: Estudios = this.estudiosList[index];
    this.loadForm(estudios);
  }

  onBorrarEstudios(index: number) {
    let estudios: Estudios = this.estudiosList[index];
    if (confirm("¿Está seguro que desea borrar la educación seleccionada?")) {
      this.porfolioService.borrarEstudios(estudios.id).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

}

function estudios(estudios: any) {
  throw new Error('Function not implemented.');
}
