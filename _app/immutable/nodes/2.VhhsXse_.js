import{s as Ue,t as U,a as T,G as at,d as J,g as G,i as v,j as At,n as Y,f as o,e as g,c as m,b as C,l as S,h,m as N,F as Nt,o as Ut,u as Jt,p as Qt,q as jt,k as mt,a0 as qt,w as de,A as we,y as Kt}from"../chunks/scheduler.8yXm6sNE.js";import{S as Je,i as Qe,c as P,a as F,m as L,t as y,b as w,d as R,g as Me,e as Te}from"../chunks/index.DWLfrfOH.js";import{N as tt}from"../chunks/NotificationLink.C3NMfJp2.js";import{P as Yt}from"../chunks/PageHeader.CpvBuK9z.js";import{e as Ft,t as lt,w as zt,d as it}from"../chunks/width.CQGpMkn5.js";import{w as Xt}from"../chunks/index.Cris5lEi.js";import{T as Zt}from"../chunks/TitleBox.ohHdLc25.js";import{T as he}from"../chunks/TrackedLink.BtP8EGbs.js";import{l as ge}from"../chunks/links.Cbk1EXbF.js";function Lt(n){let e,l,t=n[0].allergies.join(", ")+"",i,a;return{c(){e=g("span"),l=U("("),i=U(t),a=U(")"),this.h()},l(s){e=m(s,"SPAN",{class:!0});var k=C(e);l=J(k,"("),i=J(k,t),a=J(k,")"),k.forEach(o),this.h()},h(){S(e,"class","has-text-grey")},m(s,k){v(s,e,k),h(e,l),h(e,i),h(e,a)},p(s,k){k&1&&t!==(t=s[0].allergies.join(", ")+"")&&At(i,t)},d(s){s&&o(e)}}}function xt(n){let e=n[0].title+"",l,t,i,a=n[1]&&n[0].allergies&&n[0].allergies.length&&Lt(n);return{c(){l=U(e),t=T(),a&&a.c(),i=at()},l(s){l=J(s,e),t=G(s),a&&a.l(s),i=at()},m(s,k){v(s,l,k),v(s,t,k),a&&a.m(s,k),v(s,i,k)},p(s,[k]){k&1&&e!==(e=s[0].title+"")&&At(l,e),s[1]&&s[0].allergies&&s[0].allergies.length?a?a.p(s,k):(a=Lt(s),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},i:Y,o:Y,d(s){s&&(o(l),o(t),o(i)),a&&a.d(s)}}}function el(n,e,l){let{option:t}=e,{showAllergies:i}=e;return n.$$set=a=>{"option"in a&&l(0,t=a.option),"showAllergies"in a&&l(1,i=a.showAllergies)},[t,i]}class Wt extends Je{constructor(e){super(),Qe(this,e,el,xt,Ue,{option:0,showAllergies:1})}}function Rt(n,e,l){const t=n.slice();return t[7]=e[l],t}function tl(n){let e,l='<li class="pb-2">Full English Breakfast</li> <li class="pb-2">Includes vegan sausage option</li>';return{c(){e=g("ul"),e.innerHTML=l},l(t){e=m(t,"UL",{"data-svelte-h":!0}),N(e)!=="svelte-18buf54"&&(e.innerHTML=l)},m(t,i){v(t,e,i)},p:Y,i:Y,o:Y,d(t){t&&o(e)}}}function ll(n){let e,l="Mains",t,i,a,s,k,f=Ft(n[0].mains),u=[];for(let r=0;r<f.length;r+=1)u[r]=Dt(Rt(n,f,r));const $=r=>w(u[r],1,1,()=>{u[r]=null});let c=n[0].dessert&&It(n);return{c(){e=g("h5"),e.textContent=l,t=T(),i=g("ul");for(let r=0;r<u.length;r+=1)u[r].c();a=T(),c&&c.c(),s=at()},l(r){e=m(r,"H5",{"data-svelte-h":!0}),N(e)!=="svelte-18uyqs"&&(e.textContent=l),t=G(r),i=m(r,"UL",{});var p=C(i);for(let d=0;d<u.length;d+=1)u[d].l(p);p.forEach(o),a=G(r),c&&c.l(r),s=at()},m(r,p){v(r,e,p),v(r,t,p),v(r,i,p);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(i,null);v(r,a,p),c&&c.m(r,p),v(r,s,p),k=!0},p(r,p){if(p&3){f=Ft(r[0].mains);let d;for(d=0;d<f.length;d+=1){const B=Rt(r,f,d);u[d]?(u[d].p(B,p),y(u[d],1)):(u[d]=Dt(B),u[d].c(),y(u[d],1),u[d].m(i,null))}for(Me(),d=f.length;d<u.length;d+=1)$(d);Te()}r[0].dessert?c?(c.p(r,p),p&1&&y(c,1)):(c=It(r),c.c(),y(c,1),c.m(s.parentNode,s)):c&&(Me(),w(c,1,1,()=>{c=null}),Te())},i(r){if(!k){for(let p=0;p<f.length;p+=1)y(u[p]);y(c),k=!0}},o(r){u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)w(u[p]);w(c),k=!1},d(r){r&&(o(e),o(t),o(i),o(a),o(s)),Nt(u,r),c&&c.d(r)}}}function Dt(n){let e,l,t,i;return l=new Wt({props:{option:n[7],showAllergies:n[1]}}),{c(){e=g("li"),P(l.$$.fragment),t=T(),this.h()},l(a){e=m(a,"LI",{class:!0});var s=C(e);F(l.$$.fragment,s),t=G(s),s.forEach(o),this.h()},h(){S(e,"class","pb-2")},m(a,s){v(a,e,s),L(l,e,null),h(e,t),i=!0},p(a,s){const k={};s&1&&(k.option=a[7]),s&2&&(k.showAllergies=a[1]),l.$set(k)},i(a){i||(y(l.$$.fragment,a),i=!0)},o(a){w(l.$$.fragment,a),i=!1},d(a){a&&o(e),R(l)}}}function It(n){let e,l="Dessert",t,i,a,s,k;return s=new Wt({props:{option:n[0].dessert,showAllergies:n[1]}}),{c(){e=g("h5"),e.textContent=l,t=T(),i=g("ul"),a=g("li"),P(s.$$.fragment)},l(f){e=m(f,"H5",{"data-svelte-h":!0}),N(e)!=="svelte-1ikw68s"&&(e.textContent=l),t=G(f),i=m(f,"UL",{});var u=C(i);a=m(u,"LI",{});var $=C(a);F(s.$$.fragment,$),$.forEach(o),u.forEach(o)},m(f,u){v(f,e,u),v(f,t,u),v(f,i,u),h(i,a),L(s,a,null),k=!0},p(f,u){const $={};u&1&&($.option=f[0].dessert),u&2&&($.showAllergies=f[1]),s.$set($)},i(f){k||(y(s.$$.fragment,f),k=!0)},o(f){w(s.$$.fragment,f),k=!1},d(f){f&&(o(e),o(t),o(i)),R(s)}}}function il(n){let e,l,t,i;const a=[ll,tl],s=[];function k(f,u){return f[0]?0:1}return l=k(n),t=s[l]=a[l](n),{c(){e=g("div"),t.c(),this.h()},l(f){e=m(f,"DIV",{class:!0});var u=C(e);t.l(u),u.forEach(o),this.h()},h(){S(e,"class","content")},m(f,u){v(f,e,u),s[l].m(e,null),i=!0},p(f,u){let $=l;l=k(f),l===$?s[l].p(f,u):(Me(),w(s[$],1,1,()=>{s[$]=null}),Te(),t=s[l],t?t.p(f,u):(t=s[l]=a[l](f),t.c()),y(t,1),t.m(e,null))},i(f){i||(y(t),i=!0)},o(f){w(t),i=!1},d(f){f&&o(e),s[l].d()}}}function al(n){let e,l;return e=new Zt({props:{header:n[3],alongside:n[2](),infoLink:"/resources?search=Meal%20Times",$$slots:{default:[il]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,i){L(e,t,i),l=!0},p(t,[i]){const a={};i&8&&(a.header=t[3]),i&4&&(a.alongside=t[2]()),i&1027&&(a.$$scope={dirty:i,ctx:t}),e.$set(a)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function sl(n,e,l){let t,i,a,{type:s}=e,{data:k=null}=e,{dayOfWeek:f}=e,{showAllergies:u}=e;return n.$$set=$=>{"type"in $&&l(4,s=$.type),"data"in $&&l(0,k=$.data),"dayOfWeek"in $&&l(5,f=$.dayOfWeek),"showAllergies"in $&&l(1,u=$.showAllergies)},n.$$.update=()=>{n.$$.dirty&32&&l(6,t=f==0||f==6),n.$$.dirty&80&&l(3,i={lunch:t?"🍳 Brunch":"🥪 Lunch",dinner:"🍕 Dinner"}[s]),n.$$.dirty&48&&l(2,a=()=>s==="lunch"?f==6?"11:00-12:30":f==0?"10:30-12:00":"12:00-13:45":"17:50-19:00")},[k,u,a,i,s,f,t]}class pt extends Je{constructor(e){super(),Qe(this,e,sl,al,Ue,{type:4,data:0,dayOfWeek:5,showAllergies:1})}}const nl="2024-10-07T00:00:00.238Z",rl=[{weekend:!1,lunch:{mains:[{title:"Leek & Potato Soup",allergies:["Celery"]},{title:"Cajun Spiced Chicken Breast, Vegetable Bayou Sauce",allergies:["Celery"]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Grilled Aubergine, Spinach and Garlic Mushroom, Smoked Cheese and Mozzarella",allergies:["Milk","Gluten"]},{title:"Chilli, Lime, Chickpea and Cauliflower Flatbread, Pickled Red Onions",allergies:["Gluten","Sulphites"]},{title:"Mixed Pepper, Olive, Tomato & Basil Pasta",allergies:["Gluten","Sulphites"]}]},dinner:{mains:[{title:"BBQ Chicken With Cheddar and Bacon",allergies:["Milk","Mustard"]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Black Bean, Cheddar & Mozzarella Quesadilla, Créme Fraiche, Guacamole & Salsa",allergies:["Gluten","Milk"]},{title:"Vegetable & Mushroom Bolognese",allergies:["Celery","Soya"]},{title:"Pizza and Fries",allergies:[]}]}},{weekend:!1,lunch:{mains:[{title:"Spicy Mixed Bean & Vegetable Soup",allergies:["Celery"]},{title:"Beef Lasagne",allergies:["Gluten","Milk","Celery","Sulphites"]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Cheddar, Onion, Sundried Tomato & Spinach Pasty",allergies:["Milk","Gluten","Egg"]},{title:"Mushroom & Artichoke Stroganoff",allergies:["Celery"]},{title:"Pasta Carbonara with Smoked Bacon and Mushroom",allergies:["Gluten","Milk","Sulphites"]}]},dinner:{mains:[{title:"Bacon Cheeseburger, Burger Sauce, Gherkins, Tomato & Onion",allergies:["Gluten","Milk","Mustard","Celery","Sulphites"]},{title:"Fish of The Day",allergies:[]},{title:"Breaded Halloumi, BBQ Sauce, Peppers, Olives & Roasted Spiced Chickpeas",allergies:["Milk","Gluten","Mustard","Sulphites"]},{title:"Southern Fried Vegan Nuggets, BBQ Beans, Sweet & Sour Slaw",allergies:["Gluten","Soya","Mustard","Sulphites"]},{title:"Pizza and Fries",allergies:["Gluten"]}]}},{weekend:!1,lunch:{mains:[{title:"Tomato & Roasted Red Pepper Soup",allergies:["Celery"]},{title:"Lemon Pepper Pork Schnitzel, Fresh Lemon",allergies:["Gluten","Egg"]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Roasted Squash, Sauteed Mushroom, Chickpeas and Cherry Tomatoes on Sourdough",allergies:["Gluten","Milk"]},{title:"Sticky Tofu & Broccoli Stir Fry with Chilli and Soya Sauce",allergies:["Celery","Soya"]},{title:"Lemon and Black Pepper Sauteed Mushroom Pasta with Red Onions",allergies:["Gluten"]}]},dinner:{mains:[{title:"Lamb Kofta Flatbread, Sumac Red Onion Slaw, Garlic & Lemon Yoghurt",allergies:["Milk","Sulphites"]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Spinach & Ricotta Ravioli In A Tomato, Basil and Parmesan Sauce",allergies:["Gluten","Egg","Milk"]},{title:"Warm Falafel and Mint Wrap With Sauteed Red Onions and Mixed Peppers",allergies:["Gluten","Sulphites"]},{title:"Pizza and Fries",allergies:["Gluten"]}]}},{weekend:!1,lunch:{mains:[{title:"Mushroom & Dill Soup",allergies:["Celery"]},{title:"Lamb Bhuna with Naan Bread",allergies:["Gluten","Mustard"]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Pumpkin Ravioli, Squash Cream and a Sage Gratin",allergies:["Gluten","Milk","Egg","Celery"]},{title:"Red Thai Coconut Curry with Tempeh and Baby Corn",allergies:["Soya","Sesame","Celery"]},{title:"Basil Pesto, Cherry Tomato and Halloumi Penne Pasta",allergies:["Gluten","Milk"]}]},dinner:{mains:[{title:"Buttermilk Fried Chicken Burger With Ranch Dressing, Onion, Tomato & Lettuce",allergies:["Gluten","Egg","Milk"]},{title:"Crispy Tofu With Spicy Hoisin Vegetables & Egg Noodles, Spring Onions",allergies:["Gluten","Egg","Soya"]},{title:"Jacket Potato Filled With Bean & Vegetable Chilli, Red Onion, Lime & Coriander",allergies:["Celery","Sulphites"]},{title:"Pizza and Fries",allergies:["Gluten"]}]}},{weekend:!1,lunch:{mains:[{title:"Sweetcorn Chowder Soup",allergies:["Celery"]},{title:"French Onion Chicken Thighs",allergies:["Gluten","Milk","Sulphites","Celery"]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Leek, Mushroom and Spinach Lasagne with Goats' Cheese and Mozzarella (Gluten, Milk, Mustard",allergies:[]},{title:"Crispy Tofu, Sesame Fried Rice, Vegetable Spring Roll",allergies:["Soya","Gluten","Sesame"]},{title:"Lentil and Mushroom Ragu with Macaroni Pasta",allergies:["Gluten","Celery"]}]},dinner:{mains:[{title:"Flavours of the World - Chinese Night",allergies:[]},{title:"Chicken Sweet and Sour",allergies:["Celery","Sulphites","Soya"]},{title:"Chinese Style BBQ Ribs",allergies:["Soya","Celery"]},{title:"Kung Pao Tofu",allergies:["Soya","Sesame","Peanuts"]},{title:"Sichuanese Aubergine",allergies:["Soya"]},{title:"Sides: Chow Mein, Onion Fried Rice, Egg Fried Rice, Spring Rolls, Bao Buns",allergies:["Egg","Sesame","Soya","Soya","Egg","Soya","Gluten","Soya","Gluten"]},{title:"Prawn Crackers",allergies:["Sulphites","Crustaceans"]},{title:"Chinese Fortune Cake",allergies:["Gluten"]}]}},{weekend:!0,dinner:{mains:[{title:"Honey Mustard Pulled Pork Pretzel Bun, Apple Slaw and Crispy Onions",allergies:["Mustard","Sulphites","Gluten"]},{title:"Battered Fish & Chips Lemon & Tartar Sauce",allergies:["Fish","Gluten","Egg","Mustard","Sulphites"]},{title:"Vegetable Spring Roll, & Egg Fried Rice, Soy Sauce",allergies:["Gluten","Sesame","Soya","Egg"]},{title:"Vegan Kofta Kebab Flatbread, Minted Yoghurt, Pickled Red Onion, Diced Tomato, Lime & Fresh Coriander",allergies:["Gluten","Soya"]},{title:"Pizza and Fries",allergies:["Gluten"]}]}},{weekend:!0,dinner:{mains:[{title:"Roast Turkey Breast With Herbs & Smoked Paprika, Sage & Onion Stuffing, Gravy & Yorkshire Pudding",allergies:["Gluten","Egg","Milk"]},{title:"Roasted Vegetable Lasagne, Mozzarella & Parmesan Cheese",allergies:["Gluten","Milk"]},{title:"Vegan Lentil Cottage Pie",allergies:["Celery"]},{title:"Pizza and Fries",allergies:["Gluten"]}]}},{weekend:!1,lunch:{mains:[{title:"Curried Parsnip Soup",allergies:["Celery"]},{title:"Breaded Chicken, Garlic Parsley Butter",allergies:["Gluten","Milk","Egg"]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Sweet Potato, Balsamic Red Onion & Parmesan Tart",allergies:["Gluten","Egg","Sulphites","Milk"]},{title:"Miso Vegetable & Onion Galette",allergies:["Gluten","Soya"]},{title:"Macaroni Cheese",allergies:["Gluten","Milk","Mustard"]}]},dinner:{mains:[{title:"Harissa Spiced Lamb Cottage Pie, Sweet Potato and Chilli",allergies:["Celery","Milk"]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Quorn Tikka Marsala, Naan Bread, Vegetable Samosa",allergies:["Gluten","Egg","Soya","Milk"]},{title:"Moving Mountain Burger, Burger Sauce, Onion, Tomato & Gherkins",allergies:["Gluten","Soya","Sulphites","Mustard","Celery"]},{title:"Pizza and Fries",allergies:[]}]}},{weekend:!1,lunch:{mains:[{title:"Spiced Squash with Maple & Sage Soup",allergies:["Celery"]},{title:"Cuban Mojo Pork with Orange, Garlic & Oregano",allergies:[]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Vegetable Goulash, New Potatoes",allergies:["Celery","Sulphites"]},{title:"Spinach & Sweet Potato Dahl",allergies:["Mustard"]},{title:"Tomato, Chilli & Bean Pasta",allergies:["Gluten","Sulphites"]}]},dinner:{mains:[{title:"Smoky BBQ Chicken Wings",allergies:["Mustard"]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Vegetable & Red Lentil Moussaka",allergies:["Milk","Egg"]},{title:"Crispy Tofu With Sweet & Spicy Chilli Glaze, Spring Onions & Sesame Seeds",allergies:["Soya","Sesame"]},{title:"Pizza and Fries",allergies:[]}]}},{weekend:!1,lunch:{mains:[{title:"Hot & Sour Broth Soup",allergies:["Celery","Soya"]},{title:"Turkey, Leek & Sage Pie",allergies:["Gluten","Milk","Mustard","Celery","Sulphites"]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Roasted Winter Vegetable & Feta Pie with Coriander & Fennel Seeds",allergies:["Gluten","Egg","Milk"]},{title:"Cajun Vegetable & Bean Flatbread Red Onions, Chilli & Coriander",allergies:["Gluten","Soya"]},{title:"Ratatouille, Basil, Parmesan Pasta",allergies:["Gluten","Milk"]}]},dinner:{mains:[{title:"Chilli Dog With Onions & Mozzarella",allergies:["Gluten","Milk","Celery"]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Spinach & Ricotta Cannelloni, Tomato and Mushroom Sauce",allergies:["Gluten","Milk","Egg"]},{title:"Jamaican Lentil Patties, Pineapple Chutney",allergies:["Soya","Sulphites"]},{title:"Pizza and Fries",allergies:[]}]}},{weekend:!1,lunch:{mains:[{title:"Honey Roasted Winter Vegetable Soup",allergies:["Celery"]},{title:"Harissa Honey Chicken",allergies:["Sulphites"]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Cauliflower Cheese, Roast Celeriac and Gnocchi Gratin",allergies:["Gluten","Egg Milk","Mustard"]},{title:"Hoisin Tempeh, Cashew & Vegetable Stir Fry",allergies:["Celery","Soya","Nuts"]},{title:"Cheese & Bacon Pasta Gratin",allergies:["Gluten","Milk"]}]},dinner:{mains:[{title:"Cajun Grilled Chicken Burger, Jalapeno Lime Mayonnaise, Lettuce, Onion & Tomato",allergies:["Gluten","Egg","Sulphites"]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Halloumi, Ratatouille & Mixed Olive Flatbread With Basil Pesto",allergies:["Milk","Gluten","Sulphites"]},{title:"Vegan Schnitzel Burger Roasted Red Pepper Tartar Sauce, Salad Garnish, Pretzel Bun",allergies:["Gluten","Mustard ","Soya","Sulphites"]},{title:"Pizza and Fries",allergies:[]}]}},{weekend:!1,lunch:{mains:[{title:"Cauliflower, Celeriac & Thyme Soup",allergies:["Celery"]},{title:"Beef, Button Mushroom & Potato Casserole",allergies:["Celery","Gluten","Sulphites"]},{title:"Fish of The Day",allergies:["TBC"]},{title:"Goats' Cheese and Caramelised Onion Quiche",allergies:["Milk","Gluten","Egg"]},{title:"Vegan Cottage Pie",allergies:["Soya","Celery"]},{title:"Penne with a Garlic Mushroom Cream",allergies:["Gluten","Milk","Sulphites"]}]},dinner:{mains:[{title:"Flavours of the World - British Pub Night Steak and Ale Pie",allergies:[]},{title:"Steak and Ale Pie",allergies:["Gluten","Egg","Milk","Fish","Sulphites","Celery"]},{title:"Sausages With Red Onion Gravy",allergies:["Gluten","Sulphites","Celery"]},{title:"Battered Fish Goujons",allergies:["Gluten","Fish"]},{title:"Curried Vegetable Pie",allergies:["Gluten","Milk","Egg"]},{title:"Vegan Sausages With Red Onion Gravy",allergies:["Gluten","Sulphites","Celery"]},{title:"Prawn Cocktail",allergies:["Crustaceans","Fish","Egg","Celery","Sulphites"]},{title:"Sides: Mushy Peas, Mashed Potatoes, Hand Cut Chips, Peas and Carrots",allergies:["Milk"]},{title:"Dessert: Sticky Toffee Pudding, Toffee Sauce",allergies:["Gluten","Egg","Milk"]}]}},{weekend:!0,dinner:{mains:[{title:"Bao Buns With Teriyaki Beef & Vegetable Slaw, Fresh Coriander  Battered Fish & Chips Lemon & Tartar Sauce",allergies:["Gluten","Soya"]},{title:"Battered Fish & Chips, Lemon & Tartar Sause",allergies:["Fish","Gluten","Egg","Mustard","Sulphites"]},{title:"Aubergine Parmigiana Tomato Sauce, Parmesan Cheese",allergies:["Gluten","Egg","Milk"]},{title:"Vegan Chilli Dogs With Crispy Onions, Coriander Mayonnaise",allergies:["Gluten","Soya","Celery","Mustard"]},{title:"Pizza and Fries",allergies:[]}]}},{weekend:!0,dinner:{mains:[{title:"Roast Pork Loin, Apple Sauce, Gravy & Yorkshire Pudding",allergies:["Celery","Gluten","Egg","Milk"]},{title:"Cheese, Onion & Spinach Wellington With Lentil Gravy",allergies:["Gluten","Milk"]},{title:"Tofu Stir Fry Ginger Soy Sesame Sauce",allergies:["Soya","Sesame"]},{title:"Pizza and Fries",allergies:[]}]}}],Ot={start:nl,days:rl};function ol(n){let e,l=`<div class="message-header"><p>Menu Unavailable!</p></div> <div class="message-body">Menu is only available during term time, and after the
                    intranet has been updated. You can still view the meal times <a href="/resources?search=Meal%20Times" class="has-text-link">here</a>.</div>`;return{c(){e=g("article"),e.innerHTML=l,this.h()},l(t){e=m(t,"ARTICLE",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-90pdht"&&(e.innerHTML=l),this.h()},h(){S(e,"class","message is-gray")},m(t,i){v(t,e,i)},p:Y,i:Y,o:Y,d(t){t&&o(e)}}}function ul(n){let e,l,t,i,a,s,k;const f=[fl,cl],u=[];function $(c,r){return c[2].weekend===!0?0:1}return l=$(n),t=u[l]=f[l](n),s=new pt({props:{type:"dinner",data:n[2].dinner,dayOfWeek:n[1],showAllergies:n[0]}}),{c(){e=g("div"),t.c(),i=T(),a=g("div"),P(s.$$.fragment),this.h()},l(c){e=m(c,"DIV",{class:!0});var r=C(e);t.l(r),r.forEach(o),i=G(c),a=m(c,"DIV",{class:!0});var p=C(a);F(s.$$.fragment,p),p.forEach(o),this.h()},h(){S(e,"class","column"),S(a,"class","column")},m(c,r){v(c,e,r),u[l].m(e,null),v(c,i,r),v(c,a,r),L(s,a,null),k=!0},p(c,r){let p=l;l=$(c),l===p?u[l].p(c,r):(Me(),w(u[p],1,1,()=>{u[p]=null}),Te(),t=u[l],t?t.p(c,r):(t=u[l]=f[l](c),t.c()),y(t,1),t.m(e,null));const d={};r&4&&(d.data=c[2].dinner),r&2&&(d.dayOfWeek=c[1]),r&1&&(d.showAllergies=c[0]),s.$set(d)},i(c){k||(y(t),y(s.$$.fragment,c),k=!0)},o(c){w(t),w(s.$$.fragment,c),k=!1},d(c){c&&(o(e),o(i),o(a)),u[l].d(),R(s)}}}function cl(n){let e,l;return e=new pt({props:{type:"lunch",data:n[2].lunch,dayOfWeek:n[1],showAllergies:n[0]}}),{c(){P(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,i){L(e,t,i),l=!0},p(t,i){const a={};i&4&&(a.data=t[2].lunch),i&2&&(a.dayOfWeek=t[1]),i&1&&(a.showAllergies=t[0]),e.$set(a)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function fl(n){let e,l;return e=new pt({props:{type:"lunch",dayOfWeek:n[1],showAllergies:n[0]}}),{c(){P(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,i){L(e,t,i),l=!0},p(t,i){const a={};i&2&&(a.dayOfWeek=t[1]),i&1&&(a.showAllergies=t[0]),e.$set(a)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function dl(n){let e,l,t,i,a,s;const k=[ul,ol],f=[];function u(r,p){return r[2]!=null?0:1}t=u(n),i=f[t]=k[t](n);const $=n[8].default,c=Ut($,n,n[7],null);return{c(){e=g("div"),l=g("div"),i.c(),a=T(),c&&c.c(),this.h()},l(r){e=m(r,"DIV",{class:!0});var p=C(e);l=m(p,"DIV",{class:!0});var d=C(l);i.l(d),a=G(d),c&&c.l(d),d.forEach(o),p.forEach(o),this.h()},h(){S(l,"class","columns m-1 is-variable is-3"),S(e,"class","block")},m(r,p){v(r,e,p),h(e,l),f[t].m(l,null),h(l,a),c&&c.m(l,null),s=!0},p(r,[p]){let d=t;t=u(r),t===d?f[t].p(r,p):(Me(),w(f[d],1,1,()=>{f[d]=null}),Te(),i=f[t],i?i.p(r,p):(i=f[t]=k[t](r),i.c()),y(i,1),i.m(l,a)),c&&c.p&&(!s||p&128)&&Jt(c,$,r,r[7],s?jt($,r[7],p,null):Qt(r[7]),null)},i(r){s||(y(i),y(c,r),s=!0)},o(r){w(i),w(c,r),s=!1},d(r){r&&o(e),f[t].d(),c&&c.d(r)}}}function hl(n,e,l){let t,i,a,s,{$$slots:k={},$$scope:f}=e,{increment:u}=e,{showAllergies:$}=e;const c={start:new Date(Ot.start),days:Ot.days};function r(){let d=new Date;return d.setDate(d.getDate()+u),d}const p=Xt(r());return mt(n,p,d=>l(6,s=d)),setInterval(()=>qt(p,s=r(),s),1e3),n.$$set=d=>{"increment"in d&&l(4,u=d.increment),"showAllergies"in d&&l(0,$=d.showAllergies),"$$scope"in d&&l(7,f=d.$$scope)},n.$$.update=()=>{n.$$.dirty&64&&l(5,t=Math.floor((s.getTime()-c.start.getTime())/(1e3*3600*24))),n.$$.dirty&32&&l(2,i=t>=0&&t<c.days.length?c.days[t]:null),n.$$.dirty&64&&l(1,a=s.getDay())},[$,a,i,p,u,t,s,f,k]}class Ht extends Je{constructor(e){super(),Qe(this,e,hl,dl,Ue,{increment:4,showAllergies:0})}}function gl(n){let e,l,t;return l=new Ht({props:{increment:1,showAllergies:n[1]}}),{c(){e=g("div"),P(l.$$.fragment)},l(i){e=m(i,"DIV",{});var a=C(e);F(l.$$.fragment,a),a.forEach(o)},m(i,a){v(i,e,a),L(l,e,null),t=!0},p(i,a){const s={};a&2&&(s.showAllergies=i[1]),l.$set(s)},i(i){t||(y(l.$$.fragment,i),t=!0)},o(i){w(l.$$.fragment,i),t=!1},d(i){i&&o(e),R(l)}}}function ml(n){let e,l,t;return l=new Ht({props:{increment:0,showAllergies:n[1]}}),{c(){e=g("div"),P(l.$$.fragment)},l(i){e=m(i,"DIV",{});var a=C(e);F(l.$$.fragment,a),a.forEach(o)},m(i,a){v(i,e,a),L(l,e,null),t=!0},p(i,a){const s={};a&2&&(s.showAllergies=i[1]),l.$set(s)},i(i){t||(y(l.$$.fragment,i),t=!0)},o(i){w(l.$$.fragment,i),t=!1},d(i){i&&o(e),R(l)}}}function pl(n){let e,l,t,i='<a role="none" rel="external">Today</a>',a,s,k='<a rel="external">Tomorrow</a>',f,u,$,c,r,p,d,B,me="<b>Show Allergens</b>",pe,A,q,z,W,X,Q;const Ge=[ml,gl],H=[];function D(b,E){return b[0]?0:1}return u=D(n),$=H[u]=Ge[u](n),{c(){e=g("div"),l=g("ul"),t=g("li"),t.innerHTML=i,a=T(),s=g("li"),s.innerHTML=k,f=T(),$.c(),c=T(),r=g("div"),p=g("div"),d=g("label"),B=g("p"),B.innerHTML=me,pe=T(),A=g("input"),q=T(),z=g("label"),this.h()},l(b){e=m(b,"DIV",{class:!0});var E=C(e);l=m(E,"UL",{});var I=C(l);t=m(I,"LI",{role:!0,"data-svelte-h":!0}),N(t)!=="svelte-1fg9ieh"&&(t.innerHTML=i),a=G(I),s=m(I,"LI",{role:!0,"data-svelte-h":!0}),N(s)!=="svelte-gig8ch"&&(s.innerHTML=k),I.forEach(o),E.forEach(o),f=G(b),$.l(b),c=G(b),r=m(b,"DIV",{class:!0});var Ee=C(r);p=m(Ee,"DIV",{class:!0});var Se=C(p);d=m(Se,"LABEL",{class:!0});var O=C(d);B=m(O,"P",{class:!0,"data-svelte-h":!0}),N(B)!=="svelte-1rfkcr1"&&(B.innerHTML=me),pe=G(O),A=m(O,"INPUT",{id:!0,type:!0,class:!0}),q=G(O),z=m(O,"LABEL",{for:!0}),C(z).forEach(o),O.forEach(o),Se.forEach(o),Ee.forEach(o),this.h()},h(){S(t,"role","button"),de(t,"is-active",n[0]),S(s,"role","button"),de(s,"is-active",!n[0]),S(e,"class","tabs"),de(e,"is-centered",n[2]<=lt.max),de(e,"is-fullwidth",n[2]<=lt.max),S(B,"class","has-text-centered"),S(A,"id","modeSwitch"),S(A,"type","checkbox"),S(A,"class","switch"),S(z,"for","modeSwitch"),S(d,"class","field"),S(p,"class","column has-text-centered"),S(r,"class","columns is-centered mt-2")},m(b,E){v(b,e,E),h(e,l),h(l,t),h(l,a),h(l,s),v(b,f,E),H[u].m(b,E),v(b,c,E),v(b,r,E),h(r,p),h(p,d),h(d,B),h(d,pe),h(d,A),A.checked=n[1],h(d,q),h(d,z),W=!0,X||(Q=[we(t,"click",n[3]),we(t,"keypress",n[4]),we(s,"click",n[5]),we(s,"keypress",n[6]),we(A,"click",n[7]),we(A,"change",n[8])],X=!0)},p(b,[E]){(!W||E&1)&&de(t,"is-active",b[0]),(!W||E&1)&&de(s,"is-active",!b[0]),(!W||E&4)&&de(e,"is-centered",b[2]<=lt.max),(!W||E&4)&&de(e,"is-fullwidth",b[2]<=lt.max);let I=u;u=D(b),u===I?H[u].p(b,E):(Me(),w(H[I],1,1,()=>{H[I]=null}),Te(),$=H[u],$?$.p(b,E):($=H[u]=Ge[u](b),$.c()),y($,1),$.m(c.parentNode,c)),E&2&&(A.checked=b[1])},i(b){W||(y($),W=!0)},o(b){w($),W=!1},d(b){b&&(o(e),o(f),o(c),o(r)),H[u].d(b),X=!1,Kt(Q)}}}function _l(n,e,l){let t;mt(n,zt,r=>l(2,t=r));let i=!0,a=!1;const s=()=>l(0,i=!0),k=()=>l(0,i=!0),f=()=>l(0,i=!1),u=()=>l(0,i=!1),$=()=>{a||window.alert("Allergy information is retrieved from the College Intranet, but the JCR cannot guarantee it is accurate or up-to-date. Always make sure to double-check with the catering staff.")};function c(){a=this.checked,l(1,a)}return[i,a,t,s,k,f,u,$,c]}class kl extends Je{constructor(e){super(),Qe(this,e,_l,pl,Ue,{})}}function Vt(n){let e,l,t;return{c(){e=g("br"),l=T(),t=g("br")},l(i){e=m(i,"BR",{}),l=G(i),t=m(i,"BR",{})},m(i,a){v(i,e,a),v(i,l,a),v(i,t,a)},d(i){i&&(o(e),o(l),o(t))}}}function $l(n){let e;return{c(){e=U("Menu")},l(l){e=J(l,"Menu")},m(l,t){v(l,e,t)},d(l){l&&o(e)}}}function Cl(n){let e;return{c(){e=U("Meal booking")},l(l){e=J(l,"Meal booking")},m(l,t){v(l,e,t)},d(l){l&&o(e)}}}function Sl(n){let e;return{c(){e=U("Room booking")},l(l){e=J(l,"Room booking")},m(l,t){v(l,e,t)},d(l){l&&o(e)}}}function vl(n){let e;return{c(){e=U("Fault reporting")},l(l){e=J(l,"Fault reporting")},m(l,t){v(l,e,t)},d(l){l&&o(e)}}}function yl(n){let e;return{c(){e=U("+44 1223 334900")},l(l){e=J(l,"+44 1223 334900")},m(l,t){v(l,e,t)},d(l){l&&o(e)}}}function bl(n){let e;return{c(){e=U("porters@christs.cam.ac.uk")},l(l){e=J(l,"porters@christs.cam.ac.uk")},m(l,t){v(l,e,t)},d(l){l&&o(e)}}}function wl(n){let e;return{c(){e=U("Unified JCR Funding Form")},l(l){e=J(l,"Unified JCR Funding Form")},m(l,t){v(l,e,t)},d(l){l&&o(e)}}}function Ml(n){let e;return{c(){e=U("Flexible Grant 2023/24")},l(l){e=J(l,"Flexible Grant 2023/24")},m(l,t){v(l,e,t)},d(l){l&&o(e)}}}function Tl(n){let e,l,t,i,a,s,k,f,u,$,c,r,p,d,B,me,pe,A,q,z,W,X,Q,Ge="Quick Links",H,D,b,E,I,Ee="Food",Se,O,Be,Z,st,Pe,x,nt,ve,ee,_e,_t="Facilities",rt,te,Fe,le,ot,Le,ie,ut,ye,ae,ke,kt="Porters",ct,se,Re,ne,ft,De,re,dt,be,oe,$e,$t="Finance",ht,ue,Ie,ce,gt,Oe,fe,Ve;t=new tt({props:{href:"/about/committee",title:"The Committee 🐐",content:"Get to know the current members of the JCR Committee!"}}),s=new tt({props:{href:"/get-involved/freshers",title:"Freshers 🐣",content:"View the freshers' timetable, see what's on at Upper Hall, and find your way about with a map of Christ's!"}}),u=new tt({props:{href:"/resources",title:"Resources 🔗",content:"Explore an instantly searchable list of college, university, and welfare related resources!"}}),p=new kl({});let V=n[0]>it.min&&Vt();return z=new tt({props:{href:"/get-involved/feedback",title:"Feedback Form ✍️",content:`If you want to provide feedback, suggestions, or general problems for the JCR to consider, please use this form! 
                    The JCR is there to work for you, so any and all feedback is welcome.`,grey:!0}}),Z=new he({props:{href:ge.meals.UPPER_HALL_MENU,id:"intranet-menu",external:!0,$$slots:{default:[$l]},$$scope:{ctx:n}}}),x=new he({props:{href:ge.meals.MEAL_BOOKING,id:"meal-booking",external:!0,$$slots:{default:[Cl]},$$scope:{ctx:n}}}),le=new he({props:{href:ge.facilities.ROOM_BOOKING,id:"room-booking",external:!0,$$slots:{default:[Sl]},$$scope:{ctx:n}}}),ie=new he({props:{href:ge.facilities.FAULT_REPORTING,id:"fault-reporting",external:!0,$$slots:{default:[vl]},$$scope:{ctx:n}}}),ne=new he({props:{href:ge.contacts.PORTERS_PHONE,id:"phone-porters",$$slots:{default:[yl]},$$scope:{ctx:n}}}),re=new he({props:{href:ge.contacts.PORTERS_EMAIL,id:"email-porters",$$slots:{default:[bl]},$$scope:{ctx:n}}}),ce=new he({props:{href:ge.finance.JCR_FUNDING_REQUEST_FORM,id:"JCR-funding-form",external:!0,$$slots:{default:[wl]},$$scope:{ctx:n}}}),fe=new he({props:{href:ge.finance.FLEXIBLE_GRANT,id:"flexible-grant",external:!0,$$slots:{default:[Ml]},$$scope:{ctx:n}}}),{c(){e=g("div"),l=g("div"),P(t.$$.fragment),i=T(),a=g("div"),P(s.$$.fragment),k=T(),f=g("div"),P(u.$$.fragment),$=T(),c=g("div"),r=g("div"),P(p.$$.fragment),d=T(),B=g("div"),V&&V.c(),me=T(),pe=g("br"),A=T(),q=g("div"),P(z.$$.fragment),X=T(),Q=g("h2"),Q.textContent=Ge,H=T(),D=g("div"),b=g("div"),E=g("div"),I=g("subtitle"),I.textContent=Ee,Se=T(),O=g("ul"),Be=g("li"),P(Z.$$.fragment),st=T(),Pe=g("li"),P(x.$$.fragment),nt=T(),ve=g("div"),ee=g("div"),_e=g("subtitle"),_e.textContent=_t,rt=T(),te=g("ul"),Fe=g("li"),P(le.$$.fragment),ot=T(),Le=g("li"),P(ie.$$.fragment),ut=T(),ye=g("div"),ae=g("div"),ke=g("subtitle"),ke.textContent=kt,ct=T(),se=g("ul"),Re=g("li"),P(ne.$$.fragment),ft=T(),De=g("li"),P(re.$$.fragment),dt=T(),be=g("div"),oe=g("div"),$e=g("subtitle"),$e.textContent=$t,ht=T(),ue=g("ul"),Ie=g("li"),P(ce.$$.fragment),gt=T(),Oe=g("li"),P(fe.$$.fragment),this.h()},l(_){e=m(_,"DIV",{class:!0});var M=C(e);l=m(M,"DIV",{class:!0});var Ae=C(l);F(t.$$.fragment,Ae),Ae.forEach(o),i=G(M),a=m(M,"DIV",{class:!0});var ze=C(a);F(s.$$.fragment,ze),ze.forEach(o),k=G(M),f=m(M,"DIV",{class:!0});var We=C(f);F(u.$$.fragment,We),We.forEach(o),M.forEach(o),$=G(_),c=m(_,"DIV",{class:!0});var Ce=C(c);r=m(Ce,"DIV",{class:!0});var He=C(r);F(p.$$.fragment,He),He.forEach(o),d=G(Ce),B=m(Ce,"DIV",{class:!0});var K=C(B);V&&V.l(K),me=G(K),pe=m(K,"BR",{}),A=G(K),q=m(K,"DIV",{});var Ne=C(q);F(z.$$.fragment,Ne),Ne.forEach(o),K.forEach(o),Ce.forEach(o),X=G(_),Q=m(_,"H2",{class:!0,"data-svelte-h":!0}),N(Q)!=="svelte-1ehvrb8"&&(Q.textContent=Ge),H=G(_),D=m(_,"DIV",{class:!0});var j=C(D);b=m(j,"DIV",{class:!0});var Ct=C(b);E=m(Ct,"DIV",{class:!0});var je=C(E);I=m(je,"SUBTITLE",{class:!0,"data-svelte-h":!0}),N(I)!=="svelte-1ppzrix"&&(I.textContent=Ee),Se=G(je),O=m(je,"UL",{class:!0});var qe=C(O);Be=m(qe,"LI",{});var St=C(Be);F(Z.$$.fragment,St),St.forEach(o),st=G(qe),Pe=m(qe,"LI",{});var vt=C(Pe);F(x.$$.fragment,vt),vt.forEach(o),qe.forEach(o),je.forEach(o),Ct.forEach(o),nt=G(j),ve=m(j,"DIV",{class:!0});var yt=C(ve);ee=m(yt,"DIV",{class:!0});var Ke=C(ee);_e=m(Ke,"SUBTITLE",{class:!0,"data-svelte-h":!0}),N(_e)!=="svelte-11m6dru"&&(_e.textContent=_t),rt=G(Ke),te=m(Ke,"UL",{class:!0});var Ye=C(te);Fe=m(Ye,"LI",{});var bt=C(Fe);F(le.$$.fragment,bt),bt.forEach(o),ot=G(Ye),Le=m(Ye,"LI",{});var wt=C(Le);F(ie.$$.fragment,wt),wt.forEach(o),Ye.forEach(o),Ke.forEach(o),yt.forEach(o),ut=G(j),ye=m(j,"DIV",{class:!0});var Mt=C(ye);ae=m(Mt,"DIV",{class:!0});var Xe=C(ae);ke=m(Xe,"SUBTITLE",{class:!0,"data-svelte-h":!0}),N(ke)!=="svelte-8pivd4"&&(ke.textContent=kt),ct=G(Xe),se=m(Xe,"UL",{class:!0});var Ze=C(se);Re=m(Ze,"LI",{});var Tt=C(Re);F(ne.$$.fragment,Tt),Tt.forEach(o),ft=G(Ze),De=m(Ze,"LI",{});var Gt=C(De);F(re.$$.fragment,Gt),Gt.forEach(o),Ze.forEach(o),Xe.forEach(o),Mt.forEach(o),dt=G(j),be=m(j,"DIV",{class:!0});var Et=C(be);oe=m(Et,"DIV",{class:!0});var xe=C(oe);$e=m(xe,"SUBTITLE",{class:!0,"data-svelte-h":!0}),N($e)!=="svelte-1re1em7"&&($e.textContent=$t),ht=G(xe),ue=m(xe,"UL",{class:!0});var et=C(ue);Ie=m(et,"LI",{});var Bt=C(Ie);F(ce.$$.fragment,Bt),Bt.forEach(o),gt=G(et),Oe=m(et,"LI",{});var Pt=C(Oe);F(fe.$$.fragment,Pt),Pt.forEach(o),et.forEach(o),xe.forEach(o),Et.forEach(o),j.forEach(o),this.h()},h(){S(l,"class","column is-one-third"),S(a,"class","column is-one-third"),S(f,"class","column is-one-third"),S(e,"class","columns my-6"),S(r,"class","column is-two-thirds-desktop"),S(B,"class",W="column is-one-third-desktop "+(n[0]>it.min?"pt-4":"px-5")),S(c,"class","columns my-6 is-desktop"),S(Q,"class","title is-2"),S(I,"class","subtitle"),S(O,"class","list"),S(E,"class","content"),S(b,"class","column"),S(_e,"class","subtitle"),S(te,"class","list"),S(ee,"class","content"),S(ve,"class","column"),S(ke,"class","subtitle"),S(se,"class","list"),S(ae,"class","content"),S(ye,"class","column"),S($e,"class","subtitle"),S(ue,"class","list"),S(oe,"class","content"),S(be,"class","column"),S(D,"class","columns m-1 clickable-lists")},m(_,M){v(_,e,M),h(e,l),L(t,l,null),h(e,i),h(e,a),L(s,a,null),h(e,k),h(e,f),L(u,f,null),v(_,$,M),v(_,c,M),h(c,r),L(p,r,null),h(c,d),h(c,B),V&&V.m(B,null),h(B,me),h(B,pe),h(B,A),h(B,q),L(z,q,null),v(_,X,M),v(_,Q,M),v(_,H,M),v(_,D,M),h(D,b),h(b,E),h(E,I),h(E,Se),h(E,O),h(O,Be),L(Z,Be,null),h(O,st),h(O,Pe),L(x,Pe,null),h(D,nt),h(D,ve),h(ve,ee),h(ee,_e),h(ee,rt),h(ee,te),h(te,Fe),L(le,Fe,null),h(te,ot),h(te,Le),L(ie,Le,null),h(D,ut),h(D,ye),h(ye,ae),h(ae,ke),h(ae,ct),h(ae,se),h(se,Re),L(ne,Re,null),h(se,ft),h(se,De),L(re,De,null),h(D,dt),h(D,be),h(be,oe),h(oe,$e),h(oe,ht),h(oe,ue),h(ue,Ie),L(ce,Ie,null),h(ue,gt),h(ue,Oe),L(fe,Oe,null),Ve=!0},p(_,M){_[0]>it.min?V||(V=Vt(),V.c(),V.m(B,me)):V&&(V.d(1),V=null),(!Ve||M&1&&W!==(W="column is-one-third-desktop "+(_[0]>it.min?"pt-4":"px-5")))&&S(B,"class",W);const Ae={};M&2&&(Ae.$$scope={dirty:M,ctx:_}),Z.$set(Ae);const ze={};M&2&&(ze.$$scope={dirty:M,ctx:_}),x.$set(ze);const We={};M&2&&(We.$$scope={dirty:M,ctx:_}),le.$set(We);const Ce={};M&2&&(Ce.$$scope={dirty:M,ctx:_}),ie.$set(Ce);const He={};M&2&&(He.$$scope={dirty:M,ctx:_}),ne.$set(He);const K={};M&2&&(K.$$scope={dirty:M,ctx:_}),re.$set(K);const Ne={};M&2&&(Ne.$$scope={dirty:M,ctx:_}),ce.$set(Ne);const j={};M&2&&(j.$$scope={dirty:M,ctx:_}),fe.$set(j)},i(_){Ve||(y(t.$$.fragment,_),y(s.$$.fragment,_),y(u.$$.fragment,_),y(p.$$.fragment,_),y(z.$$.fragment,_),y(Z.$$.fragment,_),y(x.$$.fragment,_),y(le.$$.fragment,_),y(ie.$$.fragment,_),y(ne.$$.fragment,_),y(re.$$.fragment,_),y(ce.$$.fragment,_),y(fe.$$.fragment,_),Ve=!0)},o(_){w(t.$$.fragment,_),w(s.$$.fragment,_),w(u.$$.fragment,_),w(p.$$.fragment,_),w(z.$$.fragment,_),w(Z.$$.fragment,_),w(x.$$.fragment,_),w(le.$$.fragment,_),w(ie.$$.fragment,_),w(ne.$$.fragment,_),w(re.$$.fragment,_),w(ce.$$.fragment,_),w(fe.$$.fragment,_),Ve=!1},d(_){_&&(o(e),o($),o(c),o(X),o(Q),o(H),o(D)),R(t),R(s),R(u),R(p),V&&V.d(),R(z),R(Z),R(x),R(le),R(ie),R(ne),R(re),R(ce),R(fe)}}}function Gl(n){let e,l=`Christ's JCR is the undergraduate student union of Christ's College,
        Cambridge. We are your student-elected Committee, representing your
        interests to help you make the most of your time here!`;return{c(){e=g("div"),e.textContent=l,this.h()},l(t){e=m(t,"DIV",{slot:!0,"data-svelte-h":!0}),N(e)!=="svelte-j4dhpl"&&(e.textContent=l),this.h()},h(){S(e,"slot","description")},m(t,i){v(t,e,i)},p:Y,d(t){t&&o(e)}}}function El(n){let e,l;return e=new Yt({props:{current:"/",title:"Christ's JCR",titleSrc:"/img/logo_big.webp",metaDescription:"Christ's JCR is the undergraduate student union of Christ's College, Cambridge.",background:{src:"/img/home.webp",alt:"Christ's College Second Court"},size:"large",home:!0,$$slots:{description:[Gl],default:[Tl]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,i){L(e,t,i),l=!0},p(t,[i]){const a={};i&3&&(a.$$scope={dirty:i,ctx:t}),e.$set(a)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function Bl(n,e,l){let t;return mt(n,zt,i=>l(0,t=i)),[t]}class zl extends Je{constructor(e){super(),Qe(this,e,Bl,El,Ue,{})}}export{zl as component};
