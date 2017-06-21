require 'pry'


languages = ['js', 'ruby', 'php']

#in js we call it higher order functions
#ruby block

lucky_numbers = [1,7, 21]

languages.each do |lang|
  puts
end

total = 0
lucky_numbers.each do |num|
  total = total + num
  puts total
end

song = {
  title: 'call me maybe',
  artist: 'jackson'
}

song.each do |key_value_pair|
  puts key_value_pair
end

#.map
#.find
#.filter
languages.find do |lang|
  if lang == 'ruby'
    return lang
  end

#map as transform
#make uppercase
upcased_languages = languages.map do
  lang.capitalize
end



end


binding.pry
