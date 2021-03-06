class Api::MoviesCommentsController < ApplicationController

  def index
    @comments = Movie.find_by({api_id: params[:movie_api_id]}).movie_comments
    render :index
  end

  def destroy
    @comments = MovieComment.find_by({
      user_id: current_user.id,
      id: params[:id]
    })

    if (@comments.destroy)
      @comments = Movie.find_by({api_id: params[:movie_api_id]}).movie_comments
      render :index
    end
  end

  def update
    @comments = MovieComment.find_by({
      user_id: current_user.id,
      id: params[:id]
    })

    if (@comments.update(title: comment_params[:title], body: comment_params[:body]))
      @comments = Movie.find_by({api_id: params[:movie_api_id]}).movie_comments
      render :index
    end
  end


  def create

    if current_user
      comment = MovieComment.create!(
        user_id: current_user.id,
        username: current_user.username,
        title: comment_params[:title],
        body: comment_params[:body],
        api_id: params[:movie_api_id]
      )
    end

    if comment
      @comments = Movie.find_by({api_id: params[:movie_api_id]}).movie_comments
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
