class Robot

  def initialize
    @name = "#{prefix}#{suffix}"
  end


  def name
    @name
  end
  def prefix
    ('aa'..'zz').to_a.sample
  end

  def suffix
    ('000'..'999').to_a.sample
  end

  def reset
    @name = "#{prefix}#{suffix}"

  end

end
