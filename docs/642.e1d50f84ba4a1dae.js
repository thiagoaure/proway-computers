"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[642],{2642:(M,l,i)=>{i.r(l),i.d(l,{ContatoModule:()=>N});var m=i(6895),s=i(9541),r=i(433),o=i(1571),c=i(269);function f(t,a){1&t&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa de no min\xedmo 4 caracteres "),o.qZA())}function d(t,a){1&t&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa ser preenchido "),o.qZA())}function p(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,f,2,0,"small",10),o.YNc(2,d,2,0,"small",10),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.formContato.controls.nome.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.nome.hasError("required"))}}function u(t,a){1&t&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa de no min\xedmo 20 caracteres "),o.qZA())}function C(t,a){1&t&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa ser preenchido "),o.qZA())}function g(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,u,2,0,"small",10),o.YNc(2,C,2,0,"small",10),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.formContato.controls.assunto.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.assunto.hasError("required"))}}function _(t,a){1&t&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa de no min\xedmo 11 caracteres "),o.qZA())}function v(t,a){1&t&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa ser preenchido "),o.qZA())}function h(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,_,2,0,"small",10),o.YNc(2,v,2,0,"small",10),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.formContato.controls.telefone.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.telefone.hasError("required"))}}function Z(t,a){1&t&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa ser um e-mail v\xe1lido "),o.qZA())}function T(t,a){1&t&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa ser preenchido "),o.qZA())}function x(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,Z,2,0,"small",10),o.YNc(2,T,2,0,"small",10),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.formContato.controls.email.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.email.hasError("required"))}}function y(t,a){1&t&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa de no min\xedmo 20 caracteres "),o.qZA())}function E(t,a){1&t&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa ser preenchido "),o.qZA())}function I(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,y,2,0,"small",10),o.YNc(2,E,2,0,"small",10),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.formContato.controls.mensagem.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.email.hasError("required"))}}const J=[{path:"",component:(()=>{class t{constructor(e,n){this.fb=e,this.notificacaoService=n,this.formContato=this.fb.group({nome:["",[r.kI.minLength(4),r.kI.required]],assunto:["",[r.kI.minLength(10),r.kI.required]],telefone:["",[r.kI.minLength(11),r.kI.required]],email:["",[r.kI.email,r.kI.required]],mensagem:["",[r.kI.minLength(10),r.kI.required]]})}ngOnInit(){}enviarForm(){this.notificacaoService.notificar("Sua Mensagem Foi Enviada com Sucesso!"),this.formContato.reset()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(r.qu),o.Y36(c.r))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-contato"]],decls:16,vars:27,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"formGroup","ngSubimit"],["type","text","placeholder","Digite seu nome","formControlName","nome"],[4,"ngIf"],["type","assunto","placeholder","Digite o assunto","formControlName","assunto"],["type","tel","placeholder","(00) 0 0000-0000","formControlName","telefone"],["type","email","placeholder","Digite seu e-mail","formControlName","email"],["maxlength","300","placeholder","Digite sua Mensagem...","rows","4","formControlName","mensagem"],["type","submit",3,"disabled"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,n){1&e&&(o.TgZ(0,"h2",0),o._uU(1," Entre em Contato\n"),o.qZA(),o.TgZ(2,"section",1)(3,"form",2),o.NdJ("ngSubimit",function(){return n.enviarForm()}),o._UZ(4,"input",3),o.YNc(5,p,3,2,"div",4),o._UZ(6,"input",5),o.YNc(7,g,3,2,"div",4),o._UZ(8,"input",6),o.YNc(9,h,3,2,"div",4),o._UZ(10,"input",7),o.YNc(11,x,3,2,"div",4),o._UZ(12,"textarea",8),o.YNc(13,I,3,2,"div",4),o.TgZ(14,"button",9),o._uU(15,"Enviar"),o.qZA()()()),2&e&&(o.xp6(3),o.Q6J("formGroup",n.formContato),o.xp6(1),o.ekj("valid",n.formContato.controls.nome.valid)("invalid",n.formContato.controls.nome.invalid&&n.formContato.controls.nome.touched||n.formContato.controls.nome.dirty),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.nome.invalid&&n.formContato.controls.nome.touched||n.formContato.controls.nome.dirty),o.xp6(1),o.ekj("valid",n.formContato.controls.assunto.valid)("invalid",n.formContato.controls.assunto.invalid&&n.formContato.controls.assunto.touched||n.formContato.controls.assunto.dirty),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.assunto.invalid&&n.formContato.controls.assunto.touched||n.formContato.controls.assunto.dirty),o.xp6(1),o.ekj("valid",n.formContato.controls.telefone.valid)("invalid",n.formContato.controls.telefone.invalid&&n.formContato.controls.telefone.touched||n.formContato.controls.telefone.dirty),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.telefone.invalid&&n.formContato.controls.telefone.touched||n.formContato.controls.telefone.dirty),o.xp6(1),o.ekj("valid",n.formContato.controls.email.valid)("invalid",n.formContato.controls.email.invalid&&n.formContato.controls.email.touched||n.formContato.controls.email.dirty),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.email.invalid&&n.formContato.controls.email.touched||n.formContato.controls.email.dirty),o.xp6(1),o.ekj("valid",n.formContato.controls.mensagem.valid)("invalid",n.formContato.controls.mensagem.invalid&&n.formContato.controls.mensagem.touched||n.formContato.controls.mensagem.dirty),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.mensagem.invalid&&n.formContato.controls.mensagem.touched||n.formContato.controls.mensagem.dirty),o.xp6(1),o.Q6J("disabled",n.formContato.invalid))},dependencies:[m.O5,r._Y,r.Fj,r.JJ,r.JL,r.nD,r.sg,r.u],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]}),t})()}];let q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.Bz.forChild(J),s.Bz]}),t})(),N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[m.ez,q,r.UX]}),t})()}}]);