class DishesController < ApplicationController


  def index
    raise 'stop the world'
    @dishes = Dish.all
  end

  def new

  end

  def create
    dish = Dish.new
    dish.name = params[:name]
    dish.image_url = params[:image_url]
    dish.save
    redirect_to '/dishes'
  end

  def edit
    dish.name = params[:name]
    dish.image_url = params[:image_url]
    dish.save
    redirect_to '/dishes'
  end
end
