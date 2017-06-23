
require 'pry'

pokemon = Array({:Pikachu =>	40,
:Rattata => 20,
:Pidgeot => 60,
:Alakazam => 80,
:Butterfree => 30,
:Gengar => 70,
:Moltres => 100,
:Vulpix => 40,
:Blastoise => 80,
:Hitmonchan => 50})
#creat an array to organize the information
binding.pry

#split cards into 3 piles with 4th pile only having one



cards_piles = pokemon.reverse.each_slice(3).to_a.shuffle

card_thiefs = ["Alfred", "Peter"]
cards_pile.shift(2) >> card thiefs
#for the last two left
Array.last_two = cards_pile.each_slice(1).to_a.shuffle
#randomize who gets which pile
