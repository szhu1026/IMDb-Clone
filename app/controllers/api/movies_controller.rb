class Api::MoviesController < ApplicationController
  def show
    #movie base information pull
    if Movie.where({vote_average: nil, api_id: params[:api_id]})
      @movie = pull_movie_data(params[:api_id])
    elsif Movie.where({api_id: params[:api_id]})
      @movie = Movie.find_by({api_id: params[:api_id]})
    else
      @movie = pull_movie_data(params[:api_id])
    end
  end

  def actors

    if Casting.where({movie_id: params[:api_id], movie_casting: true}).empty?
      actor_ids = pull_casting_data(params[:api_id]);
      actor_ids = Casting.where({movie_id: params[:api_id]}).map{|id| id.actor_id}

      @actors = Actor.select("actors.*, castings.character_name as character_name")
      .joins(:castings)
      .where({api_id: actor_ids})

      # .where({api_id: actor_ids})

      Casting.where({movie_id: params[:api_id], movie_casting: false, actor_casting: true}).each do |elem|
        elem.update_attribute(:movie_casting, true)
      end
    else
      @actors = Movie.find_by({api_id: params[:api_id]}).actors
      .joins(:castings)
      .select("actors.*, castings.character_name as character_name")
    end

  end

  private


  def pull_casting_data(api_id)
    api_id = params[:api_id]
    link = "https://api.themoviedb.org/3/movie/#{api_id}/credits?api_key=50a303126fa608b8780f3e3caaf4695a"
    response = RestClient::Request.execute(url: link, method: :get, verify_ssl: false)
    response_data = JSON.parse(response)["cast"];

    casting_params = response_data.map do |elem|
      #creating new actor object
      casting_params = {
        "actor_id": elem["id"].to_s,
        "movie_id": api_id,
        "movie_casting": true,
        "character_name": elem["character"]
      }
    end

    Casting.create(casting_params);

    actor_params = response_data.map do |actor|
      # next if !Actor.find_by({api_id: actor["id"]}).nil?
      params = {profile_path: actor["profile_path"],
       name: actor["name"],
       api_id: actor["id"]
      }
    end

    Actor.create(actor_params);
  end

  def pull_movie_data(api_id)
    api_id = params[:api_id]
    link = "https://api.themoviedb.org/3/movie/#{api_id}?api_key=50a303126fa608b8780f3e3caaf4695a&append_to_response=videos"
    response = RestClient::Request.execute(url: link, method: :get, verify_ssl: false)
    response_data = JSON.parse(response);

    #creating new movie object
    movie_params = {
      "overview": response_data["overview"],
      "original_title": response_data["original_title"],
      "runtime": response_data["runtime"],
      "vote_average": response_data["vote_average"],
      "poster_path": response_data["poster_path"],
      "api_id": response_data["id"],
      "release_date": response_data["release_date"],
      "trailer": response_data["videos"]["results"][0]["key"]
    }

    Movie.create(movie_params);
  end
end
