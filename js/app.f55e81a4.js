(function(){"use strict";var e={7055:function(e,t,l){var a=l(9242),o=l(3396),n=l(7718),u=l(6439),r=l(652),i=l(3435),m=l(4883),s=l(1332),d=l(1334),c=l(4646),p=l(4075),f=l(1666),h=l(3289),y=l(9271);const w=(0,o.Uk)(" К главной странице "),g={key:0},_=(0,o.Uk)(" mdi-account-minus "),W=(0,o.Uk)(" mdi-account-edit "),v=(0,o.Uk)(" mdi-account-multiple-plus "),x=(0,o.Uk)(" Вы уверены, что хотите выйти из аккаунта? "),E=(0,o.Uk)(" Нет "),k=(0,o.Uk)(" Да "),b=(0,o.Uk)(' ИС "Организация рабочего места и доступ к ИР" ');function V(e,t,l,a,V,U){const A=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n.q,{app:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u.L,null,{prepend:(0,o.w5)((()=>[e.employee.id>0?((0,o.wg)(),(0,o.j4)(i.T,{key:0,onClick:t[0]||(t[0]=e=>U.goToRoute("HomePage",null)),elevation:"1",class:"ml-5"},{default:(0,o.w5)((()=>[w])),_:1})):(0,o.kq)("",!0)])),append:(0,o.w5)((()=>[e.employee.id>0?((0,o.wg)(),(0,o.iD)("div",g,[(0,o.Wm)(r.V,{onClick:t[1]||(t[1]=e=>V.inStateOfConfirmation=!0),color:"warning",tile:""},{default:(0,o.w5)((()=>[(0,o.Wm)(h.t,null,{default:(0,o.w5)((()=>[_])),_:1})])),_:1}),(0,o.Wm)(r.V,{onClick:t[2]||(t[2]=t=>U.goToRoute("EditAccount",e.employee.id)),color:"primary",tile:"",class:"ml-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(h.t,null,{default:(0,o.w5)((()=>[W])),_:1})])),_:1}),(e.employee.type="администратор")?((0,o.wg)(),(0,o.j4)(r.V,{key:0,onClick:t[3]||(t[3]=e=>U.goToRoute("ManageAccounts",null)),color:"primary",tile:"",class:"ml-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(h.t,null,{default:(0,o.w5)((()=>[v])),_:1})])),_:1})):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(y.O,{class:"main-block mt-5"},{default:(0,o.w5)((()=>[(0,o.Wm)(c.B,{modelValue:V.inStateOfConfirmation,"onUpdate:modelValue":t[5]||(t[5]=e=>V.inStateOfConfirmation=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(m._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s.Q,null,{default:(0,o.w5)((()=>[x])),_:1}),(0,o.Wm)(d.h,{class:"d-flex justify-space-between"},{default:(0,o.w5)((()=>[(0,o.Wm)(i.T,{onClick:t[4]||(t[4]=e=>V.inStateOfConfirmation=!1)},{default:(0,o.w5)((()=>[E])),_:1}),(0,o.Wm)(i.T,{onClick:U.logout},{default:(0,o.w5)((()=>[k])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(A)])),_:1}),(0,o.Wm)(p.J),(0,o.Wm)(f.c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s.Q,{class:"pa-2 v-footer"},{default:(0,o.w5)((()=>[b])),_:1})])),_:1})])),_:1})}var U=l(65);class A{constructor(){this.id=0,this.lastName="",this.firstName="",this.patronymic="",this.department="",this.position="",this.timeCardNumber="",this.login="",this.password="",this.type="пользователь"}}var q=A;const O=()=>({currentEmployee:new q,employeeList:[{id:1,lastName:"Иванов",firstName:"Иван",patronymic:"Иванович",department:"Отдел информационных систем",position:"системный администратор",timeCardNumber:"12345678910",login:"admin",password:"admin",type:"администратор"}],logoutStatus:0,loginStatus:1}),j={getEmployeeList:e=>e.employeeList,getEmployee:e=>e.currentEmployee,getAnotherEmployee:e=>t=>(console.log("getAnotherEmployee"),e.employeeList.find((e=>e.id===parseInt(t)))),getAuthStatus:e=>e.currentEmployee.id>0?e.loginStatus:e.logoutStatus,getAnotherEmployeeWithIdenticalLogin:e=>t=>{const l=e.employeeList.find((e=>e.login===t.login&&e.id!==t.id));return l||null}},C={authorize({commit:e,state:t},l){const a=t.employeeList.find((e=>e.login===l.login&&e.password===l.password));a&&e("setEmployee",{employee:a})},logout({commit:e}){const t=new q;e("unsetEmployee",{defaultEmployee:t})},createAccount({commit:e,state:t},l){const a=t.employeeList.find((e=>e.login===l.login));a||(l.id=t.employeeList[t.employeeList.length-1].id+1,e("pushEmployeeToEmployeeList",{employee:l}))},editAnotherAccount({commit:e,state:t},l){const a=t.employeeList.find((e=>e.login===l.login&&e.id!==l.id));a||e("changeEmployeeOfEmployeeList",{employee:l})},editOwnAccount({commit:e,state:t},l){const a=t.employeeList.find((e=>e.login===l.login&&e.id!==l.id));a||(e("setEmployee",{employee:l}),e("changeEmployeeOfEmployeeList",{employee:l}))}},T={setEmployee(e,{employee:t}){e.currentEmployee=t},unsetEmployee(e,{employee:t}){e.currentEmployee={...t}},pushEmployeeToEmployeeList(e,{employee:t}){e.employeeList.push(t)},changeEmployeeOfEmployeeList(e,{employee:t}){const l=e.employeeList.findIndex((e=>e.id===t.id));e.employeeList[l]&&(e.employeeList[l]=t)}};var R={namespaced:!0,state:O,getters:j,actions:C,mutations:T};const L=!1;var N=(0,U.MT)({modules:{employee:R},strict:L,plugins:L?[(0,U.hu)()]:[]}),F={name:"App",data(){return{inStateOfConfirmation:!1}},methods:{goToRoute:function(e,t){t?this.$router.push({name:e,params:{id:t}}):this.$router.push({name:e})},logout:function(){N.dispatch("employee/logout"),this.inStateOfConfirmation=!1,this.$router.push({name:"AuthorizeForm"})}},computed:{...(0,U.Se)({employee:"employee/getEmployee"})}},S=l(89);const Z=(0,S.Z)(F,[["render",V]]);var I=Z,M=(l(9773),l(8604)),P=l(4402),z=(0,P.Rd)({locale:{messages:{ru:M.Z}}});async function $(){const e=await l.e(461).then(l.t.bind(l,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var D=l(678),H=l(7139),Q=l(3749),B=l(6145),J=l(7754),K=l(8319),Y=l(2127);const G=(0,o.Uk)(" Шаблоны заявок: "),X=(0,o.Uk)("Мои заявки / Архив");function ee(e,t,l,a,n,u){return(0,o.wg)(),(0,o.j4)(m._,{tile:"","max-width":"80vw",class:"mx-auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(Q.k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(B.i,{tile:""},{default:(0,o.w5)((()=>[(0,o.Wm)(J.b,null,{default:(0,o.w5)((()=>[G])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.mainMenuList,((e,t)=>((0,o.wg)(),(0,o.j4)(K.l,{key:`main-menu-item-${t}`,onClick:t=>u.goToRoute(e.componentName),"active-color":"primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(Y.V,{textContent:(0,H.zw)(e.text)},null,8,["textContent"])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),(0,o.Wm)(d.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i.T,{elevation:"1"},{default:(0,o.w5)((()=>[X])),_:1})])),_:1})])),_:1})}var te={name:"HomePage",data:()=>({mainMenuList:[{text:"Заявка на доступ в помещения Управления и создание ключа ЭЦП",componentName:"RequestForRoomAccess"},{text:"Заявка об обеспечении АРМ",componentName:"RequestForProvisionOfAW"},{text:"Заявка на доступ к ИР",componentName:"RequestForEmployeeAccessToIR"},{text:"Заявка на обеспечение канцелярскими товарами и мебелью",componentName:"RequestForProvideEmployeeWithOfficeSupplies"},{text:"Заявка о включении в приказ на допуск к ИС",componentName:"RequestForApplicationForInclusionInOrder"},{text:"Заявка на проведение инструктажей",componentName:"RequestForBriefings"}]}),methods:{goToRoute:function(e){this.$router.push({name:e})}},computed:{...(0,U.Se)({employee:"employee/getEmployee"})},watched:{employee(e){0===e&&this.$router.push({name:"AuthorizeForm"})}}};const le=(0,S.Z)(te,[["render",ee]]);var ae=le,oe=l(6572),ne=l(1888),ue=l(8521);const re=e=>((0,o.dD)("data-v-12ef5aa9"),e=e(),(0,o.Cn)(),e),ie=(0,o.Uk)(" ЗАЯВКА "),me=(0,o.Uk)(" на доступ в помещения Управления Федерального казначейства по Республике Марий Эл и созданию ключа ЭЦП "),se=re((()=>(0,o._)("p",null," Прошу создать карту доступа для обеспечения доступа в помещения нового сотрудника с табельным номером, назначенного на должность в Управления Федерального казначейства по Республике Марий Эл, а также создать ключ электронно-цифровой подписи. ",-1))),de=re((()=>(0,o._)("p",null," Начальник ",-1))),ce=(0,o.Uk)(" Отправить ");function pe(e,t,l,a,n,u){return(0,o.wg)(),(0,o.j4)(m._,{tile:"","max-width":"80vw",class:"mx-auto ma-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(ue.D,{class:"d-flex flex-column align-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(oe.E,null,{default:(0,o.w5)((()=>[ie])),_:1}),(0,o.Wm)(s.Q,null,{default:(0,o.w5)((()=>[me])),_:1}),(0,o.Wm)(Q.k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ne.Z,null,{default:(0,o.w5)((()=>[se,de])),_:1})])),_:1})])),_:1}),(0,o.Wm)(d.h,{class:"d-flex justify-end"},{default:(0,o.w5)((()=>[(0,o.Wm)(i.T,{elevation:"1"},{default:(0,o.w5)((()=>[ce])),_:1})])),_:1})])),_:1})}var fe={name:"RequestForRoomAccess",data(){return{}}};const he=(0,S.Z)(fe,[["render",pe],["__scopeId","data-v-12ef5aa9"]]);var ye=he,we=l(1222);const ge=(0,o.Uk)(" ЗАЯВКА "),_e=(0,o.Uk)(" об обеспечении АРМ нового сотрудника "),We=(0,o.Uk)(" Прошу обеспечить АРМ нового сотрудника с табельным номером, назначенного на должность в Управления Федерального казначейства по Республике Марий Эл. "),ve=(0,o.Uk)(" Начальник "),xe=(0,o.Uk)(" Отправить ");function Ee(e,t,l,a,n,u){return(0,o.wg)(),(0,o.j4)(m._,{tile:"","max-width":"80vw",class:"mx-auto my-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(ue.D,{class:"d-flex flex-column align-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(oe.E,null,{default:(0,o.w5)((()=>[ge])),_:1}),(0,o.Wm)(s.Q,null,{default:(0,o.w5)((()=>[_e])),_:1}),(0,o.Wm)(Q.k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ne.Z,{class:"pl-6 main-paragraph"},{default:(0,o.w5)((()=>[We])),_:1}),(0,o.Wm)(we.x,{label:"Выдать телефонный аппарат",dense:"","hide-details":""}),(0,o.Wm)(we.x,{label:"Допустить к принтерам общего пользования",dense:"","hide-details":""}),(0,o.Wm)(ne.Z,{class:"main-paragraph"},{default:(0,o.w5)((()=>[ve])),_:1})])),_:1})])),_:1}),(0,o.Wm)(d.h,{class:"d-flex justify-end"},{default:(0,o.w5)((()=>[(0,o.Wm)(i.T,{elevation:"1"},{default:(0,o.w5)((()=>[xe])),_:1})])),_:1})])),_:1})}var ke={name:"RequestForProvisionOfAW",data(){return{}}};const be=(0,S.Z)(ke,[["render",Ee],["__scopeId","data-v-60dce602"]]);var Ve=be;const Ue=(0,o.Uk)(" ЗАЯВКА "),Ae=(0,o.Uk)(" на допуск сотрудника к информационным ресурсам АС Управления "),qe=(0,o.Uk)(" Прошу допустить нового сотрудника с табельным номером, назначенного на должность в Управления Федерального казначейства по Республике Марий Эл к информационным ресурсам АС Управления и включить его в группы: "),Oe=(0,o.Uk)(" Начальник "),je=(0,o.Uk)(" Отправить ");function Ce(e,t,l,a,n,u){return(0,o.wg)(),(0,o.j4)(m._,{tile:"","max-width":"80vw",class:"mx-auto my-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(ue.D,{class:"d-flex flex-column align-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(oe.E,null,{default:(0,o.w5)((()=>[Ue])),_:1}),(0,o.Wm)(s.Q,null,{default:(0,o.w5)((()=>[Ae])),_:1}),(0,o.Wm)(Q.k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ne.Z,{class:"pl-6 main-paragraph"},{default:(0,o.w5)((()=>[qe])),_:1}),(0,o.Wm)(we.x,{label:"Все пользователи Управления",dense:"","hide-details":""}),(0,o.Wm)(we.x,{label:"Отдел информационных систем",dense:"","hide-details":""}),(0,o.Wm)(we.x,{label:"Отдел расходов",dense:"","hide-details":""}),(0,o.Wm)(we.x,{label:"Архив операционного отдела",dense:"","hide-details":""}),(0,o.Wm)(ne.Z,{class:"main-paragraph"},{default:(0,o.w5)((()=>[Oe])),_:1})])),_:1})])),_:1}),(0,o.Wm)(d.h,{class:"d-flex justify-end"},{default:(0,o.w5)((()=>[(0,o.Wm)(i.T,{elevation:"1"},{default:(0,o.w5)((()=>[je])),_:1})])),_:1})])),_:1})}var Te={name:"RequestForEmployeeAccessToIR",data(){return{}}};const Re=(0,S.Z)(Te,[["render",Ce],["__scopeId","data-v-ee51d35a"]]);var Le=Re;const Ne=(0,o.Uk)(" ЗАЯВКА "),Fe=(0,o.Uk)(" на обеспечение сотрудника канцелярскими товарами и мебелью "),Se=(0,o.Uk)(" Прошу обеспечить нового сотрудника с табельным номером, назначенного на должность в Управления Федерального казначейства по Республике Марий Эл набором канцелярских предметов, а также мебелью: "),Ze=(0,o.Uk)(" Начальник "),Ie=(0,o.Uk)(" Отправить ");function Me(e,t,l,a,n,u){return(0,o.wg)(),(0,o.j4)(m._,{tile:"","max-width":"80vw",class:"mx-auto my-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(ue.D,{class:"d-flex flex-column align-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(oe.E,null,{default:(0,o.w5)((()=>[Ne])),_:1}),(0,o.Wm)(s.Q,null,{default:(0,o.w5)((()=>[Fe])),_:1}),(0,o.Wm)(Q.k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ne.Z,{class:"pl-6 main-paragraph"},{default:(0,o.w5)((()=>[Se])),_:1}),(0,o.Wm)(we.x,{label:"Стол",dense:"","hide-details":""}),(0,o.Wm)(we.x,{label:"Офисное кресло",dense:"","hide-details":""}),(0,o.Wm)(we.x,{label:"Тумба",dense:"","hide-details":""}),(0,o.Wm)(ne.Z,{class:"main-paragraph"},{default:(0,o.w5)((()=>[Ze])),_:1})])),_:1})])),_:1}),(0,o.Wm)(d.h,{class:"d-flex justify-end"},{default:(0,o.w5)((()=>[(0,o.Wm)(i.T,{elevation:"1"},{default:(0,o.w5)((()=>[Ie])),_:1})])),_:1})])),_:1})}var Pe={name:"RequestForProvideEmployeeWithOfficeSupplies",data(){return{}}};const ze=(0,S.Z)(Pe,[["render",Me],["__scopeId","data-v-4cbfc042"]]);var $e=ze;const De=(0,o.Uk)(" ЗАЯВКА "),He=(0,o.Uk)(" о включении в приказ на допуск нового сотрудника к информационным системам Управления "),Qe=(0,o.Uk)(" Прошу допустить нового сотрудника с табельным номером, назначенного на должность в Управления Федерального казначейства по Республике Марий Эл к информационным системам АС Управления: "),Be=(0,o.Uk)(" Начальник "),Je=(0,o.Uk)(" Отправить ");function Ke(e,t,l,a,n,u){return(0,o.wg)(),(0,o.j4)(m._,{tile:"","max-width":"80vw",class:"mx-auto my-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(ue.D,{class:"d-flex flex-column align-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(oe.E,null,{default:(0,o.w5)((()=>[De])),_:1}),(0,o.Wm)(s.Q,null,{default:(0,o.w5)((()=>[He])),_:1}),(0,o.Wm)(Q.k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ne.Z,{class:"pl-6 main-paragraph"},{default:(0,o.w5)((()=>[Qe])),_:1}),(0,o.Wm)(we.x,{label:"АСФК",dense:"","hide-details":""}),(0,o.Wm)(we.x,{label:"ЭБ",dense:"","hide-details":""}),(0,o.Wm)(we.x,{label:"ЕИС",dense:"","hide-details":""}),(0,o.Wm)(we.x,{label:"ГАСУ",dense:"","hide-details":""}),(0,o.Wm)(we.x,{label:"СУФД",dense:"","hide-details":""}),(0,o.Wm)(we.x,{label:"СЭД",dense:"","hide-details":""}),(0,o.Wm)(we.x,{label:"ПИАО",dense:"","hide-details":""}),(0,o.Wm)(ne.Z,{class:"main-paragraph"},{default:(0,o.w5)((()=>[Be])),_:1})])),_:1})])),_:1}),(0,o.Wm)(d.h,{class:"d-flex justify-end"},{default:(0,o.w5)((()=>[(0,o.Wm)(i.T,{elevation:"1"},{default:(0,o.w5)((()=>[Je])),_:1})])),_:1})])),_:1})}var Ye={name:"RequestForApplicationForInclusionInOrder",data(){return{}}};const Ge=(0,S.Z)(Ye,[["render",Ke],["__scopeId","data-v-48da3f0b"]]);var Xe=Ge;const et=(0,o.Uk)(" ЗАЯВКА "),tt=(0,o.Uk)(" на проведение инструктажей нового сотрудника "),lt=(0,o.Uk)(" Прошу провести инструктажи для нового сотрудника с табельным номером, назначенного на должность в Управления Федерального казначейства по Республике Марий Эл. "),at=(0,o.Uk)(" Начальник "),ot=(0,o.Uk)(" Отправить ");function nt(e,t,l,a,n,u){return(0,o.wg)(),(0,o.j4)(m._,{tile:"","max-width":"80vw",class:"mx-auto my-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(ue.D,{class:"d-flex flex-column align-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(oe.E,null,{default:(0,o.w5)((()=>[et])),_:1}),(0,o.Wm)(s.Q,null,{default:(0,o.w5)((()=>[tt])),_:1}),(0,o.Wm)(Q.k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ne.Z,{class:"pl-6 main-paragraph"},{default:(0,o.w5)((()=>[lt])),_:1}),(0,o.Wm)(ne.Z,{class:"main-paragraph"},{default:(0,o.w5)((()=>[at])),_:1})])),_:1})])),_:1}),(0,o.Wm)(d.h,{class:"d-flex justify-end"},{default:(0,o.w5)((()=>[(0,o.Wm)(i.T,{elevation:"1"},{default:(0,o.w5)((()=>[ot])),_:1})])),_:1})])),_:1})}var ut={name:"RequestForBriefings",data(){return{}}};const rt=(0,S.Z)(ut,[["render",nt],["__scopeId","data-v-41c6a589"]]);var it=rt,mt=l(6422),st=l(3369),dt=l(5119);const ct=(0,o.Uk)(" Пройдите авторизацию "),pt=(0,o.Uk)(" Авторизоваться ");function ft(e,t,l,a,n,u){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(m._,{tile:"","max-width":"66vw",class:"mx-auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(st.K,{class:"d-flex flex-column"},{default:(0,o.w5)((()=>[(0,o.Wm)(oe.E,null,{default:(0,o.w5)((()=>[ct])),_:1}),(0,o.Wm)(Q.k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(mt.O,{modelValue:n.isValidating,"onUpdate:modelValue":t[2]||(t[2]=e=>n.isValidating=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(dt.h,{modelValue:n.login,"onUpdate:modelValue":t[0]||(t[0]=e=>n.login=e),rules:[n.rules.required],label:"Логин",type:"login",variant:"outlined",counter:"15",maxlength:"15",autofocus:""},null,8,["modelValue","rules"]),(0,o.Wm)(dt.h,{modelValue:n.password,"onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e),rules:[n.rules.required],label:"Пароль",type:"password",variant:"outlined",counter:"20",maxlength:"20"},null,8,["modelValue","rules"])])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(d.h,{class:"pr-8 pb-8 d-flex justify-end"},{default:(0,o.w5)((()=>[(0,o.Wm)(i.T,{onClick:u.authorize,elevation:"1"},{default:(0,o.w5)((()=>[pt])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,o.Wm)(c.B,{modelValue:n.alertExists,"onUpdate:modelValue":t[3]||(t[3]=e=>n.alertExists=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(m._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ne.Z,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,H.zw)(n.alertMessage),1)])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var ht={name:"AuthorizeForm",data(){return{login:"",password:"",alertMessage:"",isValidating:!1,alertExists:!1,rules:{required:e=>!!e||"Обязательное поле"}}},methods:{authorize:function(){const e={login:this.login,password:this.password};this.isValidating&&(N.dispatch("employee/authorize",e),this.$router.push({name:"HomePage"}),this.alertMessage="Вы ввели неверный логин или пароль!",this.alertExists=!0,setTimeout((()=>{this.alertExists=!1}),3e3))}},mounted(){const e={...N.getters["employee/getAuthStatus"]};1===e&&this.$router.push({name:"HomePage"})}};const yt=(0,S.Z)(ht,[["render",ft]]);var wt=yt,gt=l(4846),_t=l(1275);const Wt=(0,o.Uk)(" Измените данные собственного аккаунта "),vt=(0,o.Uk)(" Измените данные выбранного аккаунта "),xt=(0,o.Uk)(" Изменить ");function Et(e,t,l,a,n,u){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(m._,{tile:"","max-width":"66vw",class:"mx-auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(st.K,{class:"d-flex flex-column"},{default:(0,o.w5)((()=>[parseInt(e.$route.params.id)===n.myAccount.id?((0,o.wg)(),(0,o.j4)(oe.E,{key:0},{default:(0,o.w5)((()=>[Wt])),_:1})):((0,o.wg)(),(0,o.j4)(oe.E,{key:1},{default:(0,o.w5)((()=>[vt])),_:1})),(0,o.Wm)(Q.k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(mt.O,{modelValue:n.isValidating,"onUpdate:modelValue":t[9]||(t[9]=e=>n.isValidating=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(dt.h,{modelValue:n.curEmployee.lastName,"onUpdate:modelValue":t[0]||(t[0]=e=>n.curEmployee.lastName=e),rules:[n.rules.required],label:"Фамилия",type:"text",variant:"outlined",counter:"25",maxlength:"25"},null,8,["modelValue","rules"]),(0,o.Wm)(dt.h,{modelValue:n.curEmployee.firstName,"onUpdate:modelValue":t[1]||(t[1]=e=>n.curEmployee.firstName=e),rules:[n.rules.required],label:"Имя",type:"text",variant:"outlined",counter:"20",maxlength:"20"},null,8,["modelValue","rules"]),(0,o.Wm)(dt.h,{modelValue:n.curEmployee.patronymic,"onUpdate:modelValue":t[2]||(t[2]=e=>n.curEmployee.patronymic=e),label:"Отчество (при наличии)",type:"text",variant:"outlined",counter:"20",maxlength:"20"},null,8,["modelValue"]),(0,o.Wm)(p.J),(0,o.Wm)(dt.h,{modelValue:n.curEmployee.department,"onUpdate:modelValue":t[3]||(t[3]=e=>n.curEmployee.department=e),rules:[n.rules.required],label:"Отдел",type:"text",variant:"outlined",counter:"60",maxlength:"60"},null,8,["modelValue","rules"]),(0,o.Wm)(dt.h,{modelValue:n.curEmployee.position,"onUpdate:modelValue":t[4]||(t[4]=e=>n.curEmployee.position=e),rules:[n.rules.required],label:"Должность",type:"text",variant:"outlined",counter:"60",maxlength:"60"},null,8,["modelValue","rules"]),(0,o.Wm)(dt.h,{modelValue:n.curEmployee.timeCardNumber,"onUpdate:modelValue":t[5]||(t[5]=e=>n.curEmployee.timeCardNumber=e),rules:[n.rules.required],label:"Табельный номер",type:"number",variant:"outlined",counter:"11",maxlength:"11"},null,8,["modelValue","rules"]),(0,o.Wm)(p.J),(0,o.Wm)(dt.h,{modelValue:n.curEmployee.login,"onUpdate:modelValue":t[6]||(t[6]=e=>n.curEmployee.login=e),rules:[n.rules.required],label:"Логин",type:"login",variant:"outlined",counter:"15",maxlength:"15"},null,8,["modelValue","rules"]),(0,o.Wm)(dt.h,{modelValue:n.curEmployee.password,"onUpdate:modelValue":t[7]||(t[7]=e=>n.curEmployee.password=e),rules:[n.rules.required],label:"Пароль",type:"password",variant:"outlined",counter:"20",maxlength:"20"},null,8,["modelValue","rules"]),parseInt(e.$route.params.id)!==n.myAccount.id?((0,o.wg)(),(0,o.j4)(_t.r,{key:0,modelValue:n.curEmployee.type,"onUpdate:modelValue":t[8]||(t[8]=e=>n.curEmployee.type=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(gt.R,{label:"пользователь",value:"Тип аккаунта: пользователь"}),(0,o.Wm)(gt.R,{label:"администратор",value:"Тип аккаунта: администратор"})])),_:1},8,["modelValue"])):(0,o.kq)("",!0)])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(d.h,{class:"pr-8 pb-8 d-flex justify-end"},{default:(0,o.w5)((()=>[(0,o.Wm)(i.T,{onClick:u.authorize,elevation:"1"},{default:(0,o.w5)((()=>[xt])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,o.Wm)(c.B,{modelValue:n.alertExists,"onUpdate:modelValue":t[10]||(t[10]=e=>n.alertExists=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(m._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ne.Z,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,H.zw)(n.alertMessage),1)])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var kt={name:"EditAccount",data(){return{myAccount:new q,curEmployee:new q,alertMessage:"",isValidating:!1,alertExists:!1,rules:{required:e=>!!e||"Обязательное поле"},accountTypeList:["администратор","пользователь"]}},methods:{authorize:function(){if(this.isValidating){if(N.getters["employee/getAnotherEmployeeWithIdenticalLogin"](this.curEmployee))return void this.showAlertMessage("Введённый логин уже занят! Отмена изменения");parseInt(this.$route.params.id)===this.myAccount.id?(N.dispatch("employee/editOwnAccount",this.curEmployee),this.$router.push({name:"HomePage"})):(N.dispatch("employee/editAnotherAccount",this.curEmployee),this.$router.push({name:"HomePage"}))}},showAlertMessage:function(e){this.alertMessage=e,this.alertExists=!0,setTimeout((()=>{this.alertExists=!1}),3e3)}},mounted(){this.myAccount={...N.getters["employee/getEmployee"]},parseInt(this.$route.params.id)===this.myAccount.id?this.curEmployee={...this.myAccount}:this.curEmployee={...N.getters["employee/getAnotherEmployee"](this.$route.params.id)}}};const bt=(0,S.Z)(kt,[["render",Et]]);var Vt=bt;const Ut=(0,o.Uk)(" Зарегистрируйте сотрудника в системе "),At=(0,o.Uk)(" Зарегистрировать ");function qt(e,t,l,a,n,u){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(m._,{tile:"","max-width":"66vw",class:"mx-auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(st.K,{class:"d-flex flex-column"},{default:(0,o.w5)((()=>[(0,o.Wm)(oe.E,null,{default:(0,o.w5)((()=>[Ut])),_:1}),(0,o.Wm)(Q.k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(mt.O,{modelValue:n.isValidating,"onUpdate:modelValue":t[9]||(t[9]=e=>n.isValidating=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(dt.h,{modelValue:n.curEmployee.lastName,"onUpdate:modelValue":t[0]||(t[0]=e=>n.curEmployee.lastName=e),rules:[n.rules.required],label:"Фамилия",type:"text",variant:"outlined",counter:"25",maxlength:"25"},null,8,["modelValue","rules"]),(0,o.Wm)(dt.h,{modelValue:n.curEmployee.firstName,"onUpdate:modelValue":t[1]||(t[1]=e=>n.curEmployee.firstName=e),rules:[n.rules.required],label:"Имя",type:"text",variant:"outlined",counter:"20",maxlength:"20"},null,8,["modelValue","rules"]),(0,o.Wm)(dt.h,{modelValue:n.curEmployee.patronymic,"onUpdate:modelValue":t[2]||(t[2]=e=>n.curEmployee.patronymic=e),label:"Отчество (при наличии)",type:"text",variant:"outlined",counter:"20",maxlength:"20"},null,8,["modelValue"]),(0,o.Wm)(p.J),(0,o.Wm)(dt.h,{modelValue:n.curEmployee.department,"onUpdate:modelValue":t[3]||(t[3]=e=>n.curEmployee.department=e),rules:[n.rules.required],label:"Отдел",type:"text",variant:"outlined",counter:"60",maxlength:"60"},null,8,["modelValue","rules"]),(0,o.Wm)(dt.h,{modelValue:n.curEmployee.position,"onUpdate:modelValue":t[4]||(t[4]=e=>n.curEmployee.position=e),rules:[n.rules.required],label:"Должность",type:"text",variant:"outlined",counter:"60",maxlength:"60"},null,8,["modelValue","rules"]),(0,o.Wm)(dt.h,{modelValue:n.curEmployee.timeCardNumber,"onUpdate:modelValue":t[5]||(t[5]=e=>n.curEmployee.timeCardNumber=e),rules:[n.rules.required],label:"Табельный номер",type:"number",variant:"outlined",counter:"11",maxlength:"11"},null,8,["modelValue","rules"]),(0,o.Wm)(p.J),(0,o.Wm)(dt.h,{modelValue:n.curEmployee.login,"onUpdate:modelValue":t[6]||(t[6]=e=>n.curEmployee.login=e),rules:[n.rules.required],label:"Логин",type:"login",variant:"outlined",counter:"15",maxlength:"15"},null,8,["modelValue","rules"]),(0,o.Wm)(dt.h,{modelValue:n.curEmployee.password,"onUpdate:modelValue":t[7]||(t[7]=e=>n.curEmployee.password=e),rules:[n.rules.required],label:"Пароль",type:"password",variant:"outlined",counter:"20",maxlength:"20"},null,8,["modelValue","rules"]),(0,o.Wm)(_t.r,{modelValue:n.curEmployee.type,"onUpdate:modelValue":t[8]||(t[8]=e=>n.curEmployee.type=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(gt.R,{label:"пользователь",value:"Тип аккаунта: пользователь"}),(0,o.Wm)(gt.R,{label:"администратор",value:"Тип аккаунта: администратор"})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(d.h,{class:"pr-8 pb-8 d-flex justify-end"},{default:(0,o.w5)((()=>[(0,o.Wm)(i.T,{onClick:u.signup,elevation:"1"},{default:(0,o.w5)((()=>[At])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,o.Wm)(c.B,{modelValue:n.alertExists,"onUpdate:modelValue":t[10]||(t[10]=e=>n.alertExists=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(m._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ne.Z,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,H.zw)(n.alertMessage),1)])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var Ot={name:"SignupEmployee",data(){return{curEmployee:new q,alertMessage:"",isValidating:!1,alertExists:!1,rules:{required:e=>!!e||"Обязательное поле"},accountTypeList:["администратор","пользователь"]}},methods:{signup:function(){if(this.isValidating){if(N.getters["employee/getAnotherEmployeeWithIdenticalLogin"](this.curEmployee))return void this.showAlertMessage("Введённый логин уже занят! Отмена регистрации");N.dispatch("employee/createAccount",this.curEmployee),this.$router.push({name:"HomePage"})}},showAlertMessage:function(e){this.alertMessage=e,this.alertExists=!0,setTimeout((()=>{this.alertExists=!1}),3e3)}},computed:{...(0,U.Se)({employee:"employee/getEmployee"})}};const jt=(0,S.Z)(Ot,[["render",qt]]);var Ct=jt;const Tt=(0,o.Uk)(" Выберите одного из сотрудника для изменения его аккаунта: "),Rt=(0,o.Uk)(" Если сотрудник не имеет аккаунта, то перейдите "),Lt=(0,o.Uk)(" К регистрации ");function Nt(e,t,l,n,u,r){return(0,o.wg)(),(0,o.j4)(m._,{tile:"","max-width":"66vw",class:"mx-auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(Q.k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(B.i,{tile:""},{default:(0,o.w5)((()=>[(0,o.Wm)(J.b,{disabled:!u.employeeList},{default:(0,o.w5)((()=>[Tt])),_:1},8,["disabled"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.employeeList,((e,t)=>(0,o.wy)(((0,o.wg)(),(0,o.j4)(K.l,{key:`account-item-${t}`,onClick:t=>r.goToRoute("EditAccount",e.id),"active-color":"primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(Y.V,{textContent:(0,H.zw)(`${e.lastName} ${e.firstName} ${e.patronymic}`)},null,8,["textContent"])])),_:2},1032,["onClick"])),[[a.F8,e.id!==u.myAccount.id]]))),128))])),_:1})])),_:1}),(0,o.Wm)(d.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s.Q,null,{default:(0,o.w5)((()=>[Rt])),_:1}),(0,o.Wm)(i.T,{onClick:t[0]||(t[0]=e=>r.goToRoute("SignupEmployee",null)),elevation:"1"},{default:(0,o.w5)((()=>[Lt])),_:1})])),_:1})])),_:1})}var Ft={name:"ManageAccounts",data(){return{myAccount:null,employeeList:null}},methods:{goToRoute:function(e,t){t?this.$router.push({name:e,params:{id:t}}):this.$router.push({name:e})}},mounted(){this.myAccount={...N.getters["employee/getEmployee"]},this.employeeList={...N.getters["employee/getEmployeeList"]}}};const St=(0,S.Z)(Ft,[["render",Nt]]);var Zt=St;const It=[{path:"/home-page",name:"HomePage",component:ae},{path:"/authorize-form",name:"AuthorizeForm",component:wt},{path:"/edit-account/:id",name:"EditAccount",component:Vt},{path:"/signup-employee",name:"SignupEmployee",component:Ct},{path:"/manage-accounts",name:"ManageAccounts",component:Zt},{path:"/request-for-room-access",name:"RequestForRoomAccess",component:ye},{path:"/request-for-provision-of-aw",name:"RequestForProvisionOfAW",component:Ve},{path:"/request-for-employee-access-to-ir",name:"RequestForEmployeeAccessToIR",component:Le},{path:"/request-for-provide-employee-with-office-supplies",name:"RequestForProvideEmployeeWithOfficeSupplies",component:$e},{path:"/request-for-application-for-inclusion-in-order",name:"RequestForApplicationForInclusionInOrder",component:Xe},{path:"/request-for-briefings",name:"RequestForBriefings",component:it},{path:"/:pathMatch(.*)*",redirect:"/home-page"}],Mt=(0,D.p7)({history:(0,D.PO)("/workplace-organization-and-access-vue3/"),routes:It,mode:"hash"});Mt.beforeEach((e=>{const t=N.getters["employee/getAuthStatus"];if(0===t&&"AuthorizeForm"!==e.name)return{name:"AuthorizeForm"}}));var Pt=Mt;$(),(0,a.ri)(I).use(Pt).use(z).use(N).mount("#app")}},t={};function l(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,l),n.exports}l.m=e,function(){var e=[];l.O=function(t,a,o,n){if(!a){var u=1/0;for(s=0;s<e.length;s++){a=e[s][0],o=e[s][1],n=e[s][2];for(var r=!0,i=0;i<a.length;i++)(!1&n||u>=n)&&Object.keys(l.O).every((function(e){return l.O[e](a[i])}))?a.splice(i--,1):(r=!1,n<u&&(u=n));if(r){e.splice(s--,1);var m=o();void 0!==m&&(t=m)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[a,o,n]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};l.t=function(a,o){if(1&o&&(a=this(a)),8&o)return a;if("object"===typeof a&&a){if(4&o&&a.__esModule)return a;if(16&o&&"function"===typeof a.then)return a}var n=Object.create(null);l.r(n);var u={};e=e||[null,t({}),t([]),t(t)];for(var r=2&o&&a;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){u[e]=function(){return a[e]}}));return u["default"]=function(){return a},l.d(n,u),n}}(),function(){l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){l.f={},l.e=function(e){return Promise.all(Object.keys(l.f).reduce((function(t,a){return l.f[a](e,t),t}),[]))}}(),function(){l.u=function(e){return"js/webfontloader.a650cb3f.js"}}(),function(){l.miniCssF=function(e){}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="workplace-organization-and-access-vue3:";l.l=function(a,o,n,u){if(e[a])e[a].push(o);else{var r,i;if(void 0!==n)for(var m=document.getElementsByTagName("script"),s=0;s<m.length;s++){var d=m[s];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+n){r=d;break}}r||(i=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,l.nc&&r.setAttribute("nonce",l.nc),r.setAttribute("data-webpack",t+n),r.src=a),e[a]=[o];var c=function(t,l){r.onerror=r.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(e){return e(l)})),t)return t(l)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=c.bind(null,r.onerror),r.onload=c.bind(null,r.onload),i&&document.head.appendChild(r)}}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){l.p="/workplace-organization-and-access-vue3/"}(),function(){var e={143:0};l.f.j=function(t,a){var o=l.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var n=new Promise((function(l,a){o=e[t]=[l,a]}));a.push(o[2]=n);var u=l.p+l.u(t),r=new Error,i=function(a){if(l.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.src;r.message="Loading chunk "+t+" failed.\n("+n+": "+u+")",r.name="ChunkLoadError",r.type=n,r.request=u,o[1](r)}};l.l(u,i,"chunk-"+t,t)}},l.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,n,u=a[0],r=a[1],i=a[2],m=0;if(u.some((function(t){return 0!==e[t]}))){for(o in r)l.o(r,o)&&(l.m[o]=r[o]);if(i)var s=i(l)}for(t&&t(a);m<u.length;m++)n=u[m],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(s)},a=self["webpackChunkworkplace_organization_and_access_vue3"]=self["webpackChunkworkplace_organization_and_access_vue3"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=l.O(void 0,[998],(function(){return l(7055)}));a=l.O(a)})();
//# sourceMappingURL=app.f55e81a4.js.map