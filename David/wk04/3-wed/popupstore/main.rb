#most common request is GET request
#user comes with a get request with the path / about
require 'sinatra'

get '/' do
  erb :index
end

get '/about' do
#my response--- CONVENTIONS
  erb :about_me
end
