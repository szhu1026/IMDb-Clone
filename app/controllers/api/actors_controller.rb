class Api::ActorsController < ApplicationController

  def show
    #actor base information pull
    if Actor.where({birthday: nil, api_id: params[:api_id]})
      @actor = pull_actor_data(params[:api_id])
    elsif Actor.where({api_id: params[:api_id]})
      @actor = Actor.find_by({api_id: params[:api_id]})
    else
      @actor = pull_actor_data(params[:api_id])
    end

  end

  def movies
    if Casting.where({actor_id: params[:api_id], actor_casting: true}).empty?
      Casting.where({actor_id: params[:api_id], actor_casting: false, movie_casting: true}).each do |elem|
        elem.update_attribute(:actor_casting, true)
      end
      movie_ids = pull_casting_data(params[:api_id]);
      movie_ids = Casting.where({actor_id: params[:api_id]}).map{|id| id.movie_id}
      @movies = Movie.where({api_id: movie_ids})
    else
      # movie_ids = Casting.where({actor_id: params[:api_id]}).map{|id| id.movie_id}
      # @movies = Movie.where({api_id: movie_ids})
      @movies = Actor.find_by({api_id: params[:api_id]}).movies
    end
  end

  private

  def pull_casting_data(api_id)
    api_id = params[:api_id]
    link = "https://api.themoviedb.org/3/person/#{api_id}/credits?api_key=50a303126fa608b8780f3e3caaf4695a"
    response = RestClient::Request.execute(url: link, method: :get, verify_ssl: false)
    response_data = JSON.parse(response)["cast"];

    response_data.each do |elem|
      #creating new casting object
      pull_actor_data(elem["id"]);
      casting_params = {
        "movie_id": elem["id"].to_s,
        "actor_id": api_id,
        "actor_casting": true
      }
      Casting.create(casting_params);
    end

    data = response_data.each do |movie|
      params = {poster_path: movie["poster_path"],
       original_title: movie["original_title"],
       release_date: movie["release_date"],
       api_id: movie["id"]
      }
      Movie.create(params);
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
