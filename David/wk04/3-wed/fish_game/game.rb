require 'pry'

#define class before you start using it
class Fish
#f1 or variable attached with fist is an example of instance
  def initialize(starting_name)
    @name = starting_name# instance variable as long as fish alive -- give a new name every time
    @health = 100
  end
  def sleep
    @health = @health +10
  end
  def get_name
    return @name

  end
  def get_health
    return @health
  end
  def health=(new_health)
    @health = new_health

  end
end

binding.pry
