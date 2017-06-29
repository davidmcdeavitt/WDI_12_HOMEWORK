


require 'pry'
c1 = Order.new('latte','2 sugars','medium','Darryl')

order = {}
order >> Order.new

class Order
  @@order = Order.new
  attr_accessor :name, :type, :sugar, :strength
  def.self.all_instances
    @@order
  end

  def initialize(name, type, sugar, strength)
    @name = name
    @type = type
    @sugar = sugar
    @strength = strength
  end
end



def menu_options
  puts 'what would you like to do today?'
  puts '1)Order Details'
  puts '2)Add an order'
  puts '3)exit'
  return userSelection = gets.chomp.to_i
end


def get_new_order
  print "Order's name:"
  name = gets.chomp
  print 'Type:'
  type = gets.chomp
  print 'Sugars:'
  sugar = gets.chomp
  print 'Strength:'
  strength = gets.chomp
  return Order.new(name, type, sugar, strength)
end


# if num_of_order > 0
#   for i in 1..num_of_order
#     puts "enter details of Order No. #{i} :"
#     order = num_of_order
#     orders[order.name] = order
#   end
# elsif num_of_order == 0
#   menu_options
# end
#
#
#
# def locate_order(name)
#   order.each do |order|
#     if order.name == name
#       return order
#     end
#   end
# end


while true
  userSelection = menu_options
  if userSelection == 3
    break
  elsif userSelection == 1
    print order
  elsif userSelection == 2
    order << get_new_order
    print all_Orders


end

order = locate_order(name)


end
binding.pry
