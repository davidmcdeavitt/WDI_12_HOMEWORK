#read a file I pass in

#a function to read a file
require 'pry'
binding.pry

line_count = File.read('hackers.rb').split("\n").length + 1




   puts "#{line_count} lines"

end


#use some programming magic to how to how many lnes
#print it out as
#17 lines

days_of_the_week = Array[Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]

days_of_the_week.unshift(days_of_the_week.delete('Sunday'))



end
