require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'



def run_sql(sql)
  conn = PG.connect(dbname: 'movies_db')
  result = conn.exec(sql)
  conn.close
  result
end

get '/' do
  erb :index
end

get '/about' do
  movie = params[:movie]
  result = HTTParty.get("http://omdbapi.com/?t=#{movie}")
  @title = result["Title"]
  @image = result["Poster"]
  @items = result
  File.open('history.txt', 'a+') do |file|
    file.puts movie
  end
  conn = PG.connect(dbname: 'movies_db')
  input = "INSERT INTO movies(
    title,
    year,
    actors,
    plot,
    poster,
    imdbRating,
  ) VALUES(
    '#{@items['Title']}',
    '#{@items['Year']}',
    '#{@items['Actors']}',
    '#{@items['Plot']}',
    '#{@items['Poster']}',
    '#{@items['imdbRating']}',
  );"
  conn.exec(input)
  conn.close
  # binding.pry
  erb :new
end


get '/movie' do
  movie = params[:movie]
  result = HTTParty.get("http://omdbapi.com/?s=#{movie}&apikey=ENV").parsed_response
  if (result["Search"].length == 1)
    redirect "/about?movie=#{movie}"
  else
    @search_word = movie.capitalize
    @movie_list = result["Search"]
    File.open('history.txt', 'a+') do |file|
    file.puts movie
    end
  end
  erb :movie_details
end
#
# get '/movies' do
#   @movies = run_sql('SELECT * FROM movies order by title;')
#   erb :index
# end
#
# get '/movies/new' do
#   erb :new
# end
#
# post 'movies' do
#   sql = "INSERT INTO movies(title, image_url) VALUES ('#{params[:title]}', '#{params[:image_url]}');"
#   run_sql(sql)
#   redirect '/dishes'
# end
#
# get '/dishes/:id' do
#   sql = "SELECT * FROM movies WHERE id = #{params[:id]}"
#   @movie = run_sql(sql)[0]
#   erb :movie_details
# end
#
# get '/dishes/:id/edit' do
#   sql = "SELECT * FROM movies WHERE id = #{params[:id]}"
#   @movie = run_sql(sql)[0]
#   erb :edit
# end
#
# patch '/dishes/:id' do
#   run_sql("UPDATE movies SET title = '#{params[:title]}', image_url = '#{params[:image_url]}', WHERE id = #{params[:id]}'")
#   redirect '/movies'
# end
#
# delete '/dishes/:id' do
#   sql = SELECT * FROM movies WHERE title = "#{params['title']}';")
#   db_results =
# end
#
# if result = {}







#FROM MOVIES 2
#

#   erb :about
# end
#
# get '/list' do

#   end
#   erb :list
# end
#
# get '/history' do
#   @file = File.open('history.txt')
#   erb :history
# end
# end
#this acts as an array
