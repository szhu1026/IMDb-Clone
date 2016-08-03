class Api::MoviesController < ApplicationController
  def show
    #movie base information pull
    if Movie.find_by({api_id: params[:api_id]})
      @movie = Movie.find_by({api_id: params[:api_id]})
    else
      @movie = pull_movie_data(params[:api_id])
    end
  end

  private

  def pull_movie_data(api_id)
    api_id = params[:api_id]
    link = "https://api.themoviedb.org/3/movie/#{api_id}?api_key=50a303126fa608b8780f3e3caaf4695a"
    response = RestClient::Request.execute(url: link, method: :get, verify_ssl: false)
    response_data = JSON.parse(response);

    #creating new movie object
    movie_params = {
      "overview": response_data["overview"],
      "original_title": response_data["original_title"],
      "runtime": response_data["runtime"],
      "vote_average": response_data["vote_average"],
      "poster_path": response_data["poster_path"],
      "api_id": response_data["id"]
    }

    Movie.create(movie_params);
  end


end
