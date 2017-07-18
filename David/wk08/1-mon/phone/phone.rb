
require "pry"
class Phone

  def initialize(number_input)
    @number = number_input
  end
  def number
    @number.gsub!(/\D/, "")
    binding.pry
  end

end
