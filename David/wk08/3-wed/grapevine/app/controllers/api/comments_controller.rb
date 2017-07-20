class Api::CommentsController < ApplicationController


  def index
    # comments = [{
    #   content: 'cake'
    # }, {
    #   content: 'pudding'
    # }, {
    #   content: 'muffins'
    # }]
    # render json: comments
    thing = {}
    render text: '{}'
  end

  def create
    .....
    comment.save


    render text:

  end

end
