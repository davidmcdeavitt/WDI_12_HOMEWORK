require 'pry'
#words = ["hello", "what", "is", "up", "dude"]
#lengths(words)  # => [5, 4, 2, 2, 4]

 def lengths
   words = gets.chop
   length = []
   words.each { |a| length << a.length}
   length
 end
lengths
binding.pry
