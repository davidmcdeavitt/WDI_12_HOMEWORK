require "pry"

  def get_squared(range)
    range.select{|num| Math.sqrt(num) % 1 == 0}.sort.uniq
  end



binding.pry
