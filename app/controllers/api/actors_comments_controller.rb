class Api::ActorsCommentsController < ApplicationController

  def index
    @comments = Actor.find_by({api_id: params[:actor_api_id]}).actor_comments
  end

  def destroy
    @comments = ActorComment.find_by({
      user_id: current_user.id,
      id: params[:id]
    })

    if (@comments.destroy)
      @comments = Actor.find_by({api_id: params[:actor_api_id]}).actor_comments
      render :index
    end
  end

  def update
    @comments = ActorComment.find_by({
      user_id: current_user.id,
      id: params[:id]
    })

    if (@comments.update(title: comment_params[:title], body: comment_params[:body]))
      @comments = Actor.find_by({api_id: params[:actor_api_id]}).actor_comments
      render :index
    end
  end

  def create

    if current_user
      comment = ActorComment.create!(
        user_id: current_user.id,
        username: current_user.username,
        title: comment_params[:title],
        body: comment_params[:body],
        api_id: params[:actor_api_id]
      )
    end

    if comment
      @comments = Actor.find_by({api_id: params[:actor_api_id]}).actor_comments
      render :index
    else
      render(
        json: {
          base: ["Must be signed in to add comments"]
        },
        status: 404
      )
    end
  end

  private

  def comment_params
    params.require(:comment).permit(
      :title,
      :body
    )
  end
end
