# json.extract! movies, :poster_path

json.array! @movies, :poster_path, :original_title, :release_date, :api_id, :character_name
