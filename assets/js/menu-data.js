window.SEM_MENU = [{"cat": "Pizza", "items": [["Spicy Paneer Tikka", "269/419"], ["Paneer Makhani", "269/419"], ["Grilled-MUSH Harvest", "269/399"], ["Mushroom Love", "269/399"], ["Spicy Mexi-Corn Delight", "249/379"], ["Classic Vegetable", "199/329"], ["Double Cheese Margherita", "199/299"], ["Cheesy Corn Bliss", "199/299"], ["Meat Lover", "349/499"], ["Peri Peri Chicken", "299/449"], ["BBQ Chicken Pizza", "299/449"], ["Chicken Mexicano", "299/449"], ["Double Cheese & Chicken", "269/419"], ["Chicken Makhani", "269/419"], ["Chicken Tikka", "259/399"], ["Chicken Pepperoni", "199/349"], ["Sausage Mania", "199/349"]]}, {"cat": "Pasta", "items": [["Veg Mixed Sauce Pasta", "229"], ["Creamy Mushroom Pasta", "229"], ["Veg White Sauce Pasta", "199"], ["Veg Red Sauce Pasta", "149"], ["Chicken Mixed Sauce Pasta", "249"], ["Chicken White Sauce Pasta", "229"], ["Chicken Red Sauce Pasta", "169"]]}, {"cat": "Burgers", "items": [["Veg Jumbo Burger", "159"], ["Classic Cheese Veg Burger", "119"], ["Aaloo Tikki Burger", "79"], ["Jumbo Chicken Burger", "179"], ["Chicken Tikka Burger", "159"], ["Crispy Chicken Burger", "159"], ["Classic Cheese Chicken", "139"], ["Simply Chicken", "99"]]}, {"cat": "Sandwich & Wrap", "items": [["Creamy Mushroom", "149/169"], ["Spicy Paneer Tikka", "139/159"], ["Corn Cheese", "129/149"], ["Veggies Overloaded", "99/119"], ["Paneer Basic", "89/109"], ["Veg Basic", "69/89"], ["Crispy Chicken Popcorn", "149/169"], ["Chicken Salami", "149/169"], ["Chicken Sausage", "149/169"], ["Chicken Keema Masala", "149/169"], ["BBQ Chicken", "149/169"], ["Spicy Chicken Tikka", "139/159"], ["Egg Chicken", "129/149"], ["Chicken Cheese", "99/119"], ["Chicken Basic", "89/109"], ["Egg Mayo", "79/99"]]}, {"cat": "Small Bites", "items": [["Crispy Chilli Baby Corn", "149"], ["Crispy Cheese Ball (5pcs)", "149"], ["Cheesy Fries with Chipotle", "149"], ["Kuhlhad Pizza (Veg/Chicken)", "99/119"], ["Potato Wedges Salsa (10pcs)", "119"], ["Cheese Garlic Bread", "79"], ["French Fries (R/M)", "79/99"], ["Fish Finger (Basa/Vetki) (6pcs)", "199/259"], ["Fish Fry & Chips (Basa/Vetki)", "169/229"], ["Cheesy Chicken Chizza", "149"], ["Chicken Sausage Fry (4pcs)", "149"], ["Chicken Nuggets (6pcs)", "159"], ["Crispy Chicken Wings (2pcs)", "99/139"], ["Crispy Chicken Popcorn (10pcs)", "99/139"], ["Crispy Chicken Strips (5pcs)", "99/139"]]}, {"cat": "Maggi", "items": [["Corn Cheese Maggi", "99"], ["Cheesy Whizzy Maggi", "99"], ["Veg Maggi", "59"], ["Plain Maggi", "49"], ["Egg Chicken Maggi", "89"], ["Chicken Maggi", "79"], ["Egg Maggi", "69"]]}, {"cat": "Momo (8 pcs)", "items": [["Veg (Steam/Fry/PanFry)", "79/79/99"], ["Special Chicken (Steam/Fry/PanFry)", "129/129/159"], ["Basic Chicken (Steam/Fry/PanFry)", "99/99/129"]]}, {"cat": "Combos", "items": [["Shaam-E-Snack Combo 1", "Chicken Cheese Sandwich + Masala Tea (M) — 129"], ["Shaam-E-Snack Combo 2", "Corn Cheese Sandwich + Masala Tea (M) — 149"], ["Shaam-E-Snack Combo 3", "2 Chicken Tikka Sandwich + 2 Masala Tea — 299"], ["Shaam-E-Snack Combo 4", "2 Chicken Basic Sandwich + Fries (M) + 2 Coke (250ml) — 329"], ["Crunch Bucket 1", "Wings(2) + Popcorn(10) + Strips(5) + Any dip — 299"], ["Crunch Bucket 2", "Wings(4) + Popcorn(20) + Strips(10) + 2 Dips — 599"], ["Chakhna Box 1", "Wedges(10) + Fries(R) + Peanut mix + dips — 199"], ["Chakhna Box 2", "Wings(3) + Popcorn(6) + mix + dips — 299"], ["Chakhna Box 3", "Cheese Ball(3)+Wedges(5)+Fries(R)+Salad+mix+dips — 299"], ["Chakhna Box 4", "Basa Fry(1) + Popcorn(6) + Sausage Fry + Fries(M) + mix + dips — 399"], ["Bite & Sip Trio 1", "Crispy Chicken Burger + Fries(R) + Coke — 249"], ["Bite & Sip Trio 2", "Veg Jumbo Burger + Fries(R) + Coke — 249"], ["Bite & Sip Trio 3", "Jumbo Chicken Burger + Classic Cheese Chicken + Fries(M) + 2 Coke — 399"]]}, {"cat": "Drinks", "items": [["Milkshakes: Brownie | KitKat | Oreo | Caramel | Chocolate", "139–159"], ["Mocktails: Sunset | Shirley Temple | Mango | Litchi | Blue Lagoon | Virgin Mojito", "99–129"]]}, {"cat": "Tea • Coffee • Dessert", "items": [["Teas (R/M/L): Milk, Ginger, Elaichi, Kesar, Chocolate, Special Masala", "10–49"], ["Coffee: Black, Milk, Americano, Cold, Latte, Mocha, Caramel Cold Coffee", "29–129"], ["Dessert: Brownie • Choco Lava Cake • Brownie w/ Ice‑Cream", "99–129"]]}, {"cat": "Healthy & Breakfast", "items": [["Dalia • Oats Smoothie • Masala Oats", "59"], ["Poha • Upma", "49"], ["Scrambled Egg", "79"], ["Egg Poach", "20/35"], ["Toast & Eggs: Cheese/Fluffy/Masala Veg/Bread/Double/Single • Butter/Jam Toast", "30–79"]]}];

data.forEach(sec => {
  const el = document.createElement('div');
  el.className = 'border rounded-xl bg-white overflow-hidden';
  
  const itemsHtml = (sec.items || []).map(item => `
    <div class="p-3">
      <div class="flex flex-col items-center text-center">
        <div class="w-full aspect-square rounded-lg overflow-hidden bg-neutral-100">
          <img src="assets/images/${slugify(item[0])}.jpg" 
               alt="${item[0]}"
               class="w-full h-full object-cover"
               onerror="this.src='assets/images/menu/placeholder.jpg'">
        </div>
        <h4 class="font-medium mt-3 text-neutral-900">${item[0]}</h4>
        <span class="mt-1 text-[color:var(--brand)] font-semibold">₹${item[1]}</span>
      </div>
    </div>
  `).join('');

  el.innerHTML = `
    <button class="w-full flex items-center justify-between px-6 py-4 bg-neutral-50" 
            onclick="this.nextElementSibling.classList.toggle('hidden')">
      <span class="font-display text-xl">${sec.cat}</span>
      <svg class="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    <div class="hidden divide-y">
      ${itemsHtml}
    </div>
  `;
  
  acc.appendChild(el);
});