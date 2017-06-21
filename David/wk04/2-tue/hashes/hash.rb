require 'pry'


#in ruby this is a symbol
song = {
  title: 'call me maybe',
  artist: 'jackson'
}

class_size = 7

wdi_class = {
  'name' => 'bitPlease',
  'size' => 7,
  :students => ['a', 'b', 'c'],
  :fav_color => {
    name: 'mistyrose'
  }
}

#this is number like an array
list = {
  0 => 'thing'
}

binding.pry


a = ["Anil", "Erik", "Jonathan"]

a.find do |lang|
  if lang == "Erik"
    return lang
end
a.insert(3, 'David')

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

h[1].find do |lang|
  if lang == "One"
  return lang
end
h[:two].find do |lang|
  if lang == "Two"
  return lang
end
h.
h[two].find do |num|
  if num == 1
  return num
end
h[3] == "Three"
h[:four] == 4


all_nums = []
users.each do |key, value|
  all_nums.concat val[:favorite_numbers]
end
all_nums.uniq.sort


binding.pr
#
