let currentState = start

let order = {
  items: [],
  drink: ""
}

export function handleInput(input){
  return currentState(input)
}

export function clearInput(){
  currentState = start
  order = { items: [], drink: "" }
}

function start(){
  let r = []
  currentState = chooseFood

  r.push("Welcome to Mohi's Indian Restaurant")
  r.push("Would you like Butter Chicken or Paneer Tikka?")

  return r
}

function chooseFood(input){
  let r = []

  order.currentItem = { name: input }

  currentState = chooseSize
  r.push("What size? (small, medium, large)")

  return r
}

function chooseSize(input){
  let r = []

  order.currentItem.size = input

  currentState = chooseSpice
  r.push("Choose spice level (mild, medium, spicy)")

  return r
}

function chooseSpice(input){
  let r = []

  order.currentItem.spice = input
  order.items.push(order.currentItem)

  currentState = another
  r.push("Do you want another dish? (yes/no)")

  return r
}

function another(input){
  let r = []

  if(input.toLowerCase().startsWith("y")){
    currentState = chooseFood
    r.push("Butter Chicken or Paneer Tikka?")
  }else{
    currentState = drink
    r.push("Would you like Mango Lassi? (yes/no)")
  }

  return r
}

function drink(input){
  let r = []

  if(input.toLowerCase().startsWith("y")){
    order.drink = "Mango Lassi"
  }

  let summary = "Your order:\n"

  for(let item of order.items){
    summary += item.size + " " + item.name + " (" + item.spice + ")\n"
  }

  if(order.drink){
    summary += "Drink: " + order.drink
  }

  r.push(summary)

  currentState = start

  return r
}