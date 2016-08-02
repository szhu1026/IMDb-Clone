class ActorsController < ApplicationController

  def show

    @actor = Actor.find_by({api_id: params[:api_id]});
    if @actor
      render json: @actor
    else
      #request
      api_id = params[:api_id]
      link = "https://api.themoviedb.org/3/person/#{api_id}?api_key=50a303126fa608b8780f3e3caaf4695a"
      response = RestClient::Request.execute(url: link, method: :get, verify_ssl: false)
      response_data = JSON.parse(response);

      #creating new actor object
      actor_params = {
        "biography": response_data["biography"],
        "birthday": response_data["birthday"],
        "deathday": response_data["birthday"],
        "gender": response_data["gender"],
        "homepage": response_data["homepage"],
        "api_id": response_data["id"],
        "imdb_id": response_data["imdb_id"],
        "name": response_data["name"],
        "place_of_birth": response_data["place_of_birth"],
        "popularity": response_data["popularity"],
        "profile_path": response_data["profile_path"]
      }

      @actor = Actor.create(actor_params);
      render json: @actor
    end

  end

end
