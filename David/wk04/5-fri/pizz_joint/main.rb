require 'sinatra'
require 'sinatra/reloader'
require 'pry'
get '/' do
  erb :index
end



get '/result' do
  url = "http://api.fixer.io/latest?base=#{params[:first_currency]}"
  parsed_res = HTTParty.get(url).parsed_response
  rates = parsed_res['rates']
  country_rate = rates["#{params[:second_currency]}"]
  "the exchange is "country_rate
  erb :result
end
