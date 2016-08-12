class Api::MoviesCommentsController < ApplicationController

  def index
    @comments = Movie.find_by({api_id: params[:movie_api_id]}).movie_comments
    render :index
  end

  def create
    MovieComment.create!(
      user_id: current_user.id,
      username: current_user.username,
      title: comment_params[:title],
      body: comment_params[:body],
      api_id: params[:movie_api_id]
    )
    @comments = Movie.find_by({api_id: params[:movie_api_id]}).movie_comments
    render :index
  end

  private

  def comment_params
    params.require(:comment).permit(
      :title,
      :body
    )
  end
end
