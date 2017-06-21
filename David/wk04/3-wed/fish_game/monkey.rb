require 'pry'

class Monkey

  def initialize(starting_name)
    @name = starting_name
    @species = "macque"
    @foods_eaten = []
  end
  def get_species=(my_species)
    @species = my_species

  end
  def eat=(food)
    @foods_eaten = @foods_eaten + food
  end
  def introduce
    puts "Hi my name is #{@name} I am a #{@species}. I had #{@foods_eaten} for brunch."
  end
end
binding.pry
