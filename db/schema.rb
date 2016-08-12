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

ActiveRecord::Schema.define(version: 20160812132908) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actor_comments", force: :cascade do |t|
    t.text     "title"
    t.text     "body"
    t.text     "api_id"
    t.text     "username"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

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
    t.text    "character_name"
    t.boolean "actor_casting",  default: false
    t.boolean "movie_casting",  default: false
  end

  create_table "movie_comments", force: :cascade do |t|
    t.text     "title"
    t.text     "body"
    t.text     "api_id"
    t.text     "username"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
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

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
