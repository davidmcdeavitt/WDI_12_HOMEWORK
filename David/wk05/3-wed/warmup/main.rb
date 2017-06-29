# def roll
#   rand(6) + 1
# end
#   puts roll
#
# def roll(sides)
#   rand(sides) + 1
# end
#   puts roll (6)
require "pry"
class Dice
  @@rolls = []
  def self.roll(number)
    roll_array = []
    number.times do
      roll_values = rand(1..6)
      roll_array << roll_values
    end
  end
  def self.sum
    @@rolls.sum
  # total = 0
  # roll_array.times |roll|
  #   new_total = total + roll
  #   total = new_total
  end
end
binding.pry
