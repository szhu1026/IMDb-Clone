# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160804205742) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actors", force: :cascade do |t|
    t.text "adult"
    t.text "biography"
    t.text "birthday"
    t.text "deathday"
    t.text "gender"
    t.text "homepage"
    t.text "api_id"
    t.text "imdb_id"
    t.text "name"
    t.text "place_of_birth"
    t.text "popularity"
    t.text "profile_path"
  end

  create_table "castings", force: :cascade do |t|
    t.text    "movie_id"
    t.text    "actor_id"
    t.boolean "actor_casting", default: false
    t.boolean "movie_casting", default: false
  end

  create_table "movies", force: :cascade do |t|
    t.text  "overview"
    t.text  "original_title"
    t.text  "runtime"
    t.float "vote_average"
    t.text  "poster_path"
    t.text  "api_id"
    t.text  "release_date"
  end

end
