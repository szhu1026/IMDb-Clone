class Api::ActorsController < ApplicationController

  def show
    #actor base information pull
    if Actor.find_by({api_id: params[:api_id]})
      @actor = Actor.find_by({api_id: params[:api_id]})
    else
      @actor = pull_actor_data(params[:api_id])
    end
  end

  def movies
    pull_casting_data(params[:api_id]);
    castings = pull_casting_data(params[:api_id]);
    @movies = pull_casting_data(params[:api_id]);
  end

  private

  def pull_casting_data(api_id)
    api_id = params[:api_id]
    link = "https://api.themoviedb.org/3/person/#{api_id}/credits?api_key=50a303126fa608b8780f3e3caaf4695a"
    response = RestClient::Request.execute(url: link, method: :get, verify_ssl: false)
    response_data = JSON.parse(response)["cast"];

    response_data.each do |elem|
      #creating new actor object
      # pull_actor_data(elem["id"]);
      casting_params = {
        "movie_id": api_id,
        "actor_id": elem["id"].to_s,
      }
      Casting.create(casting_params);
    end
  end

  def pull_actor_data(api_id)
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

    Actor.create(actor_params);
  end

end
