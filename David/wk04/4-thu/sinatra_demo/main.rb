require 'sinatra'
require 'sinatra/reloader'
require 'pry'
get '/' do
  erb :index
end

get 'calc' do

end


get '/result' do
  first_num = params[:first_num].to_f
  second_num = params[:second_num].to_f
    total = first_num + second_num
  "the sum is #{total}"
end
