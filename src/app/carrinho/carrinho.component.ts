import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { Route, Router } from '@angular/router';
import { NotificacaoService } from '../notificacao.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit  {
  faXmark = faXmark;
  total = 0;

  itensCarrinho: IProdutoCarrinho[] = [];

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router,
    private notificacaoService: NotificacaoService
  ){}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  removerProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calculaTotal();
  }

  calculaTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0 )
  }

  comprar(){
    this.notificacaoService.notificar("Sua Compra Foi Realizada Com Sucesso!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["/produtos"])
  }
}
