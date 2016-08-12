class Api::ActorsCommentsController < ApplicationController

  def index
    @comments = Actor.find_by({api_id: params[:actor_api_id]}).actor_comments
  end

  def create

    if (current_user)
      ActorComment.create!(
        user_id: current_user.id,
        username: current_user.username,
        title: comment_params[:title],
        body: comment_params[:body],
        api_id: params[:actor_api_id]
      )
      @comments = Actor.find_by({api_id: params[:actor_api_id]}).actor_comments
      render :index
    end
    # else {
    #   render(
    #     json: {
    #       base: ["You must be logged in to add comments"]
    #     },
    #     status: 401
    #   )
    # }
  end

  private

  def comment_params
    params.require(:comment).permit(
      :title,
      :body
    )
  end
end