"use strict";(self.webpackChunktest_task=self.webpackChunktest_task||[]).push([[111],{9872:(e,a,r)=>{r.d(a,{Z:()=>L});var t=r(2791);const i="AdvertsList_advertsList__AuKQZ";var s=r(5984);const n={advertsItem:"AdvertsItem_advertsItem__t20Mk",imgAdvertWrapp:"AdvertsItem_imgAdvertWrapp__lhj+6",imgAdvert:"AdvertsItem_imgAdvert__Qoprk",iconIsFavorite:"AdvertsItem_iconIsFavorite__VNAHr",iconFavorite:"AdvertsItem_iconFavorite__fquWz",advertCarTitleDescription:"AdvertsItem_advertCarTitleDescription__pkpp1",advertCarModel:"AdvertsItem_advertCarModel__R-9HX",advertCarDescription:"AdvertsItem_advertCarDescription__0HvB1",advertCarDescriptionItem:"AdvertsItem_advertCarDescriptionItem__TJwFn",btnAdvert:"AdvertsItem_btnAdvert__Yyzfx"};var l=r(6689);const c=()=>{const{favorites:e}=(0,l.Z)();return{getCityFromAdress:e=>e.split(",")[1].trim(),getCountryFromAdress:e=>e.split(",")[2].trim(),getRandomAccessory:e=>e[Math.floor(Math.random()*e.length)].split(" ").slice(0,3).join(" "),isFavorite:a=>e.some((e=>e.id===a.id)),convertingSringOnArray:e=>e.split("\n")}};var d=r(4164);const o="ModalWindow_backdrop__Tr-1X",m="ModalWindow_modalContent__9PrUR",v="ModalWindow_iconClose__AASV1";var p=r(71),h=r(3889),_=r(184);const C=document.getElementById("modal-root"),x=e=>{let{handleModalToggle:a,children:r}=e;(0,t.useEffect)((()=>{const e=e=>{"Escape"===e.code&&a()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[a]);return(0,d.createPortal)((0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:o,onClick:e=>{e.currentTarget===e.target&&a()},children:(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)(p.IOM,{className:v,onClick:a}),(0,_.jsx)(h.$B,{style:{width:500,height:650},children:r})]})})}),C)},u={imgAdvertWrap:"ModalDetailedDescriptionCar_imgAdvertWrap__8eaLO",imgAdvert:"ModalDetailedDescriptionCar_imgAdvert__1HMH0",advertCarTitleWrap:"ModalDetailedDescriptionCar_advertCarTitleWrap__J16E+",advertCarModel:"ModalDetailedDescriptionCar_advertCarModel__U1kDY",advertCarDescriptionList:"ModalDetailedDescriptionCar_advertCarDescriptionList__SRhtj",advertCarDescriptionItem:"ModalDetailedDescriptionCar_advertCarDescriptionItem__0fXhk",advertCarDescription:"ModalDetailedDescriptionCar_advertCarDescription__FtJiB",advertCarAccessories:"ModalDetailedDescriptionCar_advertCarAccessories__aUxwq",advertCarAccessoriesList:"ModalDetailedDescriptionCar_advertCarAccessoriesList__BYQ+i",advertCarAccessoriesItem:"ModalDetailedDescriptionCar_advertCarAccessoriesItem__nCH9B",rentalConditionsList:"ModalDetailedDescriptionCar_rentalConditionsList__G-bpN",rentalConditionsItem:"ModalDetailedDescriptionCar_rentalConditionsItem__uGeG1",accentRentalCondition:"ModalDetailedDescriptionCar_accentRentalCondition__qKMLe",rentalCarLink:"ModalDetailedDescriptionCar_rentalCarLink__n8ed5"},g=e=>{let{advert:a}=e;const{id:r,img:t,make:i,model:s,year:n,rentalPrice:l,address:d,type:o,mileage:m,accessories:v,fuelConsumption:p,engineSize:h,description:C,functionalities:x,rentalConditions:g}=a,{getCityFromAdress:j,getCountryFromAdress:M,convertingSringOnArray:N}=c(),A=N(g);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:u.imgAdvertWrap,children:(0,_.jsx)("img",{src:t,alt:"car",className:u.imgAdvert})}),(0,_.jsx)("div",{className:u.advertCarTitleWrap,children:(0,_.jsxs)("p",{className:u.advertCarTitle,children:["".concat(i," "),(0,_.jsx)("span",{className:u.advertCarModel,children:s}),", ".concat(n)]})}),(0,_.jsxs)("ul",{className:u.advertCarDescriptionList,children:[(0,_.jsx)("li",{className:u.advertCarDescriptionItem,children:j(d)}),(0,_.jsx)("li",{className:u.advertCarDescriptionItem,children:M(d)}),(0,_.jsx)("li",{className:u.advertCarDescriptionItem,children:"Id: ".concat(r)}),(0,_.jsx)("li",{className:u.advertCarDescriptionItem,children:"Year: ".concat(n)}),(0,_.jsx)("li",{className:u.advertCarDescriptionItem,children:"Type: ".concat(o)}),(0,_.jsx)("li",{className:u.advertCarDescriptionItem,children:"Fuel Consumption: ".concat(p)}),(0,_.jsx)("li",{className:u.advertCarDescriptionItem,children:"Engine Size: ".concat(h)})]}),(0,_.jsx)("p",{className:u.advertCarDescription,children:C}),(0,_.jsx)("p",{className:u.advertCarAccessories,children:"Accessories and functionalities:"}),(0,_.jsxs)("ul",{className:u.advertCarAccessoriesList,children:[v.map((e=>(0,_.jsx)("li",{className:u.advertCarAccessoriesItem,children:e},e))),x.map((e=>(0,_.jsx)("li",{className:u.advertCarAccessoriesItem,children:e},e)))]}),(0,_.jsx)("p",{className:u.advertCarAccessories,children:"Rental Conditions: "}),(0,_.jsxs)("ul",{className:u.rentalConditionsList,children:[A.map(((e,a)=>{const[r,t]=e.split(": ");return"Minimum age"===r?(0,_.jsxs)("li",{className:u.rentalConditionsItem,children:[r,":\xa0",(0,_.jsx)("span",{className:u.accentRentalCondition,children:t})]},a):(0,_.jsx)("li",{className:u.rentalConditionsItem,children:e},a)})),(0,_.jsxs)("li",{className:u.rentalConditionsItem,children:["Mileage:\xa0",(0,_.jsx)("span",{className:u.accentRentalCondition,children:m.toLocaleString("en-US")})]}),(0,_.jsxs)("li",{className:u.rentalConditionsItem,children:["Price",":","\xa0",(0,_.jsx)("span",{className:u.accentRentalCondition,children:l})]})]}),(0,_.jsx)("a",{href:"tel:+380730000000",className:u.rentalCarLink,children:"Rental car"})]})};var j=r(4373),M=r(9434),N=r(6201);const A=e=>{let{advert:a}=e;const{img:r,make:i,model:s,year:l,rentalPrice:d,address:o,rentalCompany:m,type:v,mileage:p,accessories:h}=a,[C,u]=(0,t.useState)(!1),A=(0,M.I0)(),{getCityFromAdress:D,getCountryFromAdress:I,isFavorite:b}=c(),y=()=>{u((e=>!e))},L=e=>{A((0,N._p)(e))};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("li",{className:n.advertsItem,children:[(0,_.jsxs)("div",{className:n.imgAdvertWrapp,children:[(0,_.jsx)("img",{src:r,alt:"car",className:n.imgAdvert}),b(a)?(0,_.jsx)(j.$g3,{className:"".concat(n.iconIsFavorite," ").concat(n.iconFavorite),onClick:()=>{L(a)}}):(0,_.jsx)(j.AWH,{className:n.iconIsFavorite,onClick:()=>{L(a)}})]}),(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:n.advertCarTitleDescription,children:[(0,_.jsxs)("p",{className:n.advertCarTitle,children:["".concat(i," "),(0,_.jsx)("span",{className:n.advertCarModel,children:s}),", ".concat(l)]}),(0,_.jsx)("p",{className:n.advertCarPrice,children:d})]}),(0,_.jsxs)("ul",{className:n.advertCarDescription,children:[(0,_.jsx)("li",{className:n.advertCarDescriptionItem,children:D(o)}),(0,_.jsx)("li",{className:n.advertCarDescriptionItem,children:I(o)}),(0,_.jsx)("li",{className:n.advertCarDescriptionItem,children:m}),(0,_.jsx)("li",{className:n.advertCarDescriptionItem,children:v}),(0,_.jsx)("li",{className:n.advertCarDescriptionItem,children:i}),(0,_.jsx)("li",{className:n.advertCarDescriptionItem,children:p}),(0,_.jsx)("li",{className:n.advertCarDescriptionItem,children:h[0]})]}),(0,_.jsx)("button",{className:n.btnAdvert,onClick:y,children:"Learn more"})]})]}),C&&(0,_.jsx)(x,{handleModalToggle:y,children:(0,_.jsx)(g,{advert:a})})]})},D=t.memo(A),I="LoadMoreBtn_loadMoreBtnWrap__WxX1E",b="LoadMoreBtn_loadMoreBtn__EJd7v",y=e=>{let{handleLoadMore:a}=e;return(0,_.jsx)("div",{className:I,children:(0,_.jsx)("button",{type:"button",onClick:a,className:b,children:"Load more"})})},L=e=>{let{adverts:a,handleLoadMore:r}=e;const{lengthAdverts:t}=(0,l.Z)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("ul",{className:i,children:null===a||void 0===a?void 0:a.map((e=>(0,_.jsx)(D,{advert:e},(0,s.x0)())))}),12===t&&(0,_.jsx)(y,{handleLoadMore:r})]})}},7237:(e,a,r)=>{r.d(a,{Z:()=>n});r(2791);const t="EmptyList_emptyFavorite__nL4Uz",i="EmptyList_emptyContainer__usicC";var s=r(184);const n=e=>{let{textEmpty:a}=e;return(0,s.jsx)("div",{className:i,children:(0,s.jsx)("div",{className:t,children:a})})}},6689:(e,a,r)=>{r.d(a,{Z:()=>d});var t=r(9434);const i=e=>e.adverts.adverts,s=e=>e.adverts.isLoading,n=e=>e.adverts.error,l=e=>e.adverts.lengthAdverts,c=e=>e.favorites.favorites,d=()=>{const e=(0,t.v9)(i),a=(0,t.v9)(s),r=(0,t.v9)(n),d=(0,t.v9)(l);return{adverts:e,isLoading:a,error:r,favorites:(0,t.v9)(c),lengthAdverts:d}}},4111:(e,a,r)=>{r.r(a),r.d(a,{default:()=>_});var t=r(2791),i=r(9872),s=r(9434),n=r(6677),l=r(6689),c=r(5705);const d={form:"SearchBar_form__gW7Gj",label:"SearchBar_label__4uG7W",input:"SearchBar_input__bIy50",inputBrandWpap:"SearchBar_inputBrandWpap__OvUOQ",inputPriceWpap:"SearchBar_inputPriceWpap__Lk64P",mileageWrap:"SearchBar_mileageWrap__YF+ZA",inputMileage:"SearchBar_inputMileage__Hj8Hb",inputMinMileage:"SearchBar_inputMinMileage__8pGth",searchBtn:"SearchBar_searchBtn__cdWGi"},o=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"]');var m=r(184);const v=e=>{let{onFilter:a}=e;const r=(0,c.TA)({initialValues:{brand:"",price:"",minMileage:"",maxMileage:""},onSubmit:e=>{a(e)}}),t=Array.from({length:20},((e,a)=>30+10*a));return(0,m.jsxs)("form",{onSubmit:r.handleSubmit,className:d.form,children:[(0,m.jsxs)("div",{className:d.inputBrandWpap,children:[(0,m.jsx)("label",{htmlFor:"brand",className:d.label,children:"Car brand"}),(0,m.jsxs)("select",{id:"brand",name:"brand",onChange:r.handleChange,value:r.values.carBrand,className:"".concat(d.input," ").concat(d.inputBrand),children:[(0,m.jsx)("option",{value:"",children:"Enter the text"}),o.map((e=>(0,m.jsx)("option",{value:e,children:e},e)))]})]}),(0,m.jsxs)("div",{className:d.inputPriceWpap,children:[(0,m.jsx)("label",{htmlFor:"price",className:d.label,children:"Price / 1 hour"}),(0,m.jsxs)("select",{id:"price",name:"price",onChange:r.handleChange,value:r.values.carBrand,className:"".concat(d.input),children:[(0,m.jsx)("option",{value:"",children:"To $"}),t.map((e=>(0,m.jsx)("option",{value:e,children:e},e)))]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("label",{htmlFor:"mileage",className:"".concat(d.label),children:"\u0421ar mileage / km"}),(0,m.jsxs)("div",{className:" ".concat(d.mileageWrap),children:[(0,m.jsx)("input",{id:"mileage",name:"minMileage",type:"number",placeholder:"From",onChange:r.handleChange,value:r.values.minMileage,className:"".concat(d.inputMileage," ").concat(d.inputMinMileage)}),(0,m.jsx)("input",{name:"maxMileage",type:"number",placeholder:"To",onChange:r.handleChange,value:r.values.maxMileage,className:"".concat(d.inputMileage)})]})]}),(0,m.jsx)("button",{type:"submit",className:d.searchBtn,children:"Search"})]})};var p=r(7531);var h=r(7237);const _=()=>{const{adverts:e}=(0,l.Z)(),[a,r]=(0,t.useState)({brand:"",maxMileage:"",minMileage:"",price:""}),[c,d]=(0,t.useState)(1),o=(0,s.I0)();(0,t.useEffect)((()=>{1===c&&o((0,p.B)()),o((0,n.B)(c))}),[o,c]);const _=((e,a)=>e.filter((e=>{const r=Number(e.rentalPrice.replace("$","")),t=""===a.price||r<=a.price,i=""===a.brand||a.brand===e.make,s=""===a.maxMileage||a.maxMileage>e.mileage,n=""===a.minMileage||a.minMileage<e.mileage;return i&&t&s&&n})))(e,a);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{onFilter:e=>{let{brand:a,maxMileage:t,minMileage:i,price:s}=e;r((e=>({...e,brand:a,maxMileage:t,minMileage:i,price:s})))}}),_.length>0?(0,m.jsx)(i.Z,{adverts:_,handleLoadMore:()=>{d((e=>e+1))}}):(0,m.jsx)(h.Z,{textEmpty:"We're sorry, but we don't have any cars for the selected parameters. Please try other parameters."})]})}}}]);
//# sourceMappingURL=111.ff879721.chunk.js.map