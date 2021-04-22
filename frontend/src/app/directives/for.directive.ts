import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') // Expressão for usada no html
  numbers!: number[]; // Numeros para ser exibido

  constructor(
    // Injeta as dependências
    private container: ViewContainerRef,  // Cria um container para colocar o elemento dentro
    private template: TemplateRef<any>    // Pega o elemento e coloca dentro do container que no caso é o <li> no html
  ) {

   }

  ngOnInit(): void {

    // Para cada numero que tiver no array
   for(let number of this.numbers) {
     // Ele cria o container e coloca o template dentro para cada elemento
     // { $implicit: number} torna visivel para o front o conteudo desse array
     this.container.createEmbeddedView(this.template, { $implicit: number})
   }
  }

}
