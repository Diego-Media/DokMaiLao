const categories=window.restaurantMenu;
const bar=document.querySelector('.category-bar'), dishes=document.querySelector('#dishes'), intro=document.querySelector('#category-intro'), panel=document.querySelector('#menu-panel'), search=document.querySelector('#dish-search');
let selected='pizza';
function render(){
 const query=search.value.trim().toLocaleLowerCase();
 const category=categories.find(c=>c.id===selected);
 const list=query?categories.flatMap(c=>c.items).filter(i=>(i[0]+' '+i[1]).toLocaleLowerCase().includes(query)):category.items;
 intro.textContent=query?`Searching all dishes for “${search.value.trim()}”`:category.intro;
 dishes.replaceChildren();
 for(const [name,description,price] of list){
  const item=document.createElement('article');item.className='dish';
  const title=document.createElement('h3');title.textContent=name;
  const amount=document.createElement('span');amount.className='price'+(typeof price==='string'?' long-price':'');
  amount.textContent=price===null?'Ask us':(typeof price==='number'?(price*1000).toLocaleString('en-US'):price)+' ';
  if(price!==null){const unit=document.createElement('small');unit.textContent='kip';amount.append(unit);}
  item.append(title,amount);
  if(description){const p=document.createElement('p');p.textContent=description;item.append(p);}
  dishes.append(item);
 }
 if(!list.length){const empty=document.createElement('div');empty.className='empty';empty.textContent='No dishes found. Try pizza, cheese, chicken or pasta.';const reset=document.createElement('button');reset.textContent='Show the menu';reset.onclick=()=>{search.value='';render();search.focus()};empty.append(reset);dishes.append(empty);}
 document.querySelectorAll('[role=tab]').forEach(t=>{const active=t.dataset.category===selected;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;});
 panel.setAttribute('aria-labelledby','tab-'+selected);
 document.querySelector('#results').textContent=`${list.length} dishes shown`;
}
for(const c of categories){const b=document.createElement('button');b.type='button';b.id='tab-'+c.id;b.role='tab';b.dataset.category=c.id;b.textContent=c.name;b.setAttribute('aria-controls','menu-panel');b.onclick=()=>{selected=c.id;search.value='';render();};b.onkeydown=e=>{const keys=['ArrowRight','ArrowLeft','Home','End'];if(!keys.includes(e.key))return;e.preventDefault();let i=categories.findIndex(c=>c.id===selected);i=e.key==='Home'?0:e.key==='End'?categories.length-1:(i+(e.key==='ArrowRight'?1:-1)+categories.length)%categories.length;selected=categories[i].id;search.value='';render();document.querySelector('#tab-'+selected).focus();};bar.append(b);}
search.addEventListener('input',render);render();
