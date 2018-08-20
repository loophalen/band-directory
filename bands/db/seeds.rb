# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

CREATE TABLE bands (id SERIAL, name TEXT, image TEXT, description TEXT, website TEXT); 

INSERT INTO bands (name, image, description, website) VALUES ('Grand Vapids', 'https://static1.squarespace.com/static/541f406ae4b02579387757fc/t/5431f47ee4b0d4b6148a230c/1412560009509/GrandVapids_3?format=2500w', 'Grand Vapids is a force. A wave of sound propelling "gorgeously defined and thoughtfully executed guitar slow-pop". Gordon Lamb - Flagpole

Forming in early 2014, Grand Vapids spent the course of a year recording its debut album Guarantees with producer and engineer Drew Vandenberg (of Montreal, Deerhunter, Kishi Bashi) at Chase Park Transduction in Athens, GA. On the album the sonic palette is wide. Withguitars that are laboriously crafted, a driving rhythm section, and synths that are densely layered and structured. The songs are at once intimate and expansive, exploring a fevered state of fear and wonder. The album was mastered by Joe Lambert (Wye Oak, Sharon Van Etten, Wild Nothing) in NYC', 'http://www.grandvapids.com/'); 
