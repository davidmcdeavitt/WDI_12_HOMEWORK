require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do

    @languages = ['java', 'ruby', 'python']


class Animal


#pass toys in as an array
  def initialize(name, age_animal, gender, species, toys)
    @name_animal = params[:name_animal]
    @age_animal = params[:age_animal]
    @gender = params[:gender]
    @species = params[:species]
    @toys = params[:toys]

  end

  def name

  end
animals = []


end



class Client



  def initialize(name_client, children, age_client, current_pets)
    attr_accessor :name_client, :children, :age_client, :current_pets
    @name_client = params[:name_client]
    @children = params[:children]
    @age_client = params[:age_client]
    @current_pets = params[:current_pets]

  end
clients = []

end

end
binding.pry
