
def request_type_calculation
  puts "Use 1 to Add, 2 to subtract, 3 to multiply, 4 to divide.. now select"

    operation = gets.to_i

    if operation == 1
      "add"
    elsif operation == 2
      "subtract"
    elsif operation == 3
      "multiply"
    elsif operation == 4
      "divide"
    else "fuck off"
    end
  end

  def answer(operator, a, b)
    if operator == "add"
      a + b
    elsif operator == "subtract"
      a - b
    elsif operator == "multiply"
      a * b
    elsif operator == "divide"
      a / b

      end
    end
  name = greeting
  runIt = 1

  while runIt == 1

    currentCalculation = request_type_calculation()

    if currentCalculation == "error"

      puts "fuck off"
    else

    puts "Where do we start off #{currentCalculation}:"

    first = gets.to_i

    puts "Second number is #{currentCalculation}:"

    second = gets.to_i

      answer = currentCalculation(currentCalculation, first, second)

      puts "the answer is #{answer}"
      puts "are we dont yet? Please press 2 if so..."
      runIt = gets.to_i

    end
end



  end
