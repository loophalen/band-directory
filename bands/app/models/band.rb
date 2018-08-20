class Band
    # connect to postgres
    DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'bands_development'})

    def self.all 
        results = DB.exec("SELECT * FROM bands;")
        return results.map do |result| 
            {
                "id" => result["id"].to_i, 
                "name" => result["name"], 
                "image" => result["image"], 
                "description" => result["description"], 
                "website" => result["website"],
            }
        end 
    end 

    def self.find(id)
        results = DB.exec("SELECT * FROM bands WHERE id=#{id};")
        return   {
            "id" => results.first["id"].to_i, 
            "name" => results.first["name"], 
            "image" => results.first["image"], 
            "description" => results.first["description"], 
            "website" => results.first["website"],
        }
    end 

end 