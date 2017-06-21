def word_input(word)
  input = gets.chomp
    if input[-1] == "?"
      "Whatever"
    elsif input.empty? == true
      "Fine. Be that way!"
    elsif input.upcase == true
      "Woah, chill out!"
  end
end
word_input

letters_to_convert = ["a", "e", "i", "o"]

#binding.pry to debug code
