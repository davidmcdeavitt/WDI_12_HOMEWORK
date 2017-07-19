class DealsController < ApplicationController

  def index
    @deals = Deal.all

  end

  def new
  end

  def create
    dish = Deal.new
    dish.name = params[:name]
    dish.image_url = params[:image_url]
    dish.save
    redirect_to '/deals'
  end







end
