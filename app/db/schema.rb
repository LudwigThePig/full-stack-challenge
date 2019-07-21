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

ActiveRecord::Schema.define(version: 2019_07_21_180906) do

  create_table "companies", force: :cascade do |t|
    t.date "founded_date"
    t.string "name"
    t.string "city"
    t.string "state"
    t.string "description"
    t.integer "founders_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "founders", force: :cascade do |t|
    t.string "name"
    t.integer "company_id"
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "companies_id"
    t.index ["companies_id"], name: "index_founders_on_companies_id"
  end

end
