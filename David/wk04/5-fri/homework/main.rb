
require 'pry'

pokemon = Array({name: 'Pikachu', attack:	40,
name: Rattata, attack:	20,
name: Pidgeot, attack:	60,
name: Alakazam, attack:	80,
name: Butterfree, attack:	30,
name: Gengar, attack:	70,
name: Moltres, attack:	100,
name: Vulpix, attack:	40,
name: Blastoise, attack:	80,
name: Hitmonchan, attack:	50})
#creat an array to organize the information


#split cards into 3 piles with 4th pile only having one



cards_piles = pokemon.reverse.each_slice(3).to_a.shuffle

players = {alfred: cards_piles.shift, peter: cards_piles.shift}
#randomize who gets which pile
if rand(0..1) == 0
players[:alfred].push(groups.shift).flatten!
players[:peter].push(groups.shift).flatten!
else
players[:peter].push(groups.shift).flatten!
players[:alfred].push(groups.shift).flatten!

#cleaner way for tis to be written
winner = if rand(0..1) == 0 ? :alfred : :peter
loser = winner == :alfred ? :peter : :alfred


binding.pry
