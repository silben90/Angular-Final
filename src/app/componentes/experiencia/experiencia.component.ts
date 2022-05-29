import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/data/experiencia';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: Experiencia[] = [];
  isUserLogged: Boolean = false;

 experienciaForm: FormGroup;

  constructor(
    private porfolioService: PortfolioService,
    private authService: AuthService,
    private formBuilder: FormBuilder) {
      this.experienciaForm = this.formBuilder.group({
          id: [''],
          school: ['', [Validators.required]],
          title: ['', [Validators.required]],
          img: ['', [Validators.required]],
        });
   }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    
    this.reloadData();
  }

  private reloadData() {
    this.porfolioService.obtenerDatosExperiencia().subscribe(
      (data) => {
        this.experienciaList = data;
      }
    );
  }

  private clearForm() {
    this.experienciaForm.setValue({
      id: '',
      school: '',
      title: '',
      img: ''
    })
  }

  private loadForm(experiencia: Experiencia) {
    this.experienciaForm.setValue({
      id: experiencia.id,
      empresa: experiencia.empresa,
      descripcion: experiencia.descripcion,
      inicio: experiencia.inicio,
      fin: experiencia.fin,
    })
  }

  onSubmit() {
    let experiencia: Experiencia = this.experienciaForm.value;
    if (this.experienciaForm.get('id')?.value == '') {
      this.porfolioService.guardarNuevaExperiencia(experiencia).subscribe(
        (nuevaExperiencia: Experiencia) => {
          this.experienciaList.push(nuevaExperiencia);
        }
      );
    } else {
      this.porfolioService.modificarExperiencia(experiencia).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

  onNuevaExperiencia() {
    this.clearForm();
  }

  onEditarExperiencia(index: number) {
    let experiencia: Experiencia = this.experienciaList[index];
    this.loadForm(experiencia);
  }

  onBorrarExperiencia(index: number) {
    let experiencia: Experiencia = this.experienciaList[index];
    if (confirm("¿Está seguro que desea borrar la experiencia seleccionada?")) {
      this.porfolioService.borrarExperiencia(experiencia.id).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

}

function experiencia(xperiencia: any) {
  throw new Error('Function not implemented.');
}
