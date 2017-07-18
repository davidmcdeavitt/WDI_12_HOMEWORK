class GamesController < ApplicationController

  def eight_ball
    render :eight_ball
  end

  def secret_number
    render :secret_number
  end

  def rock_paper_scissors
    render :rock_paper_scissors
  end

end
