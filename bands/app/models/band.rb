class Band
    attr_reader :id, :name, :image, :description, :website
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

    def self.create(opts)
        results = DB.exec(
            <<-SQL
                INSERT INTO bands (name, image, description, website)
                VALUES ('#{opts["name"]}', '#{opts["image"]}', '#{opts["description"]}', '#{opts["website"]}' )
                RETURNING id, name, image, description, website;
            SQL
        )
        return {
            "id" => results.first["id"].to_i, 
            "name" => results.first["name"], 
            "image" => results.first["image"], 
            "description" => results.first["description"], 
            "website" => results.first["website"]
        }
    end 

    def self.delete(id)
        results = DB.exec("DELETE FROM bands WHERE id=#{id};")
        return { "deleted" => true }
    end

    def self.update(id, opts)
        results = DB.exec(
            <<-SQL
                UPDATE bands
                SET name='#{opts["name"]}', image='#{opts["image"]}', description='#{opts["description"]}', website='#{opts["website"]}'
                WHERE id=#{id}
                RETURNING id, name, image, description, website;
            SQL
        )
        return {
            "id" => results.first["id"].to_i, 
            "name" => results.first["name"], 
            "image" => results.first["image"], 
            "description" => results.first["description"], 
            "website" => results.first["website"]
        }
    end
    
end 