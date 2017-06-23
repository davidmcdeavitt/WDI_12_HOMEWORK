require 'pry'

class Robot

  def initialize
  @names = []
  end
  @@robot = ("A".."Z").chars.to_s

  def name
    @name_original = ""
    @name_original << @@robot.sample
    @name_original << rand(100..999).to_s
    robot_name
    new_name
  end
  def robot_name
    @names << @name_original
  end

  def new_name
    @name.uniq!
  end

  def start_over
    @names = Array.new

  end

end










binding.pry
