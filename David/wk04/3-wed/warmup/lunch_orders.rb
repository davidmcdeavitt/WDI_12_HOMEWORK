
all_orders = {}
require 'pry'



def get_order

def order
  name = gets.chomp "Hello! How can I help you?"
  puts "It's nice to meet you #{name}./n"
  return name
end

until confirm == "y" do
  def main
    food = gets.chomp "What can I get you today?"
    puts "#{food} sounds delicious"
    return food.downcase
  end
  def addition
    side = gets.chomp "do you want fries, potato, or salad with that?"
    return side.downcase
  end
  def repeat_order
    confirm = gets.chomp "so I have an order for #{name}, of #{food} with #{side} is this correct?"
    return confirm.downcase
  end
end

return all_orders[:name] => food, side
end


get_order
end
binding.pry
